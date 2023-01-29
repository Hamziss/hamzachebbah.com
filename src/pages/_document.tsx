/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html
			data-wf-site="61717fd08d472714903446f3"
			data-wf-page="61717fd08d47270d093446f7"
		>
			<Head>
				<link
					rel="icon"
					id="favicon"
					type="image/x-icon"
					href="/images/favicon.svg"
				/>
				<meta charSet="UTF-8" />
				<meta name="author" content="Hamza Chebbah" />
				<meta
					name="keywords"
					content="Portfolio,hamza,React,ReactJS,NextJS,SQL,MongoDB,ExpressJS,typescript,Redis,Docker,Datascience"
				/>
				<meta
					name="description"
					content="Porfolio of Hamza Chebbah a Full Stack Developer and Data Scientist"
				/>
				<link
					rel="preload"
					href="/fonts/HelveticaNowDisplay-Regular.woff"
					as="font"
					crossOrigin=""
					type="font/woff"
				/>
				<link
					rel="preload"
					href="/fonts/IntegralCF-Bold.otf"
					as="font"
					crossOrigin=""
					type="font/otf"
				/>
				<link href="/fonts/webfont.css" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
