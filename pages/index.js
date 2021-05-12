import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export async function getStaticProps() {
  const result = await (await fetch("https://decoupled-menus.jsonapi.dev/system/menu/drupal-wiki/linkset")).json()
  // console.log("result...", result);
  return {
    props: { data: result.linkset[0].item }
  }
}

export default function Home() {
  // console.log("data in homepage...", data);
  return <>
    <Head>
      <title>Geeks | Homepage</title>
    </Head>
    <div>
      <h1 className={styles.title}>home page</h1>
      <p className={styles.text}>this is home page asgwqgjwqghjwbgasmbnsfkbg wgjgnkf gheqh </p>
      <Link href="/listing">
        <a className={styles.btn}>See List</a>
      </Link>
    </div>
  </>
}
