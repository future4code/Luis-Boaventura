import React from 'react';
import styled from 'styled-components';
import CadastroUsuario from './components/CadastroUser';
import ListaUsuarios from './components/listaUser';
import GlobalStyle from "./components/global"

const ContainerPrincipal = styled.main`
  margin: 0;
`

const BotaoAlteraPagina = styled.button`
  background-color: darkorange;
  box-shadow: 5px 9px 10px 1px;
  font-weight: bolder;
  border-radius: 8px;
  margin-top: 30px;
  margin-left: 20px;
  padding: 5px 10px;
`

class App extends React.Component {
  state = {
    paginaAtual: 'CADASTRO'
  }

  onClickMudarPagina = () => {
    const proximaPagina = this.state.paginaAtual === 'CADASTRO' ? 'LISTA' : 'CADASTRO';
    this.setState({ paginaAtual: proximaPagina });
  };

  render() {
    return (
      <ContainerPrincipal>
        <GlobalStyle />
        <BotaoAlteraPagina onClick={this.onClickMudarPagina}>

          {this.state.paginaAtual === 'CADASTRO' ? 'Ir para a lista' : 'Voltar para a página o cadastro'}

        </BotaoAlteraPagina>

        {this.state.paginaAtual === 'CADASTRO' ? (<CadastroUsuario />) : (<ListaUsuarios />)}

      </ContainerPrincipal>

    );
  }
}

export default App;