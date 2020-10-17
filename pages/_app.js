import Link from "next/link";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <h1>amend.css</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/elements">
                                <a>Elements</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Component {...pageProps} />
                <script src="https://unpkg.com/prismjs@1.22.0/prism.js"></script>
            </main>
            <footer>
                <div>a</div>
                <div></div>
                <div></div>
            </footer>
        </>
    );
}
