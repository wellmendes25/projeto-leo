'use client'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import estilos from './contatos.module.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// import componentes 
import Container from '../container/container';




export default function App() {



  return (
    <main className={estilos.container}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
       
      >
        <SwiperSlide className={estilos.slider}>
          <Container>
            <h1>5643465453123njkl</h1>
            <h3>titulo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere alias necessitatibus illum molestias, in eos recusandae quas id debitis, nostrum quisquam nesciunt natus blanditiis repudiandae iure suscipit odio rerum.</p>
          </Container>
        </SwiperSlide>
        <SwiperSlide className={estilos.slider}>
          <Container>
          <h3>titulo</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere alias necessitatibus illum molestias, in eos recusandae quas id debitis, nostrum quisquam nesciunt natus blanditiis repudiandae iure suscipit odio rerum.</p>
          </Container>
        </SwiperSlide>
        <SwiperSlide className={estilos.slider}>
          <Container>
          <h3>titulo</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere alias necessitatibus illum molestias, in eos recusandae quas id debitis, nostrum quisquam nesciunt natus blanditiis repudiandae iure suscipit odio rerum.</p>
          </Container>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
