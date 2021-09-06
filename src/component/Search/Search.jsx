import React, {useState} from "react";
import {StyledSearchForm, StyledSearchFormInput, StyledSearch} from "./StyledSearch";
import {StyledButton} from "../buttons/StyledButton";
import SearchIcon from "../icons/SearchIcon";


export const Search = (props) => {
  const [searchValue, setSearchValue] = useState("")

  function searchInput(evt) {
    setSearchValue(evt.target.value)
  }

  function searchSubmit(evt) {
    evt.preventDefault();
    if (searchValue !== "") {
      console.log(searchValue);
      setSearchValue("")
    }
  }

  return (
    <StyledSearch>
      <StyledSearchForm onSubmit={searchSubmit}>
        <StyledSearchFormInput
          type="text"
          placeholder={"Поиск по объявлениям"}
          value={searchValue}
          onChange={searchInput}
        />
        <StyledButton type="submit">
          <SearchIcon/>
          Найти
        </StyledButton>
      </StyledSearchForm>
    </StyledSearch>
  )
}