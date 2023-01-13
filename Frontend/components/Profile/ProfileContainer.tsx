import UserController from "../../controller/UserController";
import {
  useRef,
  MutableRefObject,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import RoundedProfile from "../UI/RoundedProfile";
import Card from "react-bootstrap/Card";
import Search from "../UI/Search";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import GithubContext from "../../context/app-context";
import githubUsernameRegex from "github-username-regex";
import { useRouter } from "next/router";

interface PropsType {
  children: ReactNode;
}
const ProfileContainer = (props: PropsType) => {
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

      if (ctx.SetData)
        ctx.SetData({
          User: searchedUser,
          Orgs: searchedOrgs,
          Gists: searchedGists,
          Repos: searchedRepos,
        });
      else setErrorText("Context is undefined");

      setErrorText("");
    } catch (error: any) {
      setErrorText(error.toString());
    }
  };

  return (
    <div className="row container-fluid d-flex flex-column  BgGrdColorizePurpleBack h-100 ">
      <Card
        className=" w-100 mx-2 px-0 d-flex flex-row align-items-center
       mt-1 bg-transparent  DarkPurpleColor shadow h13vh"
      >
        <div className="container row   col-md-4 d-flex justify-content-start  ">
          <Search
            ref={refUsernameInput}
            LabelCss="mx-3 text-white"
            ButtonCss="BtnMain BtnGrdOrange w8vw h5vh my-2"
            ButtonTitle=" Search  "
            Icon={faSearch}
            type="text"
            InputClassName="w20vw h2rem MainBox"
            InputValidationMessage="Please Provide A Valid Username"
            Inputrequired={false}
            InputLabelClassName=" text-secondary "
            onClick={SearchHandler}
          ></Search>
        </div>
        <div className="col-md-4   mx-2 text-white mt-3 mx-2 LightRed">
          {errorText}
        </div>
        <div className="col-md-4  d-flex justify-content-end ">
          <div className="col-6  d-inline-flex w15vw h-100  ResponsiveProfileSmall">
            <RoundedProfile
              CssClassPic="mb-1  ResponsiveSmallProfImage"
              CssClassText="w-100 my-0 text-center text-white  TahomaFont fontsize08rem ResponsiveSmallProfText"
              Name=""
              Username={ctx.AuthenticatedUser?.login}
              PictureUrl={ctx.AuthenticatedUser?.avatar_url}
              HasFollowerPart={false}
            ></RoundedProfile>
          </div>
        </div>
      </Card>

      <Card className="col w-100 mx-2 px-2 py-2 d-flex flex-row my-1 TransBg   shadow-sm">
        <Card className=" col-sm-3  ResponsiveProfileBig  mx-2 shadow colorizeLightPurple">
          <RoundedProfile
            CssClassPic="mb-1  ResponsiveBigProfImage"
            CssClassText="my-1 text-center DarkPurpleColor HeaderFont fontsize108rem ResponsiveBigProfText"
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

        <div className="d-flex-column col-8  ">
          <div className="">
            <Navigation></Navigation>
          </div>
          <div className="container rounded-1 colorizeLightPurple  hMin75per">
            {props.children}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileContainer;
