'use client'

import estilos from './carousel.module.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// imagens
const imagens = [
    { id: 1, imagem: '/imagem1.jpg' },
    { id: 2, imagem: '/imagem2.jpg' },
    { id: 3, imagem: '/imagem3.jpg' },
    { id: 4, imagem: '/imagem4.jpg' },
];

const Carousel = () => {
    return (
        <section className={estilos.carouselContainer}>
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                effect={'coverflow'}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {imagens.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.imagem} 
                            alt={`Slider ${item.id}`} 
                            className={estilos.imageContainer}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Carousel;
