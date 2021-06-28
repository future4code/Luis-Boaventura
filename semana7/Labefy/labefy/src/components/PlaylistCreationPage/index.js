import React from "react";
import styled from "styled-components";
import axios from "axios"
import { baseUrl, axiosConfig } from "../../constants";

const PlaylistCreationFormContainer = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const PlaylistCreationForm = styled.form`   
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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

class PlaylistCreationPage extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputnameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    createPlaylist = (e) => {
        e.preventDefault();
        const body = {
            name: this.state.inputNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(() => {
            alert('Playlist cadastrada com sucesso')
        }).catch(err => [
            console.log(err)
        ]);
        this.setState({inputNameValue: ""});
    };
    
    render () {
        return (
            <PlaylistCreationFormContainer>
                <h1>Cadastrar nova Playlist</h1>
                <PlaylistCreationForm onSubmit={this.createPlaylist} >
                    <label>Nova playlist</label>
                    <input 
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputnameValue}
                    />
                    <Mybutton type="submit">Cadastrar Playlist</Mybutton>
                </PlaylistCreationForm>
            </PlaylistCreationFormContainer>
        );
    };
};

export default PlaylistCreationPage