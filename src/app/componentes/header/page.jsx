import Link from "next/link";
import Image from "next/image";
import estilos from './header.module.css';
import Topo_Imagem from '../../../../public/imagem-logo.png'
import MenuHamburguer from "../menu-hamburguer/menu/page";

export default function Topo(){
    return(
        <header>
             <MenuHamburguer/>
            <div className={estilos.container_header}>
               
                <Image className={estilos.imagem_topo} src={Topo_Imagem}></Image>
                <nav>
                    <Link className={estilos.links_topo} href={""}>Home |</Link>
                    <Link className={estilos.links_topo} href="/quem-somos">Quem Somos |</Link>
                    <Link className={estilos.links_topo} href={""}>Contatos</Link>
                </nav>
            </div>
        </header>
    )
}