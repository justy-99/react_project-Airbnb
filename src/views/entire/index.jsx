import React, { memo } from 'react'
import { EntreWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'

const Entire = memo(() => {
  return (
    <EntreWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntreWrapper>
  )
})

export default Entire