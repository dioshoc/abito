import React, {useMemo, useState} from "react";
import {
  StyledGallery,
  StyledGalleryMainImage,
  StyledGalleryMainMiniatures,
  StyledGalleryMainMiniaturesItem
} from "./StyledGallery";

const Gallery = ({gallery}) => {
  const [mainPhoto, setMainPhoto] = useState(gallery[0])

  function setPhoto(evt) {
    const id = evt.target.getAttribute("data-photo-id");
    setMainPhoto(gallery[id])
  }

  const imageList = useMemo(() => {
    return (
      gallery.map((item, index) => {
        return (
          <StyledGalleryMainMiniaturesItem
            src={item}
            key={index}
            data-photo-id={index}
            onClick={(e) => setPhoto(e)}
          />
        )
      })
    )
  }, [gallery, setPhoto])

  return (
    <StyledGallery>
      <StyledGalleryMainImage src={mainPhoto}/>
      <StyledGalleryMainMiniatures>
        {imageList}
      </StyledGalleryMainMiniatures>
    </StyledGallery>
  )
}

export default Gallery