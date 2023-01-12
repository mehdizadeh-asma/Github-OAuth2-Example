import UserController from "../../controller/UserController";
import {
  useRef,
  MutableRefObject,
  useContext,
  useState,
  useEffect,
} from "react";
import RoundedProfile from "../UI/RoundedProfile";
import Card from "react-bootstrap/Card";
import Search from "../UI/Search";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import GithubContext from "../../context/app-context";
import githubUsernameRegex from "github-username-regex";
import { useRouter } from "next/router";

const ProfileContainer: React.FC = (props) => {
  const ctx = useContext(GithubContext);

  const router = useRouter();

  useEffect(() => {
    if (!ctx.Token) router.push("/");
  }, [router, ctx]);

  const refUsernameInput =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const [errorText, setErrorText] = useState("");

  const SearchHandler = async () => {
    try {
      const username = refUsernameInput.current.value;

      if (!githubUsernameRegex.test(username)) {
        setErrorText("Invalid Username");
        return;
      }

      if (!ctx.Token) {
        setErrorText("Token Expired!");
        return;
      }

      const searchedUser = await UserController.GetUser(ctx.Token, username);

      const searchedOrgs = await UserController.GetOrgs(ctx.Token, username);

      const searchedRepos = await UserController.GetRepos(ctx.Token, username);

      const searchedGists = await UserController.GetGists(ctx.Token, username);

      ctx.SetData({
        User: searchedUser,
        Orgs: searchedOrgs,
        Gists: searchedGists,
        Repos: searchedRepos,
      });
      setErrorText("");
    } catch (error) {
      setErrorText(error.toString());
    }
  };

  return (
    <div className="row container-fluid d-flex flex-column  BgGrdColorizePurpleBack h-100 ">
      <Card
        className=" w-100 mx-2 px-0 d-flex flex-row align-items-center
       mt-1 bg-transparent  DarkPurpleBorder shadow h12vh"
      >
        <div className=" col-md-9 d-flex justify-content-start  ">
          <Search
            ref={refUsernameInput}
            LabelCss="mx-3 text-white"
            ButtonCss="BtnMain BtnGrdOrange w8vw h5vh my-1"
            ButtonTitle="Search"
            Icon={faSearch}
            IconCssClass="w2vw"
            type="text"
            InputClassName="w20vw h2rem MainBox"
            InputValidationMessage="Please Provide A Valid Username"
            Inputrequired={false}
            InputLabelClassName=" text-secondary "
            onClick={SearchHandler}
          ></Search>
          <div className="mx-2 text-white mt-3 mx-2 LightRed">{errorText}</div>
        </div>
        <div className="col-md-3 d-flex justify-content-end ">
          <div className=" w10vw h-100 ">
            <RoundedProfile
              CssClassPic="mb-1 w-50"
              CssClassText="my-0 text-center text-white  TahomaFont fontsize065rem"
              Name={ctx.AuthenticatedUser?.name}
              Username={ctx.AuthenticatedUser?.login}
              PictureUrl={ctx.AuthenticatedUser?.avatar_url}
              HasFollowerPart={false}
            ></RoundedProfile>
          </div>
        </div>
      </Card>

      <Card className="col w-100 mx-2 px-2 py-2 d-flex flex-row my-1  DarkPurpleBorder">
        <Card className="border-0 col-sm-3  ">
          <RoundedProfile
            CssClassPic="mb-1 w-100"
            CssClassText="my-2 text-center text-secondary HeaderFont fontsize108rem"
            Name={ctx.User?.name}
            Username={ctx.User?.login}
            PictureUrl={ctx.User?.avatar_url}
            followers={
              ctx.User?.followers !== "" &&
              ctx.User?.followers !== "0" &&
              ctx.User != undefined
                ? ctx.User?.followers + " followers"
                : ""
            }
            following={
              ctx.User?.following !== "" &&
              ctx.User?.following !== "0" &&
              ctx.User != undefined
                ? ctx.User?.following + " following"
                : ""
            }
            HasFollowerPart={true}
          ></RoundedProfile>
        </Card>
        <div className="d-flex-column col-sm-9   ">
          <div className="">
            <Navigation></Navigation>
          </div>
          <div className="border border-1 rounded-1">{props.children}</div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileContainer;
