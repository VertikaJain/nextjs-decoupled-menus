import '../styles/globals.css'
import Layout from "../components/Layout"
// import Menu from './menu'

function MyApp({ Component, pageProps }) {
  // console.log("pageProps in app.js...", pageProps);
  return <Layout>
      {/* <Menu data={pageProps.data}></Menu> */}
      <Component {...pageProps} />
  </Layout>
}
/* 
MyApp.getInitialProps = async (ctx) => {
  const result = await (await fetch("https://decoupled-menus.jsonapi.dev/system/menu/main/linkset")).json()
  console.log("result in getInitialProps...", result);
  return {
    props: { data: result.linkset[0].item }
  }
} */


export default MyApp
