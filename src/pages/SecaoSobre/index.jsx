import estilos from './SecaoSobre.module.css'
import Image from 'next/image'
import otica from '../../../public/otica.png'
import atende from '../../../public/atende.jpg'
import Head from 'next/head'

export default function Sobre() {

    return(
        <>
            <Head>
                <title>Óticas Vida | Sobre</title>
            </Head>
            <div className={estilos.container}>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2021, em Nova Iguaçu - Rio de Janeiro, a Óticas vida inciou
                    suas atividades focada no atendimento ao publico de renda mais <br/> baixa,
                    sempre com objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                </p>

                <div className={estilos.container_img}>
                    <Image src={otica} alt='farmacia' className={estilos.img} />
                    <div className={estilos.txt}>
                        <h4>NOSSAS FILIAIS</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na <br/>América</p>
                    </div>
                </div>
                <div className={estilos.container_img}>
                    <div className={estilos.txt2}>
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                    <Image src={atende} alt='atendente' className={estilos.img2} />
                </div>
            </div>
        </>
    )
}