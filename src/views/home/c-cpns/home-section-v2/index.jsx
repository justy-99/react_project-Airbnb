import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

const HomeSectionV2 = memo((props) => {

  const { infoData } = props

  const tabNames = infoData.dest_address?.map(item => item.name)

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle= {infoData.subtitle}/>
      <SectionTabs tabNames={tabNames}/>
      <SectionRooms roomList={infoData.dest_list?.['佛山']} itemWidth="33.33%"/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2