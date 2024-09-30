'use client'

import estilos from './carousel.module.css';
import { Pagination, EffectCoverflow, } from 'swiper/modules';
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
                     effect={'coverflow'}
                     grabCursor={true}
                     centeredSlides={true}
                     slidesPerView={'auto'}
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
