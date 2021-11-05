import Link from "next/link";
import Prism from "prismjs";
import { useEffect } from "react";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
    useEffect(function highlightCode() {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <header>
                <a href="/">
                    <h1>
                        <img src="/name.png" alt="amend.css" />
                    </h1>
                </a>
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
            </main>
            <footer>
                <div>
                    <a href="/">Home</a>
                    <a href="/elements">Elements</a>
                </div>
                <div>
                    <a
                        href="https://github.com/leodr/amend.css"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com/leodriesch"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>
                </div>
                <div>© 2020 Leonhard Driesch. All rights reserved.</div>
            </footer>
        </>
    );
}
