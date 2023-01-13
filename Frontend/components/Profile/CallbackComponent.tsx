import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import GithubContext from "../../context/app-context";
import UserController from "../../controller/UserController";
import Spinner from "react-bootstrap/Spinner";
import Link from "next/link";
import AwsomeButton from "../UI/AwsomeButton";

const CallbackComponent = () => {
  const ctx = useContext(GithubContext);
  const router = useRouter();
  const [errorText, setErrorText] = useState(null);

  const code = router.query.code as string;

  useEffect(() => {
    const AuthorizeUser = async () => {
      try {
        if (!code) return;

        if (!ctx) return;

        const token = await UserController.AuthorizeUser(code);

        const authUser = await UserController.GetAuthenticatedUser(token);

        const searchedOrgs = await UserController.GetOrgs(
          token,
          authUser.login
        );

        const searchedRepos = await UserController.GetRepos(
          token,
          authUser.login
        );

        const searchedGists = await UserController.GetGists(
          token,
          authUser.login
        );

        if (ctx.SetData)
          ctx.SetData({
            Token: token,
            AuthenticatedUser: authUser,
            User: authUser,
            Orgs: searchedOrgs,
            Gists: searchedGists,
            Repos: searchedRepos,
          });
        else throw new Error("Context is undefined");

        router.push("/profile");
      } catch (error: any) {
        setErrorText(error.toString());
      }
    };
    AuthorizeUser();
  }, [code, ctx, router]);

  const clickHandler = () => {
    router.push("/");
  };

  return (
    <div className="row container d-flex flex-column  h-100 justify-content-center align-items-center ">
      <div className="spinner col-2 d-flex h50vh justify-content-between align-items-end ">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="primary" />
      </div>
      {errorText && (
        <div className="error  w-75 justify-content-center text-center align-items-start">
          <h5 className="text-primary my-3">
            Something went wrong, Please go back to Meet Page
          </h5>
          <h6 className="text-danger my-3">{errorText}</h6>
          <AwsomeButton
            ClassName={`BtnMain BtnGrdPurple w18vw h505vh my-2`}
            type="button"
            Title="Meet Github"
            onClick={clickHandler}
          ></AwsomeButton>
        </div>
      )}
    </div>
  );
};
export default CallbackComponent;
