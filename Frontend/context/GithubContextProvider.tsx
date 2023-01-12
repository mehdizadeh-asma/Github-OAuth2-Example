import { useState } from "react";
import GithubContext, { GithubContextType } from "../context/app-context";
import Gist from "../models/Gist";
import Org from "../models/Org";
import Repo from "../models/Repo";
import User from "../models/User";

const GithubContextProvider = (props: React.ReactNode) => {
  const context: GithubContextType = {};

  const [ctx, setCtx] = useState(context);

  const SetUser = (user: User) => {
    setCtx((origin) => {
      return { ...origin, User: user };
    });
  };
  const SetAuthenticatedUser = (user: User) => {
    setCtx((origin) => {
      return { ...origin, AuthenticatedUser: user };
    });
  };
  const SetOrgs = (orgs: Org[]) => {
    setCtx((origin) => {
      return { ...origin, Orgs: orgs };
    });
  };
  const SetGists = (gists: Gist[]) => {
    setCtx((origin) => {
      return { ...origin, Gists: gists };
    });
  };
  const SetRepos = (repos: Repo[]) => {
    setCtx((origin) => {
      return { ...origin, Repos: repos };
    });
  };
  const SetAllUserData = (
    authuser: User,
    user: User,
    orgs: Org[],
    gists: Gist[],
    repos: Repo[]
  ) => {
    setCtx((origin) => {
      return {
        ...origin,
        Repos: repos,
        Gists: gists,
        Orgs: orgs,
        User: user,
        AuthenticatedUser: authuser,
      };
    });
  };
  return (
    <GithubContext.Provider
      value={{
        ...ctx,
        SetAuthenticatedUser,
        SetUser,
        SetOrgs,
        SetRepos,
        SetGists,
        SetAllUserData,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContextProvider;
