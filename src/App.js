import React from "react";
import styled from "styled-components";
import Header from "./component/Header/Header";

const AppWrapper = styled.div`
  max-width: 1200px;
  padding: 0 27px;
  margin: 0 auto;
  min-height: 100vh;
`

function App() {
  return (
    <AppWrapper className="App">
      <Header/>
    </AppWrapper>
  );
}

export default App;
