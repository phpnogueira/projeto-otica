import React from 'react';
import './style.css';


export default function SecaoProdutos() {
 return (
  <section className='produtos-secao' id='produtos'>
    <div className='limitar-secao'>

      <h3>NOSSOS PRODUTOS</h3>
      <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
      <p>Todos os nosso preços são acessíveis e contam com a melhor qualidade do mercado</p>

      <div className='produtos-card'>

        <div className='produto-box'>
          <h2>Óculos de grau</h2>
          <img src='/assets/oculos01.png' alt='imagem de um óculos' />
          <p>R$ 500,00</p>
        </div>

        <div className='produto-box'>
          <h2>Óculos transition</h2>
          <img src='/assets/oculos02.png' alt='imagem de um óculos' />
          <p>R$ 750,00</p>
        </div>


        <div className='produto-box'>
          <h2>Óculos de sol</h2>
          <img src='/assets/oculos03.png' alt='imagem de um óculos' />
          <p>R$ 700,00</p>
        </div>

        <div className='produto-box'>
          <h2>Óculos infantil</h2>
          <img src='/assets/oculos04.png' alt='imagem de um óculos' />
          <p>R$ 500,00</p>
        </div>

      </div>

      <p>Todos os nossos produtos incluem:</p>
      <ul className='produtos-list'>
        <li>Garantia de 1 ano</li>
        <li>Manutenção preventiva</li>
        <li>Descontos especiais na compra da segunda unidade</li>
        <li>Flexibilidade de pagamento</li>
      </ul>



    </div>
  </section>
 );
}