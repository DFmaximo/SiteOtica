import estilos from './contato.module.css'
import Image from 'next/image'
import map from '../../../public/map.png'
import tel from '../../../public/telefone.png'
import email from '../../../public/email.png'
import face from '../../../public/face.png'
import insta from '../../../public/insta.png'
import tw from '../../../public/tw.png'

export default function Contato () {
    return(
        <div className={estilos.container_principal}>
            <h3 className={estilos.subtitulo}>Fale conosco</h3>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            <div className={estilos.container_principal2}>
                <div>
                    <h3>Nossos contatos</h3>
                    <div className={estilos.container_secundario}>
                        <Image src={map} alt='ponteiro do mapa' className={estilos.imagens}></Image>
                        <span>Nova Iguaçu, RJ</span>
                    </div>
                    <div className={estilos.container_secundario}>
                        <Image src={tel} alt='ponteiro do mapa' className={estilos.imagens}></Image>
                        <span> (21) 9999-9999) </span>
                    </div>
                    <div className={estilos.container_secundario}>
                        <Image src={email} alt='ponteiro do mapa' className={estilos.imagens}></Image>
                        <span>contato@oticavida.com</span>
                    </div>
                </div>
                <div>
                    <h3>Nossas Redes Sociais</h3>
                    <div className={estilos.container_secundario}>
                        <Image src={face} alt='ponteiro do mapa' className={estilos.imagens}></Image>
                        <span> /OticaVida </span>
                    </div>
                    <div className={estilos.container_secundario}>
                        <Image src={insta} alt='ponteiro do mapa' className={estilos.imagens}></Image>
                        <span> @oticavida </span>
                    </div>
                    <div className={estilos.container_secundario}>
                        <Image src={tw} alt='ponteiro do mapa' className={estilos.imagens}></Image>
                        <span> @oticavida </span>
                    </div>
                </div>
            </div>
        </div>
    )
}