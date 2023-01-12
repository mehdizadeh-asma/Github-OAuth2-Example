import React from "react";
import Gist from "../models/Gist";
import Org from "../models/Org";
import Repo from "../models/Repo";
import User from "../models/User";

export class GithubContextType {
  User?: User;
  AuthenticatedUser?: User;
  Orgs?: Org[];
  Repos?: Repo[];
  Gists?: Gist[];
  SetAuthenticatedUser?: (user: User) => void;
  SetUser?: (user: User) => void;
  SetOrgs?: (orgs: Org[]) => void;
  SetGists?: (gists: Gist[]) => void;
  SetRepos?: (repos: Repo[]) => void;
  SetAllUserData?: (
    user: User,
    AuthenticatedUser:User,
    orgs: Org[],
    gists: Gist[],
    repos: Repo[]
  ) => void;
}

const context: GithubContextType = {};

const GithubContext = React.createContext<GithubContextType>(context);

export default GithubContext;
