import styled from "styled-components"

export const Header = styled.h2`
  font-size: ${({ theme }) => theme.fSize.XL};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
  color: ${({ theme }) => theme.color.mediumLightBlue};
`
