import React from "react";
import styled from "styled-components";
import Header from "./component/Header";

const AppWrapper = styled.div`
  max-width: 1146px;
  margin: 0 auto;
  min-height: 100vh;
`

function App() {
  return (
    <AppWrapper className="App">
        <Header />
    </AppWrapper>
  );
}

export default App;
