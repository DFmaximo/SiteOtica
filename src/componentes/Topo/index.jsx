import estilos from './Topo.module.css'
import Image from 'next/image'
import icone from '../../../public/oculos.jpg'
import Link from 'next/link'


export default function Topo() {
    return(
        <div className={estilos.container}>
            <div className={estilos.container_secundario}>
                <Link href="/" className={estilos.link}>
                    <Image src={icone} alt='oculos' className={estilos.image} />
                </Link>
                <div className={estilos.texto}> 
                    <Link href="../SecaoProdutos/" className={estilos.link}>PRODUTOS</Link>
                    <Link href="../SecaoSobre/" className={estilos.link}>SOBRE</Link>
                    <Link href="../SecaoContato/" className={estilos.link}>CONTATO</Link>
                </div>
            </div>
        </div>
    )
}