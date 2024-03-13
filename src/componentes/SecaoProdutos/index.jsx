import estilos from './produto.module.css'
import Image from 'next/image'
import grau from '../../../public/grau.png'
import sol from '../../../public/sol.png'
import transitions from '../../../public/transitions.png'
import infantil from '../../../public/infantil.png'

export default function Produtos() {
    return(
        <div className={estilos.container}>
            <h3>Nossos produtos</h3>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino
                feminino e infantil.
            </p>
            <p className={estilos.p}>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className={estilos.container_prod}>
                <div className={estilos.prod}>
                    <h4>Óculos de grau</h4>
                    <Image src={grau} alt='grau' className={estilos.img} />
                    <p>R$ 500,00 </p>
                </div>
                <div className={estilos.prod}>
                    <h4>Óculos transition</h4>
                    <Image src={transitions} alt='grau' className={estilos.img}/>
                    <p>R$ 750,00 </p>
                </div>
            </div>
            <div className={estilos.container_prod}>
                <div className={estilos.prod}>
                    <h4>Óculos de sol</h4>
                    <Image src={sol} alt='grau' className={estilos.img}/>
                    <p>R$ 700,00 </p>
                </div>
                <div className={estilos.prod}>
                    <h4>Óculos infantil</h4>
                    <Image src={infantil} alt='grau' className={estilos.img} />
                    <p>R$ 500,00 </p>
                </div>
            </div>
            <div className={estilos.informacao}>
                <h4>Todos os nosso produtos incluem:</h4>
            </div>
            <div className={estilos.container_list}>
                <ul className={estilos.lista}> 
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade no pagamento</li>
                </ul>
            </div>
        </div>
    )
}