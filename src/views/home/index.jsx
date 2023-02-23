import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'


const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
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
          {/* <div className='good-price'>
            <SectionHeader title={goodPriceInfo.title}/>
            <SectionRooms roomList={goodPriceInfo.list}/>
          </div> */}

          <HomeSectionV1 infoData={goodPriceInfo}/>
          <HomeSectionV1 infoData={highScoreInfo}/>
          <HomeSectionV2 infoData={highScoreInfo}/>

        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home