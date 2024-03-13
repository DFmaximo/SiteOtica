import estilos from './SecaoCapa.module.css'

export default function Capa () {
    return(
        <div className={estilos.container}>
            <div className={estilos.texto}>
                <p>Preços baixos em</p>
                <h1>ÓCULOS DE <br /> GRAU E DE SOL</h1>                
                <p>Você só encontra aqui</p>
            </div>
        </div>
    )
}