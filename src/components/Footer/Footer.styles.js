import styled from "styled-components"
import { flexCenter, absoluteCenter } from "./../mixins/mixins"
import { Link } from "gatsby"

const FooterWrapper = styled.div`
  position: relative;
  padding: 40px;
  width: 100%;
  height: 320px;
  background-color: ${({ theme }) => theme.color.navyBlue};
  ${flexCenter};
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fSize.M};
  font-weight: ${({ theme }) => theme.fWeight.medium};
`

const DirectorLink = styled.a`
  position: relative;
  font-size: ${({ theme }) => theme.fSize.XXXS};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  svg {
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
  }
`

const LicenseRights = styled(Link)`
  position: absolute !important;
  bottom: 40px;
  right: 60px;
  font-size: ${({ theme }) => theme.fSize.XS};
  font-weight: ${({ theme }) => theme.fWeight.medium};
  text-decoration: none !important;
  color: ${({ theme }) => theme.color.white} !important;
`

export { FooterWrapper, FooterTitle, DirectorLink, LicenseRights }
