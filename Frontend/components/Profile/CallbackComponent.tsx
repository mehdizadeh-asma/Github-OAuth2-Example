import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import GithubContext from "../../context/app-context";
import UserController from "../../controller/UserController";
import Spinner from "react-bootstrap/Spinner";

const CallbackComponent = () => {
  const ctx = useContext(GithubContext);
  const router = useRouter();
  const code = router.query.code;
  console.log(router.query.code);
  console.log(UserController.token);

  useEffect(() => {
    const AuthorizeUser = async () => {
      if (UserController.token !== "") return;

      if (!code) return;

      const token = await UserController.AuthorizeUser(code);

      console.log(token);

      UserController.token = token;

      const authUser = await UserController.GetAuthenticatedUser();

      const searchedOrgs = await UserController.GetOrgs(authUser.login);

      const searchedRepos = await UserController.GetRepos(authUser.login);

      const searchedGists = await UserController.GetGists(authUser.login);

      ctx.SetAllUserData(
        authUser,
        authUser,
        searchedOrgs,
        searchedGists,
        searchedRepos
      );

      router.push("/profile");
    };
    AuthorizeUser();
  }, [code]);

  return (
    <div className="row container d-flex h-100 justify-content-center align-items-center ">
      <div className="col-2 d-flex h75vh justify-content-between align-items-center ">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="primary" />
      </div>
    </div>
  );
};
export default CallbackComponent;
