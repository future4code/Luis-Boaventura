import React from "react";
import styled from "styled-components";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  align-items: center;
  padding: 0 8px;
`;

const LogoAstromatch = styled.img`
  height: 50px;
`

const ArrowBack = styled(ArrowBackIcon)`
    color: white;
    cursor: pointer;
    :hover {
        color: cadetblue;
    }
`

const MatchFireIcon = styled(WhatshotIcon)`
    color: darkred;
    cursor: pointer;
    :hover {
        color: red;
        cursor: pointer;
    }
`

function AppBar(props) {
  return (
    <AppBarContainer>
      <ArrowBack onClick={props.goToChooseProfilePage}>Escolher</ArrowBack>
      <LogoAstromatch src='https://i.imgur.com/fq6QSmV.png' />
      <MatchFireIcon onClick={props.goToMatchListPage}>Lista</MatchFireIcon>
    </AppBarContainer>
  );
}

export default AppBar;
