import style from './contatos.module.css'


export default function Contatos(){
    return(
        <>
        <header className={style.head}>
          <div cassName={style.imgheader}>
            <div className={style.bannerh1}><h1>Procuramos o melhor tipo de pessoa:</h1></div>
            <div className={style.hone}><h1>Voluntários</h1></div>
            <div className={style.htwo}><h2>Faça a diferença na vida de alguém</h2></div>
            <div className={style.bannertwo}><h2>Seja voluntário</h2></div>
           </div>
        </header>
        <div className={style.title}>
            <h2>Contate Nos</h2>
        </div>
        <div className={style.main}>
            <div className={style.conteudo}>
                <div className={style.conteudoone}> 
                    <img src="/telefone.png" alt="telefone" height="35px" width="40px"/>
                    <h3>TELEFONE</h3>
                    <p>Entre em contato conosco.</p>
                </div>
                <div className={style.conteudotwo}>
                    <img src="/email.png" alt="email" height="35px" width="40px"/>
                    <h3>EMAIL</h3>
                    <p>entre em contato conosco.</p>
                </div>
                <div className={style.conteudothree}>
                    <img src="/localizacao.png" alt="localização" height="35px" width="40px"/>
                    <h3>NOS ENCONTRE</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className={style.contact}>
                <div className={style.iframe}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287085.4369632518!2d-51.379769163042255!3d-23.29269308575918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435a57af586d%3A0x23ac11a5c614f971!2sLondrina%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1727447057974!5m2!1spt-BR!2sbr" width="730" height="465" title="Secure IFrame"
                    sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
                <div>
                    <form className={style.form} method="post">
                    <fieldset className={style.formulary}>
                    <div>
                        <label for=""></label>
                        <input className={style.input} type="text" name="nome" placeholder="Digite o seu nome" required />
                    </div>
				    <div>
                        <label for=""></label>
                        <input className={style.input} type="text" name="email" placeholder="Digite o seu e-mail" required />
                    </div>
                    <div>
                        <label for=""></label>
                        <input className={style.input} type="text" name="numbero" placeholder="(XX)XXXXX-XXXX" required/>
                    </div>
                     <div>
                        <label for=""></label>
                        <textarea className={style.text} id="mensagem" name="mensagem" placeholder="Mensagem" required></textarea>
                    </div>
                        <button className={style.button} type="submit">Enviar</button>
                    </fieldset>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}