import Repo from "../../models/Repo";
import RepoItem from "./RepoItem";

interface PropsType {
  RepoList?: Repo[];
}

const Repos: React.FC<PropsType> = (props) => {
  return (
    <div className="row container my-2 pb-3 w80Per">
      {props.RepoList &&
        props.RepoList.map((repo) => (
          <RepoItem key={repo.id} MyRepo={repo}></RepoItem>
        ))}
    </div>
  );
};
export default Repos;
