import Topo from "./componentes/header/page";
import Rodape from "./componentes/footer/page";
import "./globals.css";
import {register} from 'swiper/element/bundle'

register();

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

export const metadata = {
  title: "Leos clubles",
  description: "criado por W.M.S",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        {children}
        <Rodape/>
        </body>
    </html>
  );
}
