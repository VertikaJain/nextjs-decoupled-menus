import '../styles/globals.css'
import Layout from "../components/Layout"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Decoupled Menus</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content="Demo of decoupled menus in nextjs with great SEO" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
