import styled from "styled-components"
import { flexCenter } from "./../mixins/mixins"

const SectionHeader = styled.span`
  font: ${({ theme: { fWeight, fSize } }) =>
    `${fWeight.semiBold} ${fSize.XXL} Montserrat, Poppins, Arial, sans-serif`};
  letter-spacing: 15px;
  margin: 0 auto;

  @media screen and (max-width: 1220px) {
    font-size: ${({ theme }) => theme.fSize.XL};
  }

  @media screen and (max-width: 1080px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }

  @media screen and (max-width: 750px) {
    font-size: ${({ theme }) => theme.fSize.XL};
    letter-spacing: 10px;
  }

  @media screen and (max-width: 650px) {
    letter-spacing: 5px;
  }

  @media screen and (max-width: 380px) {
    font-size: ${({ theme }) => theme.fSize.L};
    letter-spacing: 0;
  }
`

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`

export { SectionHeader, Wrapper }
