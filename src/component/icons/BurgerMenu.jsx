import React from "react";
import styled from "styled-components";

const StyledBurgerMenuIcon = styled.svg`
  width: 30px;
  height: 15px;
  display: flex;
`

const BurgerMenuIcon = () => {
  return (
    <StyledBurgerMenuIcon width="30" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M.937 2.375h28.125a.938.938 0 000-1.875H.937a.938.938 0 000 1.875zM29.062 7.063H.937a.938.938 0 000 1.875h28.125a.938.938 0 000-1.875zM29.063 13.625h-18.75a.938.938 0 000 1.875h18.75a.938.938 0 000-1.875z"
        fill="#000"/>
    </StyledBurgerMenuIcon>
  )
}

export default BurgerMenuIcon

