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
    <div className="row d-flex flex-column border border-bottom-1 colorizeLightPurple BoxShadowLightPurple rounded-1 my-2 mx-2 w90Per h18vh">
      <div className="col-md-11 d-inline-flex my-1 h5vh">
        <Link href={fileUrl} className="text-primary col-md-3 ">
          <h5>{fileName}</h5>
        </Link>
      </div>

      <div className=" col-md-11 w-100 mx-2 pt-2 h5vh">
        <small>{props.MyGist?.description}</small>
      </div>
      <div className="col-md-11 d-inline-flex  h2vh  ">
        <OverviewItem
          OneCol={true}
          IconOne={faFileCode}
          ContentOne={fileLanguage}
          IconTwo={faBorderNone}
        ></OverviewItem>

        {/* {props.MyGist.Stargazers_count !== "0" ? ( */}
        <OverviewItem
          OneCol={true}
          IconOne={faComment}
          ContentOne={props.MyGist.comments}
          IconTwo={faBorderNone}
        ></OverviewItem>
        {/* ) : (
            ""
          )} */}

        {props.MyGist.updated_at !== "" ? (
          <div className="col h5vh d-flex align-items-center">
            <OverviewItem
              OneCol={true}
              IconOne={faCalendarCheck}
              ContentOne=""
              IconTwo={faBorderNone}
            ></OverviewItem>
            <small>
              <DateShow
                CssClass="w10vw fontsize08rem "
                Format="InlineStandard"
                Text="Updated on"
                Date={props.MyGist.created_at}
              ></DateShow>
            </small>
          </div>
        ) : (
          ""
        )}
        {props.MyGist.created_at !== "" ? (
          <div className="col h5vh d-flex align-items-center ">
            <OverviewItem
              OneCol={true}
              IconOne={faCalendarAlt}
              ContentOne=""
              IconTwo={faBorderNone}
            ></OverviewItem>
            <small>
              <DateShow
                CssClass="w10vw fontsize08rem"
                Format="InlineStandard"
                Text="Created at"
                Date={props.MyGist.created_at}
              ></DateShow>
            </small>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="col-md-11 w-100"></div>
    </div>
  );
};
export default GistItem;
