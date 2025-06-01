import React, { useRef } from "react"
import { IntroductionSectionWrapper } from "./Introduction.styles"
import IntroductionLeftBar from "./LeftBar.component"
import IntroductionRightBar from "./RightHeaderBar.component"
import { useIntroductionLayout } from "./useIntroductionLayout"

const IntroductionSection = props => {
  const wrapperRef = useRef(null)
  useIntroductionLayout(wrapperRef)

  return (
    <IntroductionSectionWrapper id="introduction" ref={wrapperRef}>
      <IntroductionLeftBar />
      <IntroductionRightBar />
    </IntroductionSectionWrapper>
  )
}

export default IntroductionSection
