import React from "react";

import Gist from "../models/Gist";
import Org from "../models/Org";
import Repo from "../models/Repo";
import User from "../models/User";

export class GithubContextType {
  Token?: string;
  User?: User;
  AuthenticatedUser?: User;
  Orgs?: Org[];
  Repos?: Repo[];
  Gists?: Gist[];
  SetData?: (context: GithubContextType) => void;
}

const context: GithubContextType = {};

const GithubContext = React.createContext<GithubContextType>(context);

export default GithubContext;
