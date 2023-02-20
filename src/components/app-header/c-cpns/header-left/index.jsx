import React, { memo } from 'react'
import { LeftWrapper } from './style'
import Iconlogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
        <Iconlogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft