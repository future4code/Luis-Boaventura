import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://cdn.icon-icons.com/icons2/2643/PNG/512/man_boy_people_avatar_user_person_black_skin_tone_icon_159355.png" 
          nome="Luis Claudio Boaventura" 
          descricao="Oi, eu sou o Luis. Sou estudante na Labenu. Estou aprendendo muito sobre programação para me tornar um profissional melhor."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container-pequeno">
        <CardPequeno 
          imagem="https://simpleicons.org/icons/gmail.svg" 
          email="Ajudando a desenvolver colas para quadros" 
        />
        
        <CardPequeno 
          imagem="https://simpleicons.org/icons/googlemaps.svg"  
          endereço="Rua do alfeneiro, numero 4" 
        />
      </div>



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://simpleicons.org/icons/3m.svg" 
          nome="3M" 
          descricao="Ajudando a desenvolver colas para quadros" 
        />
        
        <CardGrande 
          imagem="https://simpleicons.org/icons/github.svg" 
          nome="GitHub" 
          descricao="Aprovando varios PR da Nasa e do FBI" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
