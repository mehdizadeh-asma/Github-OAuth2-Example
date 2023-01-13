import Gists from "../../components/Gist/Gists";
import { useContext } from "react";
import GithubContext from "../../context/app-context";

export default function GistsPage() {
  const ctx = useContext(GithubContext);
  return (
    <div className="container">{<Gists GistList={ctx.Gists}></Gists>}</div>
  );
}
