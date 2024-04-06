import Topo from "./Topo/index"
import Rodape from "./Rodape/index"
import Head from "next/head";


export default function Loyalt({children}) {
    return(
        <>
            <Head><link rel="icon" href="/favicon.ico.png" /></Head>
            <Topo />
            <div>{children}</div>
            <Rodape />
        </>
    )
}