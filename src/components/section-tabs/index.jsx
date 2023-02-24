import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import ScrollView from '@/base-ui/scroll-view'
import { TabsWrapper } from './style'
import classNames from 'classnames'

const SectionTabs = memo((props) => {
  const { tabNames = [] } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index) {
    setCurrentIndex(index)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div 
                className={classNames('item',{active: currentIndex === index})}
                key={index}
                onClick={ e => itemClickHandle(index)}
              >
                {item}
              </div>
            )
          })
        
        }
     </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs