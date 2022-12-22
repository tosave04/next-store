import "../styles/globals.css"
import LayoutProvider from "../components/common/providers/LayoutProvider"
import Layout from "../components/Layout"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<LayoutProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</LayoutProvider>
	)
}
