import {
  faBook,
  faBookAtlas,
  faCode,
  faNoteSticky,
  faSearch,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverviewItem from "./OverviewItem";

const Navigation: React.FC = () => {
  return (
    // <Navbar bg="transparent" variant="light">
    //   <Container>
    //     <Navbar.Brand className="MenuItem" href="/">
    //       Meet Github
    //     </Navbar.Brand>
    //     <Nav className="me-auto MenuItem">
    //       <Nav.Link href="/gists">
    //         gists
    //         <FontAwesomeIcon className="MenuAwsomeIcon" icon={faCode} />
    //         <Link href="/gists">Gists</Link>
    //       </Nav.Link>
    //       <Nav.Link href="/repos">
    //         <FontAwesomeIcon className="MenuAwsomeIcon" icon={faBook} />
    //         <Link href="/repos">reps</Link>
    //       </Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <ul className="nav nav-tabs border border-1   rounded-1 mb-1   colorizeLightPurple ">
      <li className="nav-item  ">
        <Link href="/profile" className="nav-link   text-secondary">
          <FontAwesomeIcon
            className="MenuAwsomeIcon "
            icon={faUsersViewfinder}
          />
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/repos" className="nav-link text-secondary">
          <FontAwesomeIcon className="MenuAwsomeIcon" icon={faBook} />
          Repositories
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/gists" className="nav-link text-secondary">
          <FontAwesomeIcon className="MenuAwsomeIcon" icon={faCode} />
          Gists
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/" className="nav-link DarkPurple">
          {/* <FontAwesomeIcon className="MenuAwsomeIcon" icon={faBook} /> */}
          Meet Github
        </Link>
      </li>
    </ul>
  );
};
export default Navigation;
