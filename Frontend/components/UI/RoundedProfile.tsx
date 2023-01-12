import { faPeopleGroup, faPeopleLine } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import OverviewItem from "../Profile/OverviewItem";

interface propsType {
  PictureUrl?: string;
  Name?: string;
  Username?: string;
  CssClassPic?: string;
  CssClassText?: string;
  followers?: string;
  following?: string;
  HasFollowerPart: boolean;
}
const RoundedProfile: React.FC<propsType> = (props) => {
  return (
    <div className="row d-flex flex-column w-100 px-2 py-2 justify-content-center align-items-center">
      <Image
        id="imgX"
        className={
          "img-fluid align-self-center rounded-circle " + props.CssClassPic
        }
        src={props.PictureUrl}
        alt={props.Username}
      />
      <p className={props.CssClassText}>{props.Name}</p>
      <p className={props.CssClassText}>
        <small>{props.Username}</small>
      </p>
      {props.HasFollowerPart ? (
        <OverviewItem
          OneCol={false}
          IconOne={faPeopleGroup}
          IconTwo={faPeopleLine}
          ContentOne={props.followers}
          ContentTwo={props.following}
        ></OverviewItem>
      ) : (
        ""
      )}
    </div>
  );
};
export default RoundedProfile;
