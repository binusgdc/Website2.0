import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="description" content="BGDC Website" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
