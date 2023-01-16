import Repos from "../../components/Repo/Repos";
import { useContext } from "react";
import GithubContext from "../../context/app-context";

export default function ReposPage() {
  const ctx = useContext(GithubContext);

  return (
    <div   className="container">
     
      <Repos RepoList={ctx.Repos}></Repos>
    </div>
  );
}
