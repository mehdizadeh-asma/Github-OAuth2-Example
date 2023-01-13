import {
  faBuilding,
  faEarDeaf,
  faLink,
  faMailBulk,
  faMapLocation,
  faNotEqual,
  faT,
} from "@fortawesome/free-solid-svg-icons";
import User from "../../models/User";
import DateShow from "../UI/DateShow";

interface propsType {
  MyUser?: User;
}
import OverviewItem from "./OverviewItem";

const Overview: React.FC<propsType> = (props) => {
  return (
    <div className="row container-fluid d-flex flex-column ">
      <div className="row">
        {props.MyUser?.created_at !== "" ? (
          <div className="col-md-6 h5vh  ">
            <small>
              <DateShow
                CssClass="w30vw fontsize065rem"
                Format="InlineStandard"
                Text="Created at"
                Date={props.MyUser?.created_at}
              ></DateShow>
            </small>
          </div>
        ) : (
          ""
        )}
        {props.MyUser?.updated_at !== "" ? (
          <div className="col-md-6 h5vh ">
            <small>
              <DateShow
                CssClass="w30vw fontsize065rem mx-1"
                Format="InlineStandard"
                Text="Updated on"
                Date={props.MyUser?.created_at}
              ></DateShow>
            </small>
          </div>
        ) : (
          ""
        )}
      </div>

      {props.MyUser?.company ? (
        <OverviewItem
          OneCol={true}
          IconTwo={faNotEqual}
          IconOne={faBuilding}
          ContentOne={props.MyUser?.company}
        ></OverviewItem>
      ) : (
        ""
      )}
      {props.MyUser?.location ? (
        <OverviewItem
          OneCol={true}
          IconOne={faMapLocation}
          IconTwo={faEarDeaf}
          ContentOne={props.MyUser?.location}
        ></OverviewItem>
      ) : (
        ""
      )}

      <OverviewItem
        OneCol={true}
        IconOne={faT}
        IconTwo={faEarDeaf}
        ContentOne="tweeter user"
      ></OverviewItem>

      {props.MyUser?.blog || props.MyUser?.email ? (
        <OverviewItem
          OneCol={false}
          IconOne={faLink}
          IconTwo={faMailBulk}
          ContentOne="address web" //{props.MyUser?.blog}
          ContentTwo={props.MyUser?.email}
        ></OverviewItem>
      ) : (
        ""
      )}
    </div>
  );
};
export default Overview;
