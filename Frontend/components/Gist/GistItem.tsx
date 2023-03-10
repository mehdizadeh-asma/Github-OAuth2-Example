import {
  faBorderNone,
  faCalendarAlt,
  faCalendarCheck,
  faCodeFork,
  faComment,
  faFileCode,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Gist from "../../models/Gist";
import OverviewItem from "../Profile/OverviewItem";
import DateShow from "../UI/DateShow";

interface PropsType {
  MyGist: Gist;
}

const GistItem: React.FC<PropsType> = (props) => {
  let fileLanguage = "",
    fileUrl = "",
    fileName = "",
    type = "";

  if (props.MyGist)
    for (var key in props.MyGist.files) {
      fileLanguage = props.MyGist.files[key].language;
      fileUrl = props.MyGist.files[key].raw_url;
      fileName = props.MyGist.files[key].filename;
      type = props.MyGist.files[key].type;
    }
  return (
    <div className="container-fluid container-flex clean   my-3 colorizeLightPurple BoxShadowLightPurple RepoResponsive">
      <div className="row flex-column">
        <div className="col-12 clean">
          <div className="row">
            <div className="col-sm-12 text-bold fs-5 fw-bold text-primary text-wrap mt-2 ">
              <Link href={fileUrl} className="text-primary ResponsiveTitle">
                {fileName}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 justify-content-start fs-6  h-auto my-1 clean   ">
          <small>{props.MyGist?.description} </small>
        </div>
        <div className="col-12 fs-6 clean   h-auto ">
          <div className="row mt-3 ">
            <div className="col-sm-5 ">
              {fileLanguage !== "" ? (
                <OverviewItem
                  OneCol={true}
                  IconOne={faFileCode}
                  ContentOne={fileLanguage}
                  IconTwo={faBorderNone}
                ></OverviewItem>
              ) : (
                ""
              )}
            </div>
            <div className=" col-sm-3 ">
              {props.MyGist?.comments !== "0" ? (
                <OverviewItem
                  OneCol={true}
                  IconOne={faComment}
                  ContentOne={props.MyGist.comments}
                  IconTwo={faBorderNone}
                ></OverviewItem>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row h-auto">
            <div className="col-sm-6   d-flex align-items-center">
              {props.MyGist?.created_at !== "" ? (
                <small>
                  <DateShow
                    CssClass="w-100  fontsize08rem ResponsiveDate"
                    Format="InlineStandard"
                    Text="Created at"
                    Date={props.MyGist?.created_at}
                  ></DateShow>
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-6">
              {" "}
              {props.MyGist?.updated_at !== "" ? (
                <div className="col h5vh d-flex align-items-center">
                  <small>
                    <DateShow
                      CssClass="w-100 fontsize08rem ResponsiveDate"
                      Format="InlineStandard"
                      Text="Updated on"
                      Date={props.MyGist?.updated_at}
                    ></DateShow>
                  </small>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GistItem;
