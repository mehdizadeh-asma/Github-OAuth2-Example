import Gists from "../../components/Gist/Gists";
import { useContext } from "react";
import GithubContext from "../../context/app-context";

export default function GistsPage() {
  const ctx = useContext(GithubContext);
  console.log("Gists");

  for (var key in ctx.Gists[0].files)
    console.log(ctx.Gists[0].files[key].raw_url);

  return <div>{<Gists GistList={ctx.Gists}></Gists>}</div>;
}
