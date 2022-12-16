import Link from "next/Link"
import Image from "next/image"
export default function Navbar(){
    return(
        <nav>
            <div>
                <Image src="/imgs/lyric.png" width="30" height="30" alt="lyric"></Image>
                <h1>Your Artits</h1>
            </div>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}