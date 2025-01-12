'use client'

import estilos from './carousel.module.css';
import { Pagination, EffectCoverflow, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// imagens
const imagens = [
    { id: 1, imagem: '/foto1.jpg' },
    { id: 2, imagem: '/foto2.jpg' },
    { id: 3, imagem: '/foto3.jpg' },
    { id: 4, imagem: 'foto4.jpg' },
    { id: 5, imagem: '/foto5.jpg' },
    { id: 6, imagem: '/foto6.jpg' }
    
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
