import axios from "axios";
import React from "react";
import styled from 'styled-components'

const ButtonReset = styled.button`
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    margin: 10px;
    :hover {
        font-weight: bolder;
        letter-spacing: 1px;
        border: 1px outset black;
        background-color: DarkOrchid;
    }
`

const ButtonContainer = styled.div`
    
`

function ResetButton() {
  const onClickReset = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luis-Claudio-Boaventura/clear"
      )
      .then((response) => {});
  };

  return (
    <ButtonContainer>
      <ButtonReset onClick={onClickReset}>Resetar Match's</ButtonReset>
    </ButtonContainer>
  );
}

export default ResetButton;
