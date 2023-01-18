import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface propsType {
  OneCol: boolean;
  IconOne: IconDefinition;
  IconTwo?: IconDefinition;
  ContentOne?: string;
  ContentTwo?: string;
}

const OverviewItem: React.FC<propsType> = (props) => {
  return (
    <div className="container-fluid">
      {props.OneCol ? (
        <div className="row w-100 d-inline-flex   align-items-center">
          {props.ContentOne ? (
            <div className=" d-flex flex-row ">
              <FontAwesomeIcon
                className="OverviewAwsomeIcon  "
                icon={props.IconOne}
              />
              <div className="fontsize08rem ResponsiveContentOne">
                {props.ContentOne}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="row w-100  d-inline-flex   align-items-center">
          {props.ContentOne ? (
            <div className="col-md-6 d-flex flex-row  ">
              <FontAwesomeIcon
                className="OverviewAwsomeIcon ResponsiveIconTwo "
                icon={props.IconOne}
              />
              <div className="fontsize08rem ResponsiveContentOne  ">
                {props.ContentOne}
              </div>
            </div>
          ) : (
            ""
          )}
          {props.ContentTwo ? (
            <div className="col-md-6 d-flex flex-row   ">
              <FontAwesomeIcon
                className="OverviewAwsomeIcon ResponsiveIconTwo"
                icon={props.IconTwo as IconDefinition}
              />
              <div className="fontsize08rem ResponsiveContentTwo">
                {props.ContentTwo}
              </div>
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
