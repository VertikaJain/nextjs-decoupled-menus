const menuId = "drupal-wiki"

export async function getStaticProps() {
  const result = await (await fetch(`https://decoupled-menus.jsonapi.dev/system/menu/${menuId}/linkset`)).json()

  return {
    props: { data: result.linkset[0].item }
  }
}

export default function Index() {
  return 
}
