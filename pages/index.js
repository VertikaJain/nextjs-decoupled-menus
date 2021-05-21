import Head from 'next/head'

const menuId = "drupal-wiki"

export async function getStaticProps() {
  const result = await (await fetch(`https://decoupled-menus.jsonapi.dev/system/menu/${menuId}/linkset`)).json()

  return {
    props: { data: result.linkset[0].item }
  }
}

export default function Home() {
  return <main>
    <Head>
      <title>Decoupled Menus</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content="Demo of decoupled menus in nextjs with great SEO" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
  </main>
}
