import {
  faBorderNone,
  faCalendarAlt,
  faCalendarCheck,
  faCodeFork,
  faFileCode,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext } from "react";
import GithubContext from "../../context/app-context";
import Repo from "../../models/Repo";
import OverviewItem from "../Profile/OverviewItem";
import DateShow from "../UI/DateShow";
import RoundedProfile from "../UI/RoundedProfile";

interface PropsType {
  MyRepo: Repo;
}
const RepoItem: React.FC<PropsType> = (props) => {
  const ctx = useContext(GithubContext);
  return (
    <div className="row d-flex flex-column border border-bottom-1 colorizeLightPurple BoxShadowLightPurple rounded-1 my-2 mx-2 w90Per h20vh">
      <div className="col-md-11 d-inline-flex my-2 h2vh ">
        <Link href={props.MyRepo.html_url} className="text-primary ">
          <h5>{props.MyRepo.name}</h5>
        </Link>
        <div className=" border border-1 rounded-4  w4vw h3vh justify-content-center d-flex  fontsize08rem  text-secondary text-uppercase  mx-2 ">
          <strong>{props.MyRepo.visibility}</strong>
        </div>
      </div>
      <div className=" col-md-11 w-100 mx-2 my-2 h3vh">
        <small>{props.MyRepo.description}</small>
      </div>
      <div className="col-md-11 d-inline-flex w-100 mx-2 mt-4 h1vh ">
        {props.MyRepo.language ? (
          <OverviewItem
            OneCol={true}
            IconOne={faFileCode}
            ContentOne={props.MyRepo.language}
            IconTwo={faBorderNone}
          ></OverviewItem>
        ) : (
          ""
        )}
        {props.MyRepo.stargazers_count !== "0" ? (
          <OverviewItem
            OneCol={true}
            IconOne={faStar}
            ContentOne={props.MyRepo.stargazers_count}
            IconTwo={faBorderNone}
          ></OverviewItem>
        ) : (
          ""
        )}
        {props.MyRepo.forks_count !== "0" ? (
          <OverviewItem
            OneCol={true}
            IconOne={faCodeFork}
            ContentOne={props.MyRepo.forks_count}
            IconTwo={faBorderNone}
          ></OverviewItem>
        ) : (
          ""
        )}

        {props.MyRepo.updated_at !== "" ? (
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
                Date={props.MyRepo.created_at}
              ></DateShow>
            </small>
          </div>
        ) : (
          ""
        )}
        {props.MyRepo.created_at !== "" ? (
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
                Date={props.MyRepo.created_at}
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
export default RepoItem;
