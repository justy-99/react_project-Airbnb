import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { RoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
  const { roomList = [],itemWidth } = props

  return (
    <RoomsWrapper>
      {
        roomList.slice(0,8)?.map(item => (
          <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}/>
        ))
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}


export default SectionRooms