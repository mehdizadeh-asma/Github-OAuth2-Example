import {
  faBoxesStacked,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import GithubContext from "../../context/app-context";
import Organizations from "./Organizations";
import Overview from "./Overview";
const Dashboard = () => {
  const ctx = useContext(GithubContext);

  return (
    <div className="row container w80Per my-3 NavResponsive ">
      <Tab.Container defaultActiveKey="view">
        <Row className="w-100  px-3">
          <div className="col">
            <Nav className="h2rem  ">
              <Nav.Item className="me-2 NavItem ">
                {/*//NavResponsive */}
                <Nav.Link
                  className="NavLink shadow HoverRescale BtnGrdPurple  w30vw MainBox "
                  eventKey="view"
                >
                  <div className="row d-inline-flex text-start justify-content-start align-items-start w-100  ">
                    <div className="w2vw TabAwsomeDiv">
                      <FontAwesomeIcon
                        className=" w105vw TabAwsomeIcon text-white "
                        // onClick={AddEventHandler}
                        icon={faUsersViewfinder}
                      />
                    </div>
                    <div className="w20vw text-white mx-2  ">
                      <h6 className="w-100 ">
                        <small className="small">Overview</small>
                      </h6>
                    </div>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="">
                {/* NavResponsive */}
                <Nav.Link
                  className="NavLink shadow BtnGrdPurple HoverRescale w30vw MainBox "
                  eventKey="Organization"
                >
                  <div className="row d-inline-flex w-100  ">
                    <div className="col-2 TabAwsomeDiv">
                      <FontAwesomeIcon
                        className=" w105vw TabAwsomeIcon text-white "
                        // onClick={AddEventHandler}
                        icon={faBoxesStacked}
                      />
                    </div>
                    <div className="col text-white  ">
                      <h6 className="w-100 ">
                        <small className="small">Organizations</small>
                      </h6>
                    </div>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Row>
        <Row
          className={
            " Pane border border-1  hMin4vh  rounded-1 shadow colorizeLightPurple my-1 py-2"
          }
        >
          <div className="col-8 ">
            <Tab.Content className="">
              <Tab.Pane eventKey="view" className=" ">
                <Overview MyUser={ctx.User}></Overview>
              </Tab.Pane>
              <Tab.Pane eventKey="Organization" className=" ">
                <Organizations MyOrgs={ctx.Orgs}></Organizations>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Row>
      </Tab.Container>
    </div>
  );
};
export default Dashboard;
