import styled from "styled-components"

const SectionHeaderWrapper = styled.section`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    #c462a7 0%,
    #c278a7 30%,
    #56b3dc 70%,
    #4ac3e9 100%
  );
`

const SectionTitle = styled.h3`
  position: relative;
  font-size: ${({ theme }) => theme.fSize.M};
  font-weight: ${({ theme }) => theme.fWeight.regular};
  font-family: Lobster, Montserrat, Arial, sans-serif;

  svg {
    max-height: 60px;
    position: absolute;
    fill: ${({ theme }) => theme.color.white};
  }
`
export { SectionHeaderWrapper, SectionTitle }