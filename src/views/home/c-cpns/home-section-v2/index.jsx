import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const HomeSectionV2 = memo((props) => {

  const { infoData } = props

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle= {infoData.subtitle}/>
      <SectionRooms roomList={infoData.list} itemWidth="33.33%"/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2