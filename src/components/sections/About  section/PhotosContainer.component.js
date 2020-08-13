import React from "react"
import { PhotosWrapper, ShadowElement } from "./About.styles"
import PhotosElement from "./PhotosElement.component"

const PhotosContainer = props => (
  <PhotosWrapper>
    <ShadowElement />
    <PhotosElement />
  </PhotosWrapper>
)
export default PhotosContainer
