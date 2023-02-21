import React, { memo, useEffect, useState } from 'react'
import { getHomeGoodPriceData } from '@/services/modules/home'
import HomeBanner from './c-cpns/home-banner'

const Home = memo(() => {

  const [ highscore, setHighScore ] = useState({})
  
  useEffect(() => {
    getHomeGoodPriceData().then(res => {
      console.log(res);
      setHighScore(res)
    })
  },[])

  return (
    <div>
        <HomeBanner/>
        
    </div>
  )
})

export default Home