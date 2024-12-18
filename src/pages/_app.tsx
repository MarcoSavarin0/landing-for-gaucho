import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ScrollProvider } from "@/context/ScrollContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ScrollProvider>
            <Component {...pageProps} />
        </ScrollProvider>
    );
}
