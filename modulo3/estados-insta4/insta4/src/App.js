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
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/125'}
        />
         <Post
          nomeUsuario={'Aninha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Fernandinha'}
          fotoUsuario={'https://picsum.photos/50/47'}
          fotoPost={'https://picsum.photos/200/148'}
        />
      </MainContainer>

      
    );
  }
}

export default App;
