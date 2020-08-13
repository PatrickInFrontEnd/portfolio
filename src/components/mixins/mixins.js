import { css } from "styled-components"

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function getBackgroundUrl(url) {
  if (!url) {
    return css`
      background-color: #fff;
    `
  }

  return css`
    background-image: url(${url});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  `
}

export { flexCenter, getBackgroundUrl, absoluteCenter }
