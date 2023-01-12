import AwsomeButton from "../UI/AwsomeButton";
import Image from "react-bootstrap/Image";
import { useRouter } from "next/router";
import styles from "../../styles/Meet.module.css";

const Redirect: React.FC = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(
      "https://github.com/login/oauth/authorize?client_id=648e6c81597252d33496"
    );
  };

  return (
    <div className={`${styles.redirectMain} container-fluid`}>
      <div className="row h65vh w-50 ">
        <div className="col-sm-6 d-flex flex-column justify-content-center  h-100 bg-white rounded-1 shadow">
          <Image
            id="imgPreview88"
            className=" img-fluid align-self-center "
            src="../assets/GithubLogo.png"
            alt="logo"
            height="120vh"
            width="120vw"
          />
          <AwsomeButton
            ClassName={`BtnMain BtnGrdPurple w18vw h505vh `}
            type="button"
            Title="Meet Github"
            onClick={clickHandler}
          ></AwsomeButton>
        </div>
        <div
          className="col-sm-6 text-white h-100   BgGrdColorizePurple d-flex flex-column 
      justify-content-center align-items-end rounded-1 shadow"
        >
          <h2 className="HeadLine ">EXPLORE THE WORLD OF GITHUB </h2>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
