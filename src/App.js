import React from "react";
import styled from "styled-components";
import Header from "./component/Header/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./component/Home/Home";
import SinglePage from "./component/SingleProductPage/SingleProductPage";
import {Search} from "./component/Search/Search";

const AppWrapper = styled.div`
  max-width: 1200px;
  padding: 0 calc(54px / 2);
  margin: 0 auto;
`

function App() {
  return (
    <AppWrapper>
      <Header/>
      <main>
        <Search/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/single' component={SinglePage}/>
        </Switch>
      </main>
    </AppWrapper>
  );
}

export default App;
