import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Título de la página */}
                <title>Gaucho Digital</title>

                {/* Meta descripción */}
                <meta name="description" content="Expertos en marketing digital y desarrollo web." />

                {/* Palabras clave */}
                <meta name="keywords" content="marketing digital, desarrollo web, Gaucho Digital, servicios digitales" />

                {/* Autor */}
                <meta name="author" content="Gaucho Digital Team" />

                {/* Charset */}
                <meta charSet="UTF-8" />

                {/* Robots */}
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content="Gaucho Digital" />
                <meta property="og:description" content="Expertos en marketing digital y desarrollo web." />
                <meta property="og:url" content="" />
                <meta property="og:site_name" content="Gaucho Digital" />
                <meta property="og:image" content="/GauchoDigital_Iso.webp" />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Gaucho Digital logo" />
                <meta property="og:locale" content="es_AR" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gaucho Digital" />
                <meta name="twitter:description" content="Expertos en marketing digital y desarrollo web." />
                <meta name="twitter:image" content="/GauchoDigital_Iso.webp" />
            </Head>
            <body className="antialiased relative xl:overflow-hidden">
                
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
