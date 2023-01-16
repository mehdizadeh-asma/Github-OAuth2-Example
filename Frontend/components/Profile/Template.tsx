import UserController from "../../controller/UserController";
import {
  useRef,
  MutableRefObject,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import RoundedProfileNew from "../UI/RoundedProfileNew";
import Card from "react-bootstrap/Card";
import SearchBox from "../UI/SearchBox";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import GithubContext from "../../context/app-context";
import githubUsernameRegex from "github-username-regex";
import { useRouter } from "next/router";
import RepoItemNew from "../Repo/RepoItemNew";
import RoundedProfileSmall from "../UI/RoundedProfileSmall";
import { Image } from "react-bootstrap";

interface PropsType {
  children: ReactNode;
}
const Template = (props: PropsType) => {
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
      console.log(ctx.User?.name);
    } catch (error: any) {
      setErrorText(error.toString());
    }
  };

  return (
    <div className="container-fluid BgGrdColorizePurpleBack">
      <div
        id="divHeader"
        className="row flex-container bg-transparent  DarkPurpleColor shadow h-auto clean" //
      >
        {/* search div */}
        <div
          id="divSearch"
          className="col-md-8  d-flex  justify-content-between justify-content-md-start  
         align-items-center p-0  clean    h10vh"
        >
          <div className="col-9 my-3 d-inline-flex">
            <SearchBox
              ref={refUsernameInput}
              ButtonCss="BtnMain BtnGrdOrange w8vw h5vh my-2"
              ButtonTitle=" Search  "
              Icon={faSearch}
              type="text"
              InputClassName="w20vw h2rem MainBox"
              Inputrequired={false}
              InputLabelClassName=" text-secondary "
              onClick={SearchHandler}
            ></SearchBox>
          </div>
          <div
            id="errorLabel"
            className="col  m-3 LightRed fontsize1rem text-left pe-3"
          >
            {errorText}
          </div>
        </div>

        {/* profile div */}
        <div
          id="divProfile"
          className="col-md-4  d-flex justify-content-end align-items-center  p-0 clean "
        >
          <div className="test w-100 hpx d-flex justify-content-end align-items-center ResponsiveProfileSmall ">
            <RoundedProfileSmall
              CssClassPic="ResponsiveSmallProfImage mt-1 SmallProfileBorder"
              CssClassText="my-1 text-left text-white HeaderFont fontsize065rem ResponsiveProfText" //DarkPurpleColor
              Name={ctx.AuthenticatedUser?.name}
              Username={ctx.AuthenticatedUser?.login}
              PictureUrl={ctx.AuthenticatedUser?.avatar_url}
            ></RoundedProfileSmall>
          </div>
        </div>
      </div>

      {/*  */}
      <Card className=" bg-transparent bg-info border-0 d-flex flex-row">
        <div id="divBody" className="row container-fluid  clean  ">
          {/* 
        big profile */}
          <div
            id="divBigProfile"
            className="col-lg-3 my-1 ResponsiveProfileBig clean  "
          >
            <RoundedProfileNew
              CssClassPic="my-2  ResponsiveBigProfImage"
              CssClassText="my-1 text-center DarkPurpleColor HeaderFont fontsize065rem ResponsiveBigProfText"
              Name={ctx.User?.name}
              Username={ctx.User?.login}
              PictureUrl={ctx.User?.avatar_url}
              HasFollowerPart={true}
              followers={ctx.User?.followers + " followers"}
              following={ctx.User?.following + " following"}
            ></RoundedProfileNew>
          </div>
          <div
            id="divDashboard"
            className="row col-lg-9 d-flex flex-column clean "
          >
            <div className="col-12 my-2 mx-2 clean p-0  h-auto  MenuResponsive  ">
              <Navigation></Navigation>
            </div>
            <div className="col-12 h-auto mt-0 mx-2 clean rounded-1 colorizeLightPurple shadow-sm">
              {props.children}
            </div>
          </div>
        </div>
      </Card>
      <div className="ResponiveFooter my-5 px-0 mx-0 w-100 h-auto d-flex flex-column">
        <div className="row mx-3 w-100 d-inline-flex justify-content-between  ">
          <div className="col-sm-6 d-flex flex-column justify-content-center ResponsiveGreple ">
            <h5 className="text-warning pt-3 text-center pb-0  ">
              Greple Github Challenge
            </h5>
            <hr className="w-50 ResponsiveHr  align-self-center  border-warning border border-2"></hr>
            <p className="w-50 mt-1 PurpleColor align-self-center  ResponsiveDescription">
              Some Explanation about project
            </p>
          </div>
          <div className="col-sm-6  d-flex justify-content-center ResponsiveImageDiv    ">
            <div className="row d-inline-flex">
              <div className="col-6 d-flex justify-content-end align-items-end">
                <Image
                  alt="GitHub"
                  src="../assets/GithubLogo.png"
                  className={
                    "ResponsiveImage w6vw my-3 LightGray align-self-center thumbnail p-1 border border-4 rounded-4 border-warning"
                  }
                ></Image>
              </div>
              <div className=" mb-2 col-md-6 d-flex justify-content-start  align-items-center PurpleColor">
                <h3 className="ResponsiveExplore">
                  {" "}
                  Explore The World Of Github
                </h3>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex rights w-100 text-center">
          <div className="col PurpleColor">All @Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};
export default Template;
