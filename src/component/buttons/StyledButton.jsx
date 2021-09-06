import styled, {css} from "styled-components";

const transparent = css`
  background: transparent;
  color: ${props => props.theme.colors.black};
`
const secondary = css`
  background-color: ${props => props.theme.colors.secondary};
`

export const StyledButton = styled.button`
  padding: ${props => props.padding || "10px 15px"};
  min-height: 36px;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  ${props => props.transparent && transparent};
  ${props => props.secondary && secondary};
  transition: opacity .2s ease-in;

  &:hover {
    opacity: .6;
  }
`