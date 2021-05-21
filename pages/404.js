import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const File404 = () => {

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 5000);
    }, [])

    return <div className="not-found">
        <h1>The Page cannot be Found.</h1>
        <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
}

export default File404;