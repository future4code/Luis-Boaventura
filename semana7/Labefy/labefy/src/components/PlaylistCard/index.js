import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`

const NameContainer = styled.p`
    margin: 10px;
`

const DeleteButton = styled.p`
    color: red;
`
const Mybutton = styled.button`

	box-shadow: 1px 0px 15px 0px #3dc21b;
	background-color:#228B22;
	border-radius:8px;
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

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <Mybutton onClick={() => props.changePage("playlistDetail", props.playlistId)}>Abrir playlist</Mybutton>
            <NameContainer>{props.name}</NameContainer>
            <DeleteButton onClick={() => props.deletePlaylist(props.playlistId)} >❌</DeleteButton>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard