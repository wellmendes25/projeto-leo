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
  title: "Leo clubes",
  description: "criado por W.M.S",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
        <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link href="/favicon.ico" rel="icon"/>
      </head>
      <body>
        <Topo/>
        {children}
        <Rodape/>
        </body>
    </html>
  );
}
