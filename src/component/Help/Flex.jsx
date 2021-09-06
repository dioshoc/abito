import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  align-items: ${props => props.align || "stretch"};
  justify-content: ${props => props.justify || "stretch"};
  margin: ${({margin}) => margin || "0"};

  @media ${props => props.theme.media.tablet} {
    flex-direction: ${props => props.mediaDirectoin || "row"};
    align-items: ${props => props.mediaAlign || "stretch"};
    justify-content: ${props => props.mediaJustify || "stretch"};
    margin: ${({mediaMargin}) => mediaMargin || "0"};
  }
`

const Flex = (props) => {
  return <StyledFlex {...props}/>
}
export default Flex;