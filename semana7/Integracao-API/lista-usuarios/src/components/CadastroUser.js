//Aqui eu chamo a bibliotecas

import React from "react";
import styled from "styled-components";
import axios from "axios";

//----------fim bibliotecas--------
//-----------Styled-Components-------
const BoxFormulario = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
`;

const LabelNome = styled.label`
  color: darkviolet;
  font-weight: bold;
`;

const LabelEmail = styled.label`
  color: darkviolet;
  font-weight: bold;
`;

const InputNome = styled.input`
  border-radius: 30px;
  padding: 5px;
`;

const InputEmail = styled.input`
  border-radius: 30px;
  padding: 5px;
`;

const BotaoSalvar = styled.button`
  margin-top: 10%;
  border-radius: 8px;
  box-shadow: 5px 9px 10px 1px;
  background-color: limegreen;
  padding: 5px 10px;
  font-weight: bolder;
`;
//------Fim Styled-Components---------------------------

//--------Declarçao de função de classe e estate---------

class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
  };
  //--------Fim declaração de função de classe e estate-----

  //--------Funções------------------------------

  onChangeNomeUsuario = (e) => {
    this.setState({ nome: e.target.value });
    //console.log(this.state.nome)
  };

  onChangeEmailUsuario = (e) => {
    this.setState({ email: e.target.value });
    //console.log(this.state.email)
  };

  onClickSalvar = () => {
    this.registraUsuario();
  };
  //----------Fim de Funções----------------
  //requisição POST createUser
  registraUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    //------Estrutura de requisição de APi------------

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "Luis-Boaventura-Molina",
          },
        }
      )
      .then((resposta) => {
        window.alert("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        window.alert(
          "Ops! Verifique se todos os campos estão corretos, ou se o seu user já não está página de lista."
        );
      });

    this.setState({ nome: "", email: "" });
  };

  //--------Fim da estrutura de requisição de APi--------

  render() {
    return (
      <BoxFormulario>
        <h2>Cadastro</h2>

        <LabelNome>Nome: </LabelNome>
        <InputNome
          type={"text"}
          placeholder={"Insira o nome"}
          onChange={this.onChangeNomeUsuario}
        />

        <LabelEmail>E-mail:</LabelEmail>
        <InputEmail
          type={"text"}
          placeholder={"Insira o e-mail"}
          onChange={this.onChangeEmailUsuario}
        />

        <BotaoSalvar onClick={this.onClickSalvar}>Salvar</BotaoSalvar>
      </BoxFormulario>
    );
  }
}

export default CadastroUsuario;
