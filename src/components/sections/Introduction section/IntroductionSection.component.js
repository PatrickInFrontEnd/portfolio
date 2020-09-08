import React, { useRef } from "react"
import { IntroductionSectionWrapper } from "./Introduction.styles"
import IntroductionRightBar from "./RightHeaderBar.component"
import IntroductionLeftBar from "./LeftBar.component"
import { useIntroductionSectionLayout } from "./useIntroductionLayout"

const IntroductionSection = props => {
  const wrapperRef = useRef(null)
  useIntroductionSectionLayout(wrapperRef)

  return (
    <IntroductionSectionWrapper id="introduction" ref={wrapperRef}>
      <IntroductionLeftBar />
      <IntroductionRightBar />
    </IntroductionSectionWrapper>
  )
}

export default IntroductionSection
