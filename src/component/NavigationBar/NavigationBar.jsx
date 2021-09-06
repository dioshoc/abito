import React, {useMemo} from "react";
import {StyledNavigationBar, StyledNavigationBarItem, StyledNavigationBarList} from "./StyledNavigationBar";
import {Link} from "react-router-dom";

const NavigationBar = ({itemsList}) => {

  const navList = useMemo(() => {
    return (
      itemsList.map((item, index) => {
          return (
            <StyledNavigationBarItem key={index}>
              <Link to={item.href}>
                {item.title}
              </Link>
            </StyledNavigationBarItem>
          )
        }
      )
    )
  }, [itemsList])

  return (
    <StyledNavigationBar>
      <StyledNavigationBarList>
        {navList}
      </StyledNavigationBarList>
    </StyledNavigationBar>
  )
}

export default NavigationBar;