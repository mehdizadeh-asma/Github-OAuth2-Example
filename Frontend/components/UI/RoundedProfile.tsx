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
    <div className="row d-flex flex-column w-100  py-2 justify-content-center align-items-center">
      <Image
        id="imgX"
        className={
          "img-fluid mx-2 rounded-circle " + props.CssClassPic
        }
        src={props.PictureUrl}
        alt={props.Username}
      />
      <p className={`${props.CssClassText}  `}>
        {props.Name}
      </p>
      <p className={props.CssClassText}>
        <small className="ResponsiveUserLabel">{props.Username}</small>
      </p>
      {props.HasFollowerPart ? (
        <div className="border border-1 ResponsiveFollwer">
          <OverviewItem
          OneCol={false}
          IconOne={faPeopleGroup}
          IconTwo={faPeopleLine}
          ContentOne={props.followers}
          ContentTwo={props.following}
        ></OverviewItem>
        </div>
        
      ) : (
        ""
      )}
    </div>
  );
};
export default RoundedProfile;
