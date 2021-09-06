import React from "react";
import styled, {css} from "styled-components";

const StyledButton = styled.button`
  color: ${props => props.theme.colors.white};
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  ${props => props.primary && css `
    background: ${props => props.bgColor || props.theme.colors.primary};
  `}
  ${props => props.secondary && css `
    background: ${props => props.bgColor || props.theme.colors.secondary};
  `}
`

const Button = (props) => {
  return <StyledButton {...props}/>
}

export default Button