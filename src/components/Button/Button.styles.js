import styled from "styled-components"
import { flexCenter } from "./../mixins/mixins"

export const Button = styled.button`
  ${flexCenter};
  position: relative;
  width: 400px;
  height: 80px;
  background-color: ${({ theme }) => theme.color.lowLightBlue};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fSize.M};
  font-family: Baloo Thambi, Montserrat, Poppins, Arial, sans-serif;
  border: none;
  cursor: pointer;

  &::before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.color.lowLightBlue};
    transform: translate(-10px, 10px);
    z-index: 1;
    transition: 0.3s;
  }

  &:hover::before {
    transform: translate(10px, -10px) !important;
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fSize.S};
    width: 350px;
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
    height: 60px;
    width: 300px;
  }

  @media screen and (max-width: 350px) {
    font-size: ${({ theme }) => theme.fSize.XXXS};
    height: 60px;
    width: 260px;
  }
`