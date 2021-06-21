import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: MediumSpringGreen ;
`

const ButtonsContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;

`

const Mybutton = styled.button`

	box-shadow: 1px 0px 15px 0px #3dc21b;
	background-color:#228B22;
	border-radius:16px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:7px 63px;
	text-decoration:none;
	text-shadow:0px 1px 17px #2f6627;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Labefy 🎵</h1>
            <ButtonsContainer>
                <Mybutton onClick={() => props.changePage("playlistCreationPage")} >Cadastrar Playlist</Mybutton>
                <Mybutton onClick={() => props.changePage("playlistManagerPage")} >Gerenciar Playlists</Mybutton>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header