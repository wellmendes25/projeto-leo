'use client'
import Image from "next/image";
import estilos from "./page.module.css";

import Caridade3 from '../../public/caridade.jpg'
import Videosrc from '../../public/video1.mp4'
import Carousel from "./componentes/carousel/page";



export default function Home() {
  return (
    <main>
      <section className={estilos.main_container}>
        <video className={estilos.video_main} alt="video de pessoas caridosas" src={Videosrc} autoPlay muted loop></video>
        <h1>Leo Clube sertões</h1>
      </section>

      <section className={estilos.container_section}>
        <h1>Conheça-nos</h1>
        
            
            <div className={estilos.in}>
              <div className={estilos.div_in_section}>
              
                <div className={estilos.container_p}>
                  <h2>Em que acreditamos:</h2>
                  <p>Acreditamos que, ao unir nossas forças e corações, podemos criar um mundo onde a solidariedade e a compaixão guiem nossas ações, transformando vidas e construindo um futuro mais justo para todos.</p>
                </div>
                <div className={estilos.container_p}>
                  <h2>Nossas particularidade:</h2>
                  <p>Em cada pequeno gesto de bondade, encontramos o poder de mudar não apenas o dia de alguém, mas também o curso de suas vidas, mostrando que juntos podemos superar qualquer desafio.</p>
                </div>
                <div className={estilos.container_p}>
                  <h2>Nossa missão: </h2>
                  <p>Nossa missão é ser a luz na escuridão, oferecendo apoio e esperança àqueles que mais precisam, sabendo que o impacto de nossas ações hoje pode ressoar por gerações futuras.</p>
                </div>
                <div className={estilos.container_p}>
                  <h2>Quando somos um só:</h2>
                  <p>Quando estendemos a mão ao próximo, descobrimos que a verdadeira força está na união e na capacidade de criar um legado de amor e compaixão que transformará o mundo ao nosso redor."</p>
                </div>
              
              </div>
            </div>   
          

          <h1>Algumas de nossas atividades:</h1>
          <div className={estilos.carousel}><Carousel/></div>
      </section>
    </main>
  );
}
