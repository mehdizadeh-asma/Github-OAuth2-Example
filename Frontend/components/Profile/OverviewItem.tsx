import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBuilding,
  faCode,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface propsType {
  OneCol: boolean;
  IconOne: IconDefinition;
  IconTwo: IconDefinition;
  ContentOne?: string;
  ContentTwo?: string;
}
const OverviewItem: React.FC<propsType> = (props) => {
  return (
    <div className="container-fluid ">
      {props.OneCol ? (
        <div className="row w-100 d-inline-flex h6vh align-items-center">
          {props.ContentOne ? (
            <div className="col-md-12 d-flex flex-row ">
              <FontAwesomeIcon
                className="OverviewAwsomeIcon  "
                icon={props.IconOne}
              />
              <div className="fontsize08rem  col-md-11">{props.ContentOne}</div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="row w-100  d-inline-flex h6vh align-items-center">
          {props.ContentOne ? (
            <div className="col-md-6 d-flex flex-row text-red ">
              <FontAwesomeIcon
                className="OverviewAwsomeIcon  "
                icon={props.IconOne}
              />
              <div className="fontsize08rem  col-md-11">{props.ContentOne}</div>
            </div>
          ) : (
            ""
          )}
          {props.ContentTwo ? (
            <div className="col-md-6 d-flex flex-row text-red  ">
              <FontAwesomeIcon
                className="OverviewAwsomeIcon "
                icon={props.IconTwo}
              />
              <div className="fontsize08rem"> {props.ContentTwo}</div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};
export default OverviewItem;
