import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'


const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
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

          {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
          {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
          {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
          {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}

        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home