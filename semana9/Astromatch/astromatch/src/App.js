import React from "react";
import Main from "./Components/Main/Main";
import ResetButton from "./Components/ResetButton/ResetButton";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(black, MediumOrchid, white);
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
`;

function App() {
  return (
    <AppContainer>
      <Main />
      <ResetButton />
    </AppContainer>
  );
}

export default App;
