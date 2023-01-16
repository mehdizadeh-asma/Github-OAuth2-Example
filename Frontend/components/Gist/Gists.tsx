import UserController from "../../controller/UserController";
import Gist from "../../models/Gist";
import GistItem from "./GistItem";
interface PropsType {
  GistList?: Gist[];
}
const Gists: React.FC<PropsType> = (props) => {
  return (
    <div className="row container d-flex justify-content-center my-2 pb-3  w80Per">
      {props.GistList &&
        props.GistList.map((gist) => (
          <GistItem key={gist.id} MyGist={gist}></GistItem>
        ))}
    </div>
  );
};
export default Gists;
