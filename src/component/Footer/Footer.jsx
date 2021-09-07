import React from "react";
import {
  StyledFooter,
  StyledFooterCopirate, StyledFooterHelpLinks, StyledFooterHelpLinksItem,
  StyledFooterPrivacyPolicy,
  StyledFooterPrivacyPolicyItem
} from "./StyledFooter";
import {Link} from "react-router-dom";

const Footer = () => {


  return (
    <StyledFooter>
      <StyledFooterCopirate>
        © ООО «Абито», 2011–2021
      </StyledFooterCopirate>
      <StyledFooterPrivacyPolicy>
        <StyledFooterPrivacyPolicyItem>
          <Link to={"#"}>
            Политика конфиденциальности
          </Link>
        </StyledFooterPrivacyPolicyItem>
        <StyledFooterPrivacyPolicyItem>
          <Link to={"#"}>
            Обработка данных
          </Link>
        </StyledFooterPrivacyPolicyItem>
      </StyledFooterPrivacyPolicy>
      <StyledFooterHelpLinks>
        <StyledFooterHelpLinksItem>
          <Link to={"#"}>
            Реклама на сайте
          </Link>
        </StyledFooterHelpLinksItem>
        <StyledFooterHelpLinksItem>
          <Link to={"#"}>
            Вакансии
          </Link>
        </StyledFooterHelpLinksItem>
        <StyledFooterHelpLinksItem>
          <Link to={"#"}>
            Помощь
          </Link>
        </StyledFooterHelpLinksItem>
      </StyledFooterHelpLinks>
    </StyledFooter>
  )
}

export default Footer