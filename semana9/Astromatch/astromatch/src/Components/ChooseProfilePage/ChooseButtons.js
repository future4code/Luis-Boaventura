import React from "react";
import styled from "styled-components";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;

`

const ButtonYes = styled(FavoriteIcon)`
padding: 15px;
color: #30e203;
border: outset 2px #30e203;
border-radius: 50%;
cursor: pointer;
:hover {
    color: black;
    background-color: #30e203;
    padding: 15px;
}`
    
const ButtonNo = styled(CloseIcon)`
    padding: 15px;
    color: #ff2020;
    border: outset 2px #ff2020;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 120px;
    :hover {
        color: black;
        background-color: #ff2020;
        padding: 15px;
}`

function ChooseButtons(props) {
  return (
    <ButtonsContainer>
      <ButtonYes onClick={props.onClickYes}>
        <FavoriteIcon fontSize="large" />
      </ButtonYes>
      <ButtonNo onClick={props.onClickNo}>
        <CloseIcon fontSize="large" />
      </ButtonNo>
    </ButtonsContainer>
  );
}

export default ChooseButtons;
