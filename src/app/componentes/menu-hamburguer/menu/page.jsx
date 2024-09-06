'use client';
import { useState } from "react";
import estilos from './menuHamburguer.module.css';
import { CiMenuBurger } from "react-icons/ci";
import Navegacao from "../links";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

export default function MenuHamburguer(){
    const [aberto, setAberto] = useState(false)

    function Abrir(){
        setAberto(!aberto)
    }

    return(
        <div className={estilos.menu_container}>
           <button className={estilos.botao} onClick={Abrir}>{aberto ?<MdOutlineClose size={25} /> :  <CiMenuFries size={25} />}</button>
         {aberto ? <Navegacao/> : null}
        </div>
    )
}