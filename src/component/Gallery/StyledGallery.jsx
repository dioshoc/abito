import styled from "styled-components";

export const StyledGallery = styled.div``
export const StyledGalleryMainImage = styled.img`
  max-width: 100%;
  max-height: 357px;
  border-radius: 10px;
`
export const StyledGalleryMainMiniatures = styled.div`
  display: flex;
  margin-top: 16px;
`
export const StyledGalleryMainMiniaturesItem = styled.img`
  width: 68px;
  height: 53px;
  display: flex;
  margin-right: 5px;
  border-radius: 3px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`