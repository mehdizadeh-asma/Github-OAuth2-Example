import { faPeopleGroup, faPeopleLine } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

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

const RoundedProfileBig: React.FC<propsType> = (props) => {
  return (
    <Card className="ResponsiveProfileBig border border-2 shadow colorizeLightPurple my-1">
      <div className="cantainer-fluid conainer-flex d-flex justify-content-center">
        <div className="row d-flex align-items-start ImageRow">
          <div className="col-3 col-sm-6 col-lg-12 d-flex justify-content-center ImageContainer">
            <Image
              id="imgX"
              className={"img-fluid mx-2 rounded-circle" + props.CssClassPic}
              src={props.PictureUrl}
              alt={props.Username}
            />
          </div>
          <div className="col-sm-6  col-lg-12 d-flex justify-content-center align-self-center">
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

export default RoundedProfileBig;
