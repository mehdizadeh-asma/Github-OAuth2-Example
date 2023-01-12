import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import GithubContextProvider from "../context/GithubContextProvider";
import ProfileContainer from "../components/Profile/ProfileContainer";
import { useRouter } from "next/router";
import { useContext } from "react";
import GithubContext from "../context/app-context";
import UserController from "../controller/UserController";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const ctx = useContext(GithubContext);

  if (router.pathname === "/" || router.pathname === "/callback")
    return (
      <GithubContextProvider>
        <Component {...pageProps} />
      </GithubContextProvider>
    );

  // if (UserController.token === "") window.open("/");

  return (
    <GithubContextProvider>
      <ProfileContainer>
        <Component {...pageProps} />
      </ProfileContainer>
    </GithubContextProvider>
  );
}
