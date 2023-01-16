import AwsomeButton from "../UI/AwsomeButton";
import Image from "react-bootstrap/Image";
import { useRouter } from "next/router";
import styles from "../../styles/Meet.module.css";
import { useState } from "react";

const Redirect: React.FC = () => {
  const [errorText, setErrorText] = useState("");
  const router = useRouter();

  const clickHandler = () => {
    let url = "https://github.com/login/oauth/authorize";

    if (!process.env.GITHUB_CLIENTID) {
      setErrorText("GitHub ClientID is Unavailable");
      return;
    }

    url = url + "?client_id=" + process.env.GITHUB_CLIENTID;

    router.push(url);
  };

  return (
    <div className={`${styles.redirectMain} container-fluid`}>
      <div className="row RedirectRow h65vh  ">
        <div className="col-6 d-flex flex-column justify-content-center  h-100 bg-white rounded-1 shadow">
          <Image
            id="imgPreview88"
            className=" img-fluid align-self-center HoverRescale "
            src="../assets/GithubLogo.png"
            alt="logo"
            height="120vh"
            width="120vw"
          />
          <AwsomeButton
            ClassName={`MeetBtn BtnMain BtnGrdPurple h55px h505vh  HoverAndRescaleToWhite`}
            type="button"
            Title="Meet Github"
            onClick={clickHandler}
          ></AwsomeButton>
          <div className="text-danger text-center mt-3">{errorText}</div>
        </div>
        <div
          className="col-6 ExploreDiv text-white h-100   BgGrdColorizePurple d-flex flex-column 
      justify-content-center align-items-end rounded-1 shadow"
        >
          <h2 className="HeadLine ExploreDiv HoverRescale">
            EXPLORE THE WORLD OF GITHUB
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
