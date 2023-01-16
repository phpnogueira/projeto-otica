import React from 'react';
import './style.css';

export default function SecaoSobre() {
 return (
  <section className='sobre-container' id='sobre'>
    <div className='limitar-secao container-sobre '>

      <h3>QUEM SOMOS NÓS?</h3>
      <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>


      <div className='sobre-card '>
        
          <img src='/assets/loja.png' alt='imagem de um óculos' />

          <div className='card'>
            <h2> NOSSAS FILIAIS</h2>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
         

       
        

          
          <div className='card'>
            <h2>ATENDIMENTO FLEXIVEL</h2>
            <p>Nossa equipe é treinada para te atender</p>    
          </div>
          <img className='teste' src='/assets/atendimento.png' alt='imagem de um óculos' />

          
       
        
      </div>


    </div>
  </section>
 );
}