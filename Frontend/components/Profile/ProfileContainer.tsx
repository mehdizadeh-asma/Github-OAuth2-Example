import UserController from "../../controller/UserController";
import { useRef, MutableRefObject, useContext } from "react";
import RoundedProfile from "../UI/RoundedProfile";
import Card from "react-bootstrap/Card";
import Search from "../UI/Search";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import GithubContext from "../../context/app-context";

const ProfileContainer: React.FC = (props) => {
  const refUsernameInput =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const ctx = useContext(GithubContext);

  const SearchHandler = async () => {
    const searchedUser = await UserController.GetUser(
      refUsernameInput.current.value
    );

    const searchedOrgs = await UserController.GetOrgs(
      refUsernameInput.current.value
    );

    const searchedRepos = await UserController.GetRepos(
      refUsernameInput.current.value
    );

    const searchedGists = await UserController.GetGists(
      refUsernameInput.current.value
    );

    const authuser = ctx.AuthenticatedUser;

    ctx.SetAllUserData(
      authuser,
      searchedUser,
      searchedOrgs,
      searchedGists,
      searchedRepos
    );
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
