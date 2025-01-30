import estilos from './link.module.css';
import Link from 'next/link';

export default function Navegacao() {
    return (
        <nav className={estilos.container_links}>
            <ul>
                <li><Link href="/" className={estilos.link}>Home</Link></li>
                <li><Link href="/componentes/quemSomos" className={estilos.link} aria-label="Saiba mais sobre nós">Quem somos</Link></li>
                <li><Link href="/componentes/contatos" className={estilos.link} aria-label="Entre em contato conosco">Contatos</Link></li>
            </ul>
        </nav>
    );
}
