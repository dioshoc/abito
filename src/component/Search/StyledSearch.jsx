import styled from "styled-components";
import {StyledButton} from "../buttons/StyledButton";

export const StyledSearch = styled.div`
  & svg {
    margin-right: 5px;
    margin-bottom: 1px;
  }

  & ${StyledButton} {
    padding: 15px 20px;
  }
`
export const StyledSearchForm = styled.form`
  display: flex;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
`
export const StyledSearchFormInput = styled.input`
  width: 100%;
  padding: 14px 24px;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  outline: none;

  &::placeholder {
    opacity: .4;
  }
`