'use client'

import { useState } from "react";
import estilos from './carousel.module.css';
import Image from "next/image";

// react icons
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

// imagens
import imagem1 from '../imagens/imagem1.jpg';
import imagem2 from '../imagens/imagem2.jpg';
import imagem3 from '../imagens/imagem3.jpg';
import imagem4 from '../imagens/imagem4.jpg';

const Carousel = () => {
    const imagens = [imagem1, imagem2, imagem3, imagem4];
    const [mudarImagem, setMudarImagem] = useState(0);

    const proximaImagem = () => {
        setMudarImagem((prevIndex) =>
            prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
        );
    };

    const anteriorImagem = () => {
        setMudarImagem((prevIndex) =>
            prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={estilos.carouselContainer}>
            <div className={estilos.carouselSlide}>
                <Image 
                    src={imagens[mudarImagem]} 
                    alt="carousel" 
                

                />
            </div>

            <div className={estilos.botaoContainer}>
                <button className={estilos.imagem_anterior} onClick={anteriorImagem}>
                    <GrLinkPrevious />
                </button>

                <button className={estilos.proxima_imagem} onClick={proximaImagem}>
                    <GrLinkNext />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
