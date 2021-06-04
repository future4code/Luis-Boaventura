import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
      <div>
        <div className="smallcard-container">
          <img src={props.imagem} />
          <div>
            <h4>{props.email}</h4>
          </div>
          <div>
            <h4>{props.endereço}</h4>
          </div>
        </div>
      </div>
    );
}

export default CardPequeno;