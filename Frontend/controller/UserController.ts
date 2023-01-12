import axios from "axios";
import Gist from "../models/Gist";
import Org from "../models/Org";
import Repo from "../models/Repo";
import User from "../models/User";
import Helper from "../utils/Helper";

class UserController {
  static token = "";
  static async AuthorizeUser(code: string) {
    const response = await axios.get(
      Helper.BACKEND_URL + "/api/authorizeuser/" + code
    );

    return response.data.token;
  }

  static async GetAuthenticatedUser() {
    const response = await axios.get(
      Helper.BACKEND_URL + "/api/user",
      {
        headers: {
          authorization: "Bearer " + this.token,
        },
      }
    );

    return response.data as User;
  }


  static async GetUser(username: string) {
    const response = await axios.get(
      Helper.BACKEND_URL + "/api/user/" + username,
      {
        headers: {
          authorization: "Bearer " + this.token,
        },
      }
    );

    return response.data as User;
  }

  static async GetOrgs(username: string) {
    const response = await axios.get(
      Helper.BACKEND_URL + "/api/orgs/" + username,
      {
        headers: {
          authorization: "Bearer " + this.token,
        },
      }
    );

    return response.data as Org[];
  }

  static async GetRepos(username: string) {
    const response = await axios.get(
      Helper.BACKEND_URL + "/api/repos/" + username,
      {
        headers: {
          authorization: "Bearer " + this.token,
        },
      }
    );

    return response.data as Repo[];
  }

  static async GetGists(username: string) {
    const response = await axios.get(
      Helper.BACKEND_URL + "/api/gists/" + username,
      {
        headers: {
          authorization: "Bearer " + this.token,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    return response.data as Gist[];
  }
}

export default UserController;
