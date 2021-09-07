import React from "react";
import styled from "styled-components";

export const StyledStarIcon = styled.svg`
  opacity: 1;
`

const StarIcon = () => {
  return (
    <StyledStarIcon width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M9.974 3.836a.53.53 0 00-.458-.365L6.63 3.208 5.49.538a.532.532 0 00-.978 0L3.37 3.208.483 3.47a.531.531 0 00-.301.93l2.181 1.914-.643 2.834a.531.531 0 00.79.574L5 8.234l2.489 1.488a.53.53 0 00.79-.574l-.643-2.834L9.818 4.4a.532.532 0 00.156-.565z"
          fill="#FFC107"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h10v10H0z"/>
        </clipPath>
      </defs>
    </StyledStarIcon>
  )
}
export default StarIcon