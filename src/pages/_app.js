import "@/styles/globals.css";
import Loyalt from "@/componentes/loyalt";

export default function App({ Component, pageProps }) {
  return (
        <Loyalt>
          <Component {...pageProps} />
        </Loyalt>
  )
}
