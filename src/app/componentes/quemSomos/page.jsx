// pages/quem-somos.js
import React from 'react';
import estilos from './quemSomos.module.css';
import Image from 'next/image';
import ImagemRaira from "../../../../public/foto3.jpg"
import Container from '../container/page';

export default function QuemSomos() {
  return ( 
  <section className={estilos.Section}>
      <div className={estilos.Conteiner}>
          <div>
            <Image src={ImagemRaira}/>
          </div>
          <div className={estilos.Texto}>
            <h1>Quem Somos</h1>
            <p>
        O LEO Club é um movimento internacional voltado para o desenvolvimento de jovens líderes,
        promovendo atividades de serviço voluntário e contribuindo para o bem-estar de comunidades locais e globais.
      </p>
      <p>
        Fundado sob a supervisão do Lions Club, o LEO Club oferece a jovens de 12 a 30 anos a oportunidade de
        desenvolver habilidades de liderança, trabalho em equipe e senso de responsabilidade social,
        enquanto participam ativamente de projetos de impacto.
      </p>
      <p>
        Nossa missão é inspirar e capacitar jovens a fazerem a diferença em suas comunidades,
        incentivando valores como cidadania, ética e solidariedade. Somos movidos pelo desejo de criar
        um mundo mais unido e acolhedor para todos.
      </p>
          </div>
      </div>

      <div>
        <div>
          <h1>Companheiros Leo</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam id tempora beatae ut ex nemo maiores! Labore est aspernatur maxime recusandae nostrum blanditiis voluptates ducimus molestiae fugit maiores. Corrupti, voluptates.</p>
        </div>
          <div>
            <Container Imagem={ImagemRaira} texto="Raira"/>
          </div>
      </div>


  </section>
  );
};


