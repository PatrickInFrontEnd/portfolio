import React, { useState } from "react"
import SliderContext from "./../../contexts/slider.context"
import sliderData from "./sliderData"

const SliderProvider = props => {
  const [data] = useState(sliderData)

  return (
    <SliderContext.Provider
      value={{
        data,
      }}
    >
      {props.children}
    </SliderContext.Provider>
  )
}

export default SliderProvider
