import React, {useState} from "react";
import Flex from "../Help/Flex";
import Button from "../Help/Button";
import {SvgSelector} from "../Help/SvgSelector";
import {
  HeaderLoginLink,
  HeaderNavMenuList,
  HeaderNavMenuListItem, HeaderNavMenuMobileBackground,
  HeaderNavMenuMobileButton,
  HeaderNavMenuWrapper
} from "./HeaderStyledComponent";


export const HeaderNavMenu = () => {
  const [activeNavMenu, setActiveNavMenu] = useState(false)

  function handleOpenNavMenu() {
    setActiveNavMenu(true)
  }

  function handleCloseNavMenu() {
    setActiveNavMenu(false)
  }

  return (
    <>
      <HeaderNavMenuWrapper className={activeNavMenu ? "active" : ""}>
        <Flex justify={"space-between"} mediaDirectoin={"column"}>
          <Flex align={"center"} mediaDirectoin={"column"}>
            <nav>
              <HeaderNavMenuList>
                <HeaderNavMenuListItem href={"#"}>Авто</HeaderNavMenuListItem>
                <HeaderNavMenuListItem href={"#"}>Недивижимость</HeaderNavMenuListItem>
                <HeaderNavMenuListItem href={"#"}>Работа</HeaderNavMenuListItem>
                <HeaderNavMenuListItem href={"#"}>Авто</HeaderNavMenuListItem>
              </HeaderNavMenuList>
            </nav>
          </Flex>
          <Flex align={"center"} mediaDirectoin={"column"}>
            <HeaderLoginLink href="#">Вход и регистрация</HeaderLoginLink>
            <Button
              primary
              padding={"10px 15px"}
              margin={"0 0 0 25px"}
              mediaTablet={"margin: 0; padding: 0px"}
            >Подать обьявление</Button>
          </Flex>
        </Flex>
      </HeaderNavMenuWrapper>
      <HeaderNavMenuMobileButton>
        <Button onClick={() => handleOpenNavMenu()} clean>
          <SvgSelector id={"BurgerMenu"}/>
        </Button>
      </HeaderNavMenuMobileButton>
      <HeaderNavMenuMobileBackground
        className={activeNavMenu ? "active" : ""}
        onClick={() => handleCloseNavMenu()}
      />
    </>
  )
}