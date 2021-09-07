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
import personImg from "../../assets/images/person.png"

const Product = () => {
  const person = {
    name: "Михаил Воровьев",
    profession: "Частное лицо",
    img: personImg,
    rating: 5,
    testimonials: 5
  }

  return (
    <StyledProduct>
      <StyledProductPreView>
        <StyledProductColumn>
          <StyledProductTitle>
            Электросамокат kugoo Gx
          </StyledProductTitle>
        </StyledProductColumn>
        <StyledProductColumn>
          <StyledProductPrice>
            75 000 ₽
          </StyledProductPrice>

          <Person person={person}/>

          <StyledButton>Показать телефон</StyledButton>
          <StyledButton secondary>Написать сообщение</StyledButton>
        </StyledProductColumn>
      </StyledProductPreView>
      <StyledProductDescription>
        Продаю не спеша самокат в хорошем состоянии.
        Торг возможен.
        За период эксплуатации не выявлено ни одной проблемы.
        Из минусов — нужно прокачать задний тормоз.
        Установлен отсекатель сзади.
        Покрышки CST внедорожные.
        Все на подшипниках, болты протянуты.
        Пробег 881км , это немного для такого зверя.
      </StyledProductDescription>
    </StyledProduct>
  )
}

export default Product;