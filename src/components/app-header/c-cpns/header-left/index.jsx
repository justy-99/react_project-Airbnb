import React, { memo } from 'react'
import { LeftWrapper } from './style'
import Iconlogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {

  const navgiage = useNavigate()


  return (
    <LeftWrapper>
      <div className='logo' onClick={() => {navgiage('/home')}}>
        <Iconlogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft