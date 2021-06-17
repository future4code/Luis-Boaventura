import React from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStyle from "./components/global";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Botão = styled.div`
  padding: 5px;
  box-shadow: 5px 9px 10px 1px;
  background-color: blue;
  padding: 5px 10px;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 4px;
  background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);

  &botão:hover {
    background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    background-color: #476e9e;
  }

  .botão:active {
    position: relative;
    top: 1px;
  }
`;

const Boxcontainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 40vw;
  border-radius: 15px;
  padding: 10px;
`;

class App extends React.Component {
  state = {
    atividade: {},
  };

  getAtividade = () => {
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then((res) => {
        this.setState({ atividade: res.data });
      })
      .catch((err) => {
        window.alert("Ops! tivemos algum problema");
      });
  };

  render() {
    const { activity, type, participants, price } = this.state.atividade;
    return (
      <Container>
        <GlobalStyle />
        <h1>Você está procurando algo para fazer?</h1>
        <Botão onClick={this.getAtividade}>Clique aqui!!</Botão>
        <h2>Atividade escohida : </h2>
        <Boxcontainer>
          <p>Nome : {activity}</p>
          <p>Tipo : {type} </p>
          <p>Participantes : {participants} </p>
          <p>Preço : {price}</p>
        </Boxcontainer>
      </Container>
    );
  }
}

export default App;
