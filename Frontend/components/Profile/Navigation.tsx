import {
  faBook,
  faBookAtlas,
  faBoxArchive,
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
    //     </Nav>//
    //   </Container>
    // </Navbar>
    <ul className="nav nav-tabs  rounded-1 mb-1 colorizeLightPurple shadow-sm MenuResponsive">
      <li className="nav-item  DarkPurpleColor">
        <Link
          href="/profile"
          className="nav-link fontsize09rem DarkPurpleColor"
        >
          <FontAwesomeIcon
            className="MenuAwsomeIcon "
            icon={faUsersViewfinder}
          />
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/repos" className="nav-link DarkPurpleColor fontsize09rem">
          <FontAwesomeIcon className="MenuAwsomeIcon" icon={faBoxArchive} />
          Repositories
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/gists" className="nav-link DarkPurpleColor fontsize09rem">
          <FontAwesomeIcon className="MenuAwsomeIcon" icon={faCode} />
          Gists
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/" className="nav-link FullPurpleColor fontsize09rem">
          {/* <FontAwesomeIcon className="MenuAwsomeIcon" icon={faBook} /> */}
          Meet Github
        </Link>
      </li>
    </ul>
  );
};
export default Navigation;
