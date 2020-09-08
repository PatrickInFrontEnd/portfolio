import styled from "styled-components"
import { flexCenter, getBackgroundUrl } from "./../mixins/mixins"

const Wrapper = styled.div`
  position: relative;
  ${flexCenter};
  justify-content: center;
  width: 220px;
  height: 60px;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  padding: 0 0 0 30px;
`

const IconName = styled.span`
  font: ${({ theme: { fSize, fWeight } }) =>
    `${fWeight.semiBold} ${fSize.S} Montserrat, Poppins, Arial, sans-serif`};
  text-transform: capitalize;
`

const IconWrapper = styled.div`
  position: absolute;
  left: -40px;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.black};
  border: 2px solid ${({ theme }) => theme.color.mediumWhite};
  border-radius: 50%;
  width: 80px;
  height: 80px;

  ${({ bgUrl }) => getBackgroundUrl(bgUrl)};
  background-size: 70% 70%;
`

export { Wrapper, IconName, IconWrapper }
