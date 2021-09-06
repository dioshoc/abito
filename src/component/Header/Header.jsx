import React, {useState} from "react";

import {
  StyledHeader,
  StyledHeaderButtonsWrapper,
  StyledHeaderColumnMobile,
  StyledHeaderMobileBlackout,
  StyledHeaderMobileButton
} from "./StyledHeader"
import {StyledButton} from "../buttons/StyledButton";
import SiteLogo from "../icons/SiteLogo";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Link} from "react-router-dom";
import BurgerMenuIcon from "../icons/BurgerMenu";

const Header = () => {
  const itemsList = [
    {title: "Авто", href: "/single"},
    {title: "Недвижимость", href: "#"},
    {title: "Работа", href: "#"},
    {title: "Услуги", href: "#"},
  ]

  const [mobileMenu, setMobileMenu] = useState(false);

  function handleOpenMobileMenu() {
    setMobileMenu(true)
  }

  function handleCloseMobileMenu() {
    setMobileMenu(false)
  }

  return (
    <StyledHeader>
      <Link to="/">
        <SiteLogo/>
      </Link>

      <StyledHeaderColumnMobile
        className={mobileMenu ? "active" : ""}
      >
        <NavigationBar itemsList={itemsList}/>
        <StyledHeaderButtonsWrapper>
          <StyledButton
            transparent
            padding="0"
          >Вход и регистрация</StyledButton>
          <StyledButton>Подать объявление</StyledButton>
        </StyledHeaderButtonsWrapper>
      </StyledHeaderColumnMobile>
      <StyledHeaderMobileBlackout
        className={mobileMenu ? "active" : ""}
        onClick={handleCloseMobileMenu}
      />
      <StyledHeaderMobileButton onClick={handleOpenMobileMenu}>
        <StyledButton transparent>
          <BurgerMenuIcon/>
        </StyledButton>
      </StyledHeaderMobileButton>
    </StyledHeader>
  )
}

export default Header