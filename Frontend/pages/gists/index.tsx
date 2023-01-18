import { useContext } from "react";

import GithubContext from "../../context/app-context";
import Gists from "../../components/Gist/Gists";

export default function GistsPage() {
  const ctx = useContext(GithubContext);
  return (
    <div className="container">{<Gists GistList={ctx.Gists}></Gists>}</div>
  );
}
