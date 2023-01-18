import { useContext } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";

import GithubContext from "../../context/app-context";
import Organizations from "./Organizations";
import Overview from "./Overview";

const Dashboard = () => {
  const ctx = useContext(GithubContext);

  return (
    <div className="row container-fluid container-flex justify-content-center d-flex my-3 NavResponsive ">
      <div className="col-12">
        <Tab.Container defaultActiveKey="overview">
          <Row className="w-100 ">
            <Col className="col  ">
              <Nav className="w-100 p-0 mx-3 NavContainer ">
                <Nav.Item className="border-0 rounded-1">
                  <Nav.Link
                    className="NavLink shadow BtnGrdPurple HoverRescale border-0 rounded-1 "
                    eventKey="overview"
                  >
                    <div className="row d-inline-flex w-100  ">
                      <div className=" w2vw col-2 TabAwsomeDiv">
                        <FontAwesomeIcon
                          className=" w105vw TabAwsomeIcon text-white "
                          icon={faUsersViewfinder}
                        />
                      </div>
                      <div className="col text-white  ">
                        <h6>
                          <small className="small">Overview</small>
                        </h6>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="border-0 rounded-1">
                  <Nav.Link
                    className="NavLink shadow BtnGrdPurple HoverRescale border-0 rounded-1"
                    eventKey="Organization"
                  >
                    <div className="row d-inline-flex w-100">
                      <div className=" w2vw col-2 TabAwsomeDiv">
                        <FontAwesomeIcon
                          className=" w105vw TabAwsomeIcon text-white"
                          icon={faBoxesStacked}
                        />
                      </div>
                      <div className="col text-white  ">
                        <h6>
                          <small className="small ">Organizations</small>
                        </h6>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row
            className={
              "Pane hMin4vh rounded-1 shadow-sm colorizeLightx border border-2 my-1 py-2"
            }
          >
            <Col className="col-11">
              <Tab.Content className="">
                <Tab.Pane eventKey="overview" className=" ">
                  <Overview MyUser={ctx.User}></Overview>
                </Tab.Pane>
                <Tab.Pane eventKey="Organization" className=" ">
                  <Organizations MyOrgs={ctx.Orgs}></Organizations>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};
export default Dashboard;
