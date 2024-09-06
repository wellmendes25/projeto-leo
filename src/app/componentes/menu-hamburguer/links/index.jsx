import estilos from './link.module.css';
export default function Navegacao(){
return(
    <nav className={estilos.container_links}>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">quem somos</a></li>
        <li><a href="">Contatos</a></li>
    </ul>
</nav> 
)
}