import styled from "styled-components";
import {StyledButton} from "../buttons/StyledButton";
import {StyledPerson} from "../Persone/StyledPerson";

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;

  ${StyledButton} {
    min-width: 264px;
    min-height: 54px;
    margin-bottom: 14px;
  }

  ${StyledPerson} {
    margin-bottom: 30px;
  }

`
export const StyledProductColumn = styled.div`
  &:first-of-type {
    width: 460px;
    margin-right: 30px;
  }
`
export const StyledProductPreView = styled.div`
  display: flex;

`
export const StyledProductDescription = styled.p`
  line-height: 20px;
`
export const StyledProductTitle = styled.h2`
  margin-bottom: 25px;
`
export const StyledProductPrice = styled.div`
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`
