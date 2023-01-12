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
    <div className="row container my-3">
      <Tab.Container defaultActiveKey="view">
        <Row className="w-100  px-3">
          <Col className="">
            <Nav className="h2rem">
              <Nav.Item className="me-2">
                <Nav.Link
                  className="shadow BtnGrdOrange w30vw MainBox "
                  eventKey="view"
                >
                  <div className="row d-inline-flex w-100  ">
                    <div className="col-1 ">
                      <FontAwesomeIcon
                        className=" text-white "
                        // onClick={AddEventHandler}
                        icon={faUsersViewfinder}
                      />
                    </div>
                    <div className="col-11 text-white ">
                      <h6>
                        <small>Profile Overview</small>
                      </h6>
                    </div>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="me-2">
                <Nav.Link
                  className="shadow BtnGrdPurple w30vw MainBox "
                  eventKey="Organization"
                >
                  <div className="row d-inline-flex w-100  ">
                    <div className="col-1">
                      <FontAwesomeIcon
                        className=" text-white "
                        // onClick={AddEventHandler}
                        icon={faBoxesStacked}
                      />
                    </div>
                    <div className="col-10 text-white ">
                      <h6>
                        <small>Organizations</small>
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
            " w64-5vw mx-3 border border-1  hMin4vh  rounded-1 shadow colorizeLightPurple my-1 py-2"
          }
        >
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="view">
                <Overview MyUser={ctx.User}></Overview>
              </Tab.Pane>
              <Tab.Pane eventKey="Organization">
                <Organizations MyOrgs={ctx.Orgs}></Organizations>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
export default Dashboard;
