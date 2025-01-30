import Link from "next/link";
import Image from "next/image";
import estilos from './header.module.css';
import Topo_Imagem from '../../../../public/imagem-logo-l.png'
import MenuHamburguer from "../menu-hamburguer/menu/page";

export default function Topo(){
    return(
        <header>
             <MenuHamburguer/>
            <div className={estilos.container_header}>
               
                <Image className={estilos.imagem_topo} alt="imagem do topo" src={Topo_Imagem}></Image>
                <nav>
<<<<<<< HEAD
                    <Link className={estilos.links_topo} href={""}>Home |</Link>
                    <Link className={estilos.links_topo} href={"quemsomos"}>Quem Somos |</Link>
                    <Link className={estilos.links_topo} href={""}>Contatos</Link>
=======
                    <Link className={estilos.links_topo} href={"/"}>Home |</Link>
                    <Link className={estilos.links_topo} href={"/componentes/quemSomos"}>Quem somos |</Link>
                    <Link className={estilos.links_topo} href={"/componentes/contatos"}>Contatos</Link>
>>>>>>> e428ed7e639fd17d8e34892f549788c89a7e99eb
                </nav>
            </div>
        </header>
    )
}