import styled from "styled-components";

export const StyledNavigationBar = styled.nav`
  display: flex;
`
export const StyledNavigationBarList = styled.ul`
  display: flex;
  gap: 14px;
  align-items: center;
`
export const StyledNavigationBarItem = styled.li`
  cursor: pointer;
  transition: opacity .2s ease-in;

  &:hover {
    opacity: .6;
  }
`