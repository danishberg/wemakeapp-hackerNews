
import '../styles/index.css'; // or wherever your TailwindCSS directives are located
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
