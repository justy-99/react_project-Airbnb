import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV2Wrapper } from './style'

const HomeSectionV2 = memo((props) => {
  return (
    <SectionV2Wrapper>

    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2