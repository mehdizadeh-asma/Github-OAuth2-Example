import { useContext } from "react";
import GithubContext from "../../context/app-context";
import Repo from "../../models/Repo";
import RepoItemNew from "./RepoItemNew";

interface PropsType {
  RepoList?: Repo[];
}
const Repos: React.FC<PropsType> = (props) => {
  return (
    <div className="row container my-2 pb-3   w80Per  ">
      {props.RepoList &&
        props.RepoList.map((repo) => (
          <RepoItemNew key={repo.id} MyRepo={repo}></RepoItemNew>
        ))}
    </div>
  );
};
export default Repos;
