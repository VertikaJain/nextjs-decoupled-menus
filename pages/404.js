import Link from "next/link"

const File404 = () => {
    return <div className="not-found">
        <h1>The Page cannot be Found.</h1>
        <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
}
 
export default File404;