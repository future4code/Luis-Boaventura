import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { useHistory } from 'react-router';

export const HomePage = () => {
 const history = useHistory ()

 const goToLisTripsPage = () =>{
   history.push("/Viagens")
 }


  return (
    <div >
      <p> Home Page : Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>
      <button onClick = {goToLisTripsPage}>Lista de Viagens </button>
      <br></br>
      <button>Area Adm </button>
    </div>
  );
}


