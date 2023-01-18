import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";
import GithubContextProvider from "../context/GithubContextProvider";
import Template from "../components/Profile/Template";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/" || router.pathname === "/callback")
    return (
      <GithubContextProvider>
        <Component {...pageProps} />
      </GithubContextProvider>
    );

  return (
    <GithubContextProvider>
      <Template>
        <Component {...pageProps} />
      </Template>
    </GithubContextProvider>
  );
}
