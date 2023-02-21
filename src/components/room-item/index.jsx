import React, { memo } from 'react'
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData } = props

  return (
    <ItemWrapper>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
      </div>
    </ItemWrapper>
  )
})

export default RoomItem