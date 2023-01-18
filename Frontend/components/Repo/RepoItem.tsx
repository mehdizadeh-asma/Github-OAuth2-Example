import Link from "next/link";
import {
  faCodeFork,
  faFileCode,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import Repo from "../../models/Repo";
import OverviewItem from "../Profile/OverviewItem";
import DateShow from "../UI/DateShow";

interface PropsType {
  MyRepo: Repo;
}

const RepoItem: React.FC<PropsType> = (props) => {
  return (
    <div className="container-fluid container-flex my-3 colorizeLightPurple BoxShadowLightPurple RepoResponsive">
      <div className="row flex-column">
        <div className="col-12 clean">
          <div className="row">
            <div className="col-sm-8 text-bold fs-5 fw-bold text-primary text-wrap mt-2 ">
              <Link
                href={props.MyRepo.html_url}
                className="text-primary ResponsiveTitle"
              >
                {props.MyRepo.name}
              </Link>
            </div>
            <div className="col-sm-4 clean  ">
              <div className=" border   rounded-4 mt-2 pt-1 w7vw h3vh justify-content-center d-flex fontsize08rem text-secondary text-uppercase ResponsiveVisibilty">
                <strong>{props.MyRepo.visibility}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 justify-content-start fs-6 h-auto my-1">
          <small>{props.MyRepo.description}</small>
        </div>
        <div className="col-12 fs-6 h-auto">
          <div className="row mt-3 ">
            <div className="col-sm-5 ">
              {props.MyRepo.language ? (
                <OverviewItem
                  OneCol={true}
                  IconOne={faFileCode}
                  ContentOne={props.MyRepo.language}
                ></OverviewItem>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-3">
              {props.MyRepo.stargazers_count !== "0" ? (
                <OverviewItem
                  OneCol={true}
                  IconOne={faStar}
                  ContentOne={props.MyRepo.stargazers_count}
                ></OverviewItem>
              ) : (
                ""
              )}
            </div>
            <div className=" col-sm-4 ">
              {props.MyRepo.forks_count !== "0" ? (
                <OverviewItem
                  OneCol={true}
                  IconOne={faCodeFork}
                  ContentOne={props.MyRepo.forks_count}
                ></OverviewItem>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row h-auto">
            <div className="col-sm-6 d-flex align-items-center">
              {props.MyRepo.created_at !== "" ? (
                <small>
                  <DateShow
                    CssClass="w-100 fontsize08rem ResponsiveDate"
                    Format="InlineStandard"
                    Text="Created at"
                    Date={props.MyRepo.created_at}
                  ></DateShow>
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-6">
              {props.MyRepo.updated_at !== "" ? (
                <div className="col h5vh d-flex align-items-center">
                  <small>
                    <DateShow
                      CssClass="w-100 fontsize08rem ResponsiveDate"
                      Format="InlineStandard"
                      Text="Updated on"
                      Date={props.MyRepo.updated_at}
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
export default RepoItem;
