import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin-top: 30px;
`
export const HeaderTop = styled.div`
  margin-bottom: 24px;`
export const HeaderBottom = styled.div``
export const HeaderLogo = styled.a`
  margin-right: 20px;
  max-width: 91px;
  width: 100%;
`

export const HeaderNavMenuWrapper = styled.div`
  width: 100%;
  @media ${props => props.theme.media.tablet} {
    display: none;
    position: absolute;
    width: 40%;
    height: 100vh;
    padding: 25px;
    right: 0;
    top: 0;
    z-index: 100;
    background: ${props => props.theme.colors.primary};
    &.active {
      display: flex;
    }
  }
`

export const HeaderNavMenuList = styled.ul`
  display: flex;
  @media ${props => props.theme.media.tablet} {
    flex-direction: column;
  }
`
export const HeaderLoginLink = styled.a`
  @media ${props => props.theme.media.tablet} {
    color: ${props => props.theme.colors.white};
    margin-bottom: 10px;
  }
`
export const HeaderNavMenuListItem = styled.a`
  margin-right: 14px;

  &:last-child {
    margin-right: 0;
  }

  @media ${props => props.theme.media.tablet} {
    color: ${props => props.theme.colors.white};
    margin-right: 0px;
    margin-bottom: 10px;
  }
`
export const HeaderNavMenuMobileButton = styled.div`
  display: none;
  @media ${props => props.theme.media.tablet} {
    display: flex;
  }
`
export const HeaderNavMenuMobileBackground = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 20;
  background: black;
  opacity: 0.4;
  @media ${props => props.theme.media.tablet} {
    &.active {
      display: flex;
    }
  }
`
