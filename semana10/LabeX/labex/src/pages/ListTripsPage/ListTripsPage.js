import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { useHistory } from 'react-router';


export const ListTripsPage = () => {
  const history = useHistory ()

  const goBack = () =>{
    history.goBack ()
  }

  const goHome = ( )=> {
    history.push ("/")
  }


  return (
    <div >
      <button onClick= {goBack}>Voltar </button>
      <button onClick= {goHome}>Ir pra Home</button>
    </div>
  );
}


