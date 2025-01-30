import estilos from "./container.module.css";
import Image from "next/image";
import React from "react";

export default function Container({ Imagem, texto, Nome }) {
    return (
        <div className={estilos.Container}>
            <Image className={estilos.Imagem} src={Imagem} alt={texto} />
            <h4>{Nome}</h4>
            <p className={estilos.Texto}>{texto}</p>
        </div>
    );
}
