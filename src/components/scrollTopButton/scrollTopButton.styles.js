import styled from "styled-components"
import ElipseScroll from "./../../assets/images/elipse_scroll_top.svg"
import ArrowScroll from "./../../assets/images/arrow_scroll_top.svg"

const Elipse = styled(ElipseScroll)`
  width: inherit;
  height: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(0);
    }

    100% {
      transform: translate(-50%, -50%) rotate(380deg);
    }
  }
`

const Arrow = styled(ArrowScroll)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(180deg);
  width: 20px;
  height: 40%;
  transition: 0.3s;
`

const ElipseWrapper = styled.div`
  position: fixed;
  z-index: 1000000;
  right: 50px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  cursor: pointer;

  &:hover {
    ${Arrow} {
      transform: translate(-50%, -50%) rotate(0);
    }

    ${Elipse} {
      animation: 4s rotation infinite;
    }
  }
`
export { ElipseWrapper, Arrow, Elipse }
