import React from "react";
import Flex from "../Help/Flex";
import {SvgSelector} from "../Help/SvgSelector";
import {HeaderNavMenu} from "./HeaderNavMenu";
import {SiteSearch} from "../SiteSearch/SiteSearch";
import {HeaderWrapper, HeaderTop, HeaderLogo, HeaderBottom} from "./HeaderStyledComponent"

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTop>
        <Flex justify={"space-between"} mediaJustify={"space-between"}>
          <Flex align={"center"}>
            <HeaderLogo href={"/"}>
              <SvgSelector id={"Logo"}/>
            </HeaderLogo>
          </Flex>
          <HeaderNavMenu/>
        </Flex>
      </HeaderTop>
      <HeaderBottom>
        <SiteSearch/>
      </HeaderBottom>
    </HeaderWrapper>
  )
}

export default Header