'use client'
import { useRef, useEffect } from "react";
import estilos from "./page.module.css";
import Videosrc from '../../public/video1.mp4'
import Carousel from "./componentes/carousel/page";
<<<<<<< HEAD
=======
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
>>>>>>> e428ed7e639fd17d8e34892f549788c89a7e99eb

export default function Home() {
  const refs= {
    title: useRef(null),
    section: useRef(null),
    title2: useRef(null),
    section2: useRef(null),
    divs: [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
    ],

  }


  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{

    const { title, section, title2, section2, divs } = refs;

    const timeLine = gsap.timeline({defaults: {duration: 1}})

    gsap.fromTo(title.current, 
      {opacity: 0, x: "-500px",},
      {opacity: 1, x: "0px", duration: 1, scrollTrigger: {trigger: section.current, start: "top 10%", end: "top -20%",scrub: true, once: true}
  })

  gsap.fromTo(title2.current, 
    {opacity: 0,x: "-500px",},
    {opacity: 1,x: "0px",duration: 1,scrollTrigger: {trigger: section2.current,start: "top 80%", end: "top 60%", scrub: true, once: true}
})

 divs.forEach((div, index) => {
  gsap.fromTo(div.current, { opacity: 0, x: "-500px" },
    { opacity: 1, x: "0px" ,  scrollTrigger: {
          trigger: div.current,
          start: "top 80%",
          end: "top 60%",  
          scrub: true,  
          once: true,
        
        }
          
    })
 })
 

  }, [])

  return (
    <main>
      <section ref={refs.section} className={estilos.main_container}>
        <video
          className={estilos.video_main}
          alt="video de pessoas caridosas"
          src={Videosrc}
          autoPlay
          muted
          loop
        ></video>
        <h1 ref={refs.title}>
          Leo Clube Sertões
        </h1>
      </section>

      <section ref={refs.section2} className={estilos.container_section}>
        <h1 ref={refs.title2}>Conheça-nos</h1>

        <div className={estilos.in}>
          <div className={estilos.div_in_section}>
            <div ref={refs.divs[0]} className={estilos.container_p}>
              <h2>Em que acreditamos:</h2>
              <p>
                Acreditamos que, ao unir nossas forças e corações, podemos criar
                um mundo onde a solidariedade e a compaixão guiem nossas ações,
                transformando vidas e construindo um futuro mais justo para
                todos.
              </p>
            </div>
            <div ref={refs.divs[1]} className={estilos.container_p}>
              <h2>Nossas particularidade:</h2>
              <p>
                Em cada pequeno gesto de bondade, encontramos o poder de mudar
                não apenas o dia de alguém, mas também o curso de suas vidas,
                mostrando que juntos podemos superar qualquer desafio.
              </p>
            </div>
            <div ref={refs.divs[2]} className={estilos.container_p}>
              <h2>Nossa missão: </h2>
              <p>
                Nossa missão é ser a luz na escuridão, oferecendo apoio e
                esperança àqueles que mais precisam, sabendo que o impacto de
                nossas ações hoje pode ressoar por gerações futuras.
              </p>
            </div>
            <div ref={refs.divs[3]} className={estilos.container_p}>
              <h2>Quando somos um só:</h2>
              <p>
                Quando estendemos a mão ao próximo, descobrimos que a verdadeira
                força está na união e na capacidade de criar um legado de amor e
                compaixão que transformará o mundo ao nosso redor.
              </p>
            </div>
          </div>
        </div>

        <h1>Algumas de nossas atividades:</h1>
        <div className={estilos.carousel}><Carousel /></div>
      </section>
    </main>
  );
}
