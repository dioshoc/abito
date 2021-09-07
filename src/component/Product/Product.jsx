import React from "react";
import {
  StyledProduct,
  StyledProductColumn,
  StyledProductDescription,
  StyledProductPreView, StyledProductPrice,
  StyledProductTitle
} from "./StyledProduct";
import {StyledButton} from "../buttons/StyledButton";

const Product = () => {
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

            <StyledButton>Показать телефон</StyledButton>
            <StyledButton secondary>Написать сообщение</StyledButton>
          </StyledProductPrice>
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