import estilos from './Topo.module.css'
import Image from 'next/image'
import icone from '../../../public/oculos.jpg'


export default function Topo() {
    return(
        <div className={estilos.container}>
            <div>
                <Image src={icone} alt='oculos' className={estilos.image} />
            </div>
            <div className={estilos.texto}> 
                <h3>PRODUTOS</h3>
                <h3>SOBRE</h3>
                <h3>CONTATO</h3>
            </div>
        </div>
    )
}