import React from 'react';
import './style.css';


export default function SecaoContato() {
 return (
  <section id='contato' className='secao-contato'>
    <div className='limitar-secao'>
      <h2>FALE CONOSCO</h2>
      <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

      <div className='sobre-informacoes'>
        <div className='sobre-contato'>
          <h4>Contato</h4>
              <div className='sobre-link'>
                <img src="assets/local.png" title="Ícone local" alt="Pino de localização"/>
                <span>Nova Iguaçu, RJ</span>
              </div>

              <div className='sobre-link'>
                <img src="assets/telefone.png" title="Ícone telefone" alt="telefone"/>
                <span>(21) 9999-9999</span>
              </div>

              <div className='sobre-link'>
                <img src="assets/email.png" title="Ícone email" alt="ícone de email"/>
                <span>contato@oticavida.com</span>
              </div>
        </div>

        <div>
          <h4>Nossas Redes Sociais</h4>
              <div className='sobre-link'>
                <img src="assets/fb.png" title="Ícone facebook" alt="ícone do facebook"/>
                <span>/OticaVida</span>
              </div>

              <div className='sobre-link'>
                <img src="assets/ig.png" title="Ícone telefone" alt="telefone"/>
                <span>@oticavidarj</span>
              </div>

              <div className='sobre-link'>
                <img src="assets/tt.png" title="Ícone email" alt="ícone de email"/>
                <span>@oticavidarj</span>
              </div>
        </div>

      </div>

    </div>
  </section>
 );
}