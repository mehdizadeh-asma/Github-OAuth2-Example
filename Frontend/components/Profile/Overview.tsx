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
      <div className="row d-flex flex-column">
        {props.MyUser?.company ? (
          <div className="col-12 my-2 mt-3  border border-top-0 border-start-0 border-end-0">
            <OverviewItem
              OneCol={true}
              IconTwo={faNotEqual}
              IconOne={faBuilding}
              ContentOne={props.MyUser?.company}
            ></OverviewItem>
          </div>
        ) : (
          ""
        )}
        {props.MyUser?.location ? (
          <div className="col my-2 pt-3 ">
            <OverviewItem
              OneCol={true}
              IconOne={faMapLocation}
              IconTwo={faEarDeaf}
              ContentOne={props.MyUser?.location}
            ></OverviewItem>
          </div>
        ) : (
          ""
        )}
        {props.MyUser?.tweeter_username ? (
          <div className="col my-2 pt-3  border border-bottom-0 border-start-0 border-end-0">
            <OverviewItem
              OneCol={true}
              IconOne={faT}
              IconTwo={faEarDeaf}
              ContentOne={props.MyUser?.tweeter_username}
            ></OverviewItem>
          </div>
        ) : (
          ""
        )}
        {props.MyUser?.blog ? (
          <div className="col my-2 pt-3 border border-bottom-0 border-start-0 border-end-0">
            <OverviewItem
              OneCol={true}
              IconOne={faLink}
              IconTwo={faLink}
              ContentOne={props.MyUser?.blog}
              ContentTwo=""
            ></OverviewItem>
          </div>
        ) : (
          ""
        )}
        {props.MyUser?.email ? (
          <div className="col my-2 border py-3 border border-bottom-0 border-start-0 border-end-0">
            <OverviewItem
              OneCol={true}
              IconOne={faMailBulk}
              IconTwo={faMailBulk}
              ContentOne={props.MyUser?.email}
            ></OverviewItem>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="row">
        {props.MyUser?.created_at !== "" ? (
          <div className="col-md-6 my-2  h-auto align-items-center d-flex  ">
            <small>
              <DateShow
                CssClass="fontsize07rem"
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
          <div className="col-md-6 my-2 h-auto align-items-center d-flex">
            <small>
              <DateShow
                CssClass="fontsize07rem "
                Format="InlineStandard"
                Text="Updated on"
                Date={props.MyUser?.updated_at}
              ></DateShow>
            </small>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Overview;
