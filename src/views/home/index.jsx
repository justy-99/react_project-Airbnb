import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchHomeDataAction('payload...'))
  },[dispatch])

  return (
    <div>
      <HomeBanner/>
      <HomeWrapper>
        <div className='content'>
          <div className='good-price'>
            <SectionHeader title={goodPriceInfo.title}/>
            <SectionRooms roomList={goodPriceInfo.list}/>
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home