import estilos from './rodape.module.css'
import Link from 'next/link'

export default function Rodape() {
    return(
        <div className={estilos.container}>
            <p>© 2022 <Link href="/" className={estilos.link}>Ótica Vida.</Link> - Todos os direitos reservados.</p>
        </div>
    )
}