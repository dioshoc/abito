import styled from "styled-components";
import {
  StyledNavigationBar, StyledNavigationBarItem,
  StyledNavigationBarList
} from "../NavigationBar/StyledNavigationBar";
import {StyledButton} from "../buttons/StyledButton";

export const StyledHeader = styled.header`
  margin: 30px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;

  ${StyledNavigationBar} {
    margin-left: 20px;
  }

  ${StyledButton}:last-of-type {
    margin-left: 25px;
  }
`
export const StyledHeaderButtonsWrapper = styled.div`
  display: flex;
`
export const StyledHeaderColumnMobile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${props => props.theme.device.tablet} {
    display: none;
  }

  &.active {
    height: 100%;
    width: 30%;
    min-width: 250px;
    padding: 25px;
    top: 0;
    right: 0;
    z-index: 100;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${props => props.theme.colors.primary};

    ${StyledNavigationBar} {
      margin: 0;
      flex-direction: column;
    }

    ${StyledNavigationBarList} {
      flex-direction: column;
      align-items: flex-start;

      ${StyledNavigationBarItem} a {
        color: ${props => props.theme.colors.white}
      }
    }

    ${StyledHeaderButtonsWrapper} {
      flex-direction: column;

      ${StyledButton} {
        padding: 0;
        color: ${props => props.theme.colors.white}
      }

      ${StyledButton}:last-of-type {
        margin: 0;
        padding: 7px;
        border: 1px solid ${props => props.theme.colors.white}
      }
    }
  }
`


export const StyledHeaderMobileBlackout = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  background: ${props => props.theme.colors.black};
  opacity: .4;
  z-index: 20;

  &.active {
    display: flex;
  }
`
export const StyledHeaderMobileButton = styled.div`
  display: none;
  @media ${props => props.theme.device.tablet} {
    display: flex;
  }
`