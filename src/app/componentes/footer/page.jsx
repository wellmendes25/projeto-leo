import estilos from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Whatsapp from '../../../../public/icons8-whatsapp-50.png';
import Instagram from '../../../../public/icons8-instagram-50.png';
import Internet from '../../../../public/icons8-internet-50.png';


export default function Rodape(){
    return(
        <footer className={estilos.footer}>
            <div className={estilos.footer_container}>
                <div>
                    <Link href="https://www.instagram.com/leoclubesertoes/" target='_blank'>
                        <Image src={Instagram} alt="instagram" />
                    </Link>
                </div>
                <div>
                    <Link href="https://wa.me/558896862400?text=Olá%2C%20gostaria%20de%20mais%20informações
" target='_blank'>
                        <Image src={Whatsapp} alt="WhatsApp" />
                    </Link>
                </div>
                <div>
                    <Link href="https://www.mundoleo.com.br/" target='_blank'>
                        <Image src={Internet} alt="site do mundo leo" />
                    </Link>
                </div>
                
            </div>

            <p>{'\u00A9'} {new Date().getFullYear()} Site desenvolvido por <a href="https://www.linkedin.com/in/wellison-mendes-422013140/" target='_blank'>Wellison</a>, <a href="https://www.linkedin.com/in/mateus-araujo-1b7285238/" target='_blank'>Mateus</a> e <a href="https://www.linkedin.com/in/suellen-moron-803220224/" target='_blank'>Suellen</a></p>
        </footer>
    )
}
