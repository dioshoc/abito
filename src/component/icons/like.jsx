import React from "react";
import styled from "styled-components";

const StyledLikeIcon = styled.svg`
  width: 15px;
  height: 15px;
  display: flex;

  & path {
    transition: fill .2s ease-in;
  }

  &:hover path {
    fill: ${props => props.theme.colors.primary}
  }
`

const LikeIcon = () => {
  return (
    <StyledLikeIcon width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.81 2.126a4.033 4.033 0 00-3-1.306c-.866 0-1.66.274-2.357.814a4.822 4.822 0 00-.953.995 4.82 4.82 0 00-.953-.995A3.773 3.773 0 004.19.82a4.034 4.034 0 00-3 1.306C.423 2.96 0 4.096 0 5.328c0 1.269.473 2.43 1.488 3.655.908 1.095 2.213 2.207 3.724 3.495.516.44 1.1.939 1.708 1.47a.88.88 0 001.16 0c.607-.531 1.192-1.03 1.708-1.47 1.511-1.288 2.816-2.4 3.724-3.495C14.527 7.758 15 6.597 15 5.328c0-1.232-.423-2.37-1.19-3.202z"
        fill="#C4C4C4"/>
    </StyledLikeIcon>
  )
}

export default LikeIcon