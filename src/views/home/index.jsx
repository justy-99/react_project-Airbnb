import React, { memo, useEffect, useState } from 'react'
import { getHomeGoodPriceData } from '@/services/modules/home'

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
      <div>{highscore.title}</div>
      <div>{highscore.subtitle}</div>
      <ul>
        {
          highscore.list?.map( item => {
            return <li key={item.id}>{item.name}</li>
          })
        }

      </ul>
    </div>
  )
})

export default Home