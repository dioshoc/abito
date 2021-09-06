import React from "react";
import styled from "styled-components";

const StyledSearchIcon = styled.svg`
  width: 15px;
  height: 15px;
  display: flex;
`

const SearchIcon = () => {
  return (
    <StyledSearchIcon width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.65 14.001l-4.564-4.564a5.707 5.707 0 001.385-3.726A5.742 5.742 0 005.735-.025a5.706 5.706 0 00-4.057 1.68A5.698 5.698 0 000 5.71a5.742 5.742 0 005.735 5.735 5.71 5.71 0 003.727-1.384l4.565 4.564.624-.625zm-8.915-3.438A4.859 4.859 0 01.882 5.711c0-1.297.504-2.516 1.42-3.432A4.82 4.82 0 015.736.858a4.859 4.859 0 014.853 4.853 4.86 4.86 0 01-4.853 4.852z"
        fill="#fff"/>
    </StyledSearchIcon>
  )
}

export default SearchIcon