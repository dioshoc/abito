import React from "react";
import Button from "../Help/Button";
import {SvgSelector} from "../Help/SvgSelector";
import {SiteSearchForm, SiteSearchFormInput, SiteSearchSvg, SiteSearchWrapper} from "./SiteSearchStyle";


export const SiteSearch = (props) => {
  function SearchSubmit(evt) {
    evt.preventDefault();
    evt.console.log(evt.target.value);
  }

  return (
    <SiteSearchWrapper>
      <SiteSearchForm onSubmit={() => SearchSubmit()}>
        <SiteSearchFormInput type="text" placeholder={"Поиск по объявлениям"}/>
        <Button primary padding={"15px 20px"} mediaTablet={"padding: 17px 12px"}>
          <SiteSearchSvg>
            <SvgSelector id={"Search"}/>
          </SiteSearchSvg>
          Найти
        </Button>
      </SiteSearchForm>
    </SiteSearchWrapper>
  )
}