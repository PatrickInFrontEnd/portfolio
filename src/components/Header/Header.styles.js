import styled from "styled-components"

export const Header = styled.h2`
  font-size: ${({ theme }) => theme.fSize.XL};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
  color: ${({ theme }) => theme.color.primaryBlue};

  @media screen and (max-width: 1570px) {
    font-size: ${({ theme }) => theme.fSize.L};
  }
`
