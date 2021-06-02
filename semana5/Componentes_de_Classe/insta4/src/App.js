import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Lindinha '}
          fotoUsuario={'https://picsum.photos/40/40'}
          fotoPost={'https://picsum.photos/210/150'}
        />
        <Post
          nomeUsuario={'docinho'}
          fotoUsuario={'https://picsum.photos/45/50'}
          fotoPost={'https://picsum.photos/205/150'}
        />
        <Post
          nomeUsuario={'Florzinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
