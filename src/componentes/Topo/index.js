import React from 'react';
import './style.css'



export default function Topo() {
 return (
  <header className='topo-topo limitar-secao' >
    <div className="topo">
      <img className='imagem-topo' src='/assets/logo.png' alt='imagem de um óculos à direita e o nome da ótica à esquerda' />

      <nav>
        <a className='link-topo' href="#produtos">PRODUTOS</a>
        <a className='link-topo' href="#sobre">SOBRE</a>
        <a className='link-topo' href="#contato">CONTATO</a>
      </nav>
    </div>
  </header>
 );
}