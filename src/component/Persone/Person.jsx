import React from "react";
import {
  StyledPerson,
  StyledPersonColumn,
  StyledPersonImg,
  StyledPersonName,
  StyledPersonProfession, StyledPersonTestimonials, StyledPersonTestimonialsCount, StyledPersonTestimonialsStars
} from "./StyledPerson";
import StarIcon from "../icons/Star";

const Person = ({person: {name, profession, img, rating, testimonials}}) => {
  let testimonialsCount;
  if (testimonials === 1) {
    testimonialsCount = testimonials + " отзыв"
  } else if (testimonials > 1 && testimonials < 5) {
    testimonialsCount = testimonials + " отзыва"
  } else {
    testimonialsCount = testimonials + " отзывов"
  }

  return (
    <StyledPerson>
      <StyledPersonColumn>
        <StyledPersonName>
          {name}
        </StyledPersonName>

        <StyledPersonTestimonials>
          <StyledPersonTestimonialsStars>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
          </StyledPersonTestimonialsStars>
          <StyledPersonTestimonialsCount>
            {testimonialsCount}
          </StyledPersonTestimonialsCount>
        </StyledPersonTestimonials>
        <StyledPersonProfession>
          {profession}
        </StyledPersonProfession>
      </StyledPersonColumn>

      <StyledPersonColumn>
        <StyledPersonImg src={img} alt={name}/>
      </StyledPersonColumn>
    </StyledPerson>
  )
}
export default Person