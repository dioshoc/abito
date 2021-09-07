import React from "react";
import {
  StyledProduct,
  StyledProductColumn,
  StyledProductDescription,
  StyledProductPreView, StyledProductPrice,
  StyledProductTitle
} from "./StyledProduct";
import {StyledButton} from "../buttons/StyledButton";
import Person from "../Persone/Person";
import Gallery from "../Gallery/Gallery";

const Product = ({product: {person, gallery, name, price, description}}) => {


  return (
    <StyledProduct>
      <StyledProductPreView>
        <StyledProductColumn>
          <StyledProductTitle>
            {name}
          </StyledProductTitle>
          <Gallery gallery={gallery}/>
        </StyledProductColumn>
        <StyledProductColumn>
          <StyledProductPrice>
            {price} ₽
          </StyledProductPrice>

          <Person person={person}/>

          <StyledButton>Показать телефон</StyledButton>
          <StyledButton secondary>Написать сообщение</StyledButton>
        </StyledProductColumn>
      </StyledProductPreView>
      <StyledProductDescription>
        {description}
      </StyledProductDescription>
    </StyledProduct>
  )
}

export default Product;