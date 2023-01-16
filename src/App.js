import React from 'react'
import Topo from './componentes/Topo/';
import SecaoCapa from './componentes/Conteudo/SecaoCapa/';
import SecaoProdutos from './componentes/Conteudo/SecaoProdutos/';
import SecaoSobre from './componentes/Conteudo/SecaoSobre/';
import SecaoContato from './componentes/Conteudo/SecaoContato/';
import Rodape from './componentes/Rodape/';

import './App.css';

function App() {
  return (
    <div className="App">
      <Topo />
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
      <Rodape />
    </div>
  );
}

export default App;
