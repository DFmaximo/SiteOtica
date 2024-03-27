import Topo from "./Topo/index"
import Rodape from "./Rodape/index"



export default function Loyalt({children}) {
    return(
        <>
            <Topo />
            <div>{children}</div>
            <Rodape />
        </>
    )
}