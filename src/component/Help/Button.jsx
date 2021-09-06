import React from "react";
import styled, {css} from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  ${props => props.primary && css`
    background: ${props => props.bgColor || props.theme.colors.primary};
  `};
  ${props => props.secondary && css`
    background: ${props => props.bgColor || props.theme.colors.secondary};
  `};
  ${props => props.clean && css`
    background: ${props => props.bgColor || "none"};
    color: ${props => props.theme.colors.text};
  `};
  @media ${props => props.theme.media.tablet} {
    ${props => props.mediaTablet}
  }
`

const Button = (props) => {
  return <StyledButton {...props}/>
}

export default Button