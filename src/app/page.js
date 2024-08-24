import Image from "next/image";
import estilos from "./page.module.css";
import ImagemCaridade from '../../public/caridade-2.jpg'

export default function Home() {
  return (
    <main>
      <section className={estilos.main_container}>
        <Image className={estilos.imagem_main} src={ImagemCaridade}></Image>
        <h1>Leo Clube sertões</h1>
      </section>
    </main>
  );
}
