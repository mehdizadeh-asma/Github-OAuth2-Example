import axios from "axios";
import path from "path";
import Gist from "../models/Gist";
import Org from "../models/Org";
import Repo from "../models/Repo";
import User from "../models/User";

class UserController {
  static async AuthorizeUser(code: string) {
    if (!process.env.BACKEND_URL)
      throw new Error("Backend Url is Unavailable!");
    const url = new URL("/api/authorizeuser/", process.env.BACKEND_URL);

    const response = await axios.get(url + code);

    return response.data.token;
  }

  static async GetAuthenticatedUser(token: string) {
    if (!process.env.BACKEND_URL)
      throw new Error("Backend Url is Unavailable!");
    const url = new URL("/api/user/", process.env.BACKEND_URL);

    const response = await axios.get(url.toString(), {
      headers: {
        authorization: "Bearer " + token,
      },
    });

    return response.data as User;
  }

  static async GetUser(token: string, username: string) {
    if (!process.env.BACKEND_URL)
      throw new Error("Backend Url is Unavailable!");

    const url = new URL("/api/user/", process.env.BACKEND_URL);

    const response = await axios.get(url + username, {
      headers: {
        authorization: "Bearer " + token,
      },
    });

    return response.data as User;
  }

  static async GetOrgs(token: string, username: string) {
    if (!process.env.BACKEND_URL)
      throw new Error("Backend Url is Unavailable!");

    const url = new URL("/api/orgs/", process.env.BACKEND_URL);

    const response = await axios.get(url + username, {
      headers: {
        authorization: "Bearer " + token,
      },
    });

    return response.data as Org[];
  }

  static async GetRepos(token: string, username: string) {
    if (!process.env.BACKEND_URL)
      throw new Error("Backend Url is Unavailable!");

    const url = new URL("/api/repos/", process.env.BACKEND_URL);

    const response = await axios.get(url + username, {
      headers: {
        authorization: "Bearer " + token,
      },
    });

    return response.data as Repo[];
  }

  static async GetGists(token: string, username: string) {
    if (!process.env.BACKEND_URL)
      throw new Error("Backend Url is Unavailable!");

    const url = new URL("/api/gists/", process.env.BACKEND_URL);

    const response = await axios.get(url + username, {
      headers: {
        authorization: "Bearer " + token,
      },
    });

    return response.data as Gist[];
  }
}

export default UserController;
