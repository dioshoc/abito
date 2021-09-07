import styled from "styled-components";
import {StyledStarIcon} from "../icons/Star";

export const StyledPerson = styled.div`
  display: flex;
  justify-content: space-between;

  ${StyledStarIcon} {
    opacity: .3;
    margin-right: 3px;

    &:last-of-type {
      margin: 0;
    }
  }
`
export const StyledPersonColumn = styled.div``
export const StyledPersonImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const StyledPersonName = styled.h5`
  margin-bottom: 7px;
`
export const StyledPersonProfession = styled.p`
  font-size: 12px;
  line-height: 14px;
`

export const StyledPersonTestimonials = styled.div`
  display: flex;
  margin-bottom: 5px;
`
export const StyledPersonTestimonialsCount = styled.div`
  opacity: .5;
`
export const StyledPersonTestimonialsStars = styled.div`
  margin-right: 10px;
`