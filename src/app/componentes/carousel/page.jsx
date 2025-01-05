'use client'

import estilos from './carousel.module.css';
import { Pagination, EffectCoverflow, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// imagens
const imagens = [
    { id: 1, imagem: '/imagem11-g.jpg' },
    { id: 2, imagem: '/imagem22-g.jpg' },
    { id: 3, imagem: '/imagem33-g.jpg' },
    { id: 4, imagem: '/imagem44-g.jpg' },
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
                    <SwiperSlide className={estilos.slider} key={item.id}>
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
