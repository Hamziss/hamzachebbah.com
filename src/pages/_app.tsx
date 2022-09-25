import type { AppProps } from "next/app"
import Head from "next/head"
import Footer from "src/components/Footer"
import NavBar from "src/components/NavBar"

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title> &lt;HamzaChebbah /&gt;</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp
