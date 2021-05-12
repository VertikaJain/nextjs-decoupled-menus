import Link from "next/link"

const MenuBar = ({ data }) => {
    /* const data = (async () => {
        const result = await (await fetch("https://decoupled-menus.jsonapi.dev/system/menu/main/linkset")).json()
        console.log("result in menubar...", result.linkset[0].item);
        return  result.linkset[0].item
    })() */
    // console.log("data in menubar...", data);
    return <nav>
        <div className="logo">
            <h1>Decoupled Menus Demo</h1>
        </div>
        <ul>{data.map((d, index) => {
            console.log(d['drupal-menu-hierarchy'][0])
            
            if (d.title === "A̶̝̺̽u̵͇̜͑t̸̢̗͝h̵̛̥ͅḙ̴̰̎n̸̦̈́t̸͖̍i̶̩͐͝ć̶͉̳̚ą̸̳͆t̵̙̉̋i̴͙͔͗͋ő̷͙n̸͍̆̃ ̶̼̉̚͜o̸͙͍͋̃ṽ̸̗è̶͕͈̚r̴͈͍̂v̷̺̣͗i̶̻̞̇̽é̷̳̥͠w̷͍̮̋͝")
                d.title = "Authentication-overview"
            
            return <li key={index}>
                <Link href={d.href}><a>{d.title} </a></Link>
            </li>
        })}
        </ul>


        {/* <Link href="/"><a>Home </a></Link>
        <Link href="/about"><a>About </a></Link>
        <Link href="/listing"><a>Other List</a></Link> */}
    </nav>
}

export default MenuBar;