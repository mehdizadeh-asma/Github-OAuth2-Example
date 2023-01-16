import { faPeopleGroup, faPeopleLine } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import OverviewItem from "../Profile/OverviewItem";
import Card from "react-bootstrap/Card";

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
const RoundedProfileNew: React.FC<propsType> = (props) => {
  return (
    //colorizeLightPurple
    <Card className="ResponsiveProfileBig border border-2 shadow  colorizeLightPurple my-1">
      <div className="cantainer-fluid conainer-flex  d-flex justify-content-center  ">
        <div className="row d-flex  align-items-start ImageRow">
          <div className="col-3 col-sm-6   col-lg-12 d-flex justify-content-center ImageContainer  clean  ">
            <Image
              id="imgX"
              className={"img-fluid mx-2 rounded-circle " + props.CssClassPic}
              src={props.PictureUrl}
              alt={props.Username}
            />
          </div>
          <div className="col-sm-6  col-lg-12 d-flex justify-content-center align-self-center  clean  ">
            <div className="row d-flex flex-column h-100">
              <div className="col-12 h-25">
                <p className={`${props.CssClassText}  `}>{props.Name}</p>
              </div>
              <div className="col-12 h-25">
                <p className={props.CssClassText}>
                  <small className="ResponsiveUserLabel">
                    {props.Username}
                  </small>
                </p>
              </div>

              <div className="col-12 d-flex justify-content-center my-2">
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
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RoundedProfileNew;
