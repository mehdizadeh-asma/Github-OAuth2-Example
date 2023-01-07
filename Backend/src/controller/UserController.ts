import { RequestHandler } from "express";

import { createOAuthUserAuth } from "@octokit/auth-oauth-user";
import { Octokit } from "@octokit/core";

import Helper from "../utils/Helper";

class UserController {
  static authorizeUser: RequestHandler = async (req, res, next) => {
    try {
      const auth = createOAuthUserAuth({
        clientId: "648e6c81597252d33496",
        clientSecret: "08a3ab86fe84c1795f539239802e8ece59129882",
        code: req.query.code?.toString() ?? "",
        redirectUrl: "",
      });

      const { token } = await auth();
      res.status(200).json({ token: token });
    } catch (error) {
      next(error);
    }
  };

  //
  static GetUser: RequestHandler = async (req, res, next) => {
    try {
      const username = req.params.username;

      if (!username || username === "") throw new Error("Invalid Username");

      if (!req.headers["Authorization"] || req.headers["Authorization"] === "")
        throw new Error("Invalid Authorization");

      const token = Helper.ExtractToken(
        req.headers["Authorization"].toString()
      );

      if (token === "") throw new Error("Invalid Token");
      //  token = "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";

      const octokit = new Octokit({
        auth: token,
      });

      const result = await octokit.request(`GET /users/${username}`, {
        username: username,
      });

      res.status(200).json(result.data);
    } catch (error) {
      next(error);
    }
  };

  static GetGists: RequestHandler = async (req, res, next) => {
    try {
      const username = req.params.username;

      if (!username || username === "") throw new Error("Invalid Username");

      if (!req.headers["Authorization"] || req.headers["Authorization"] === "")
        throw new Error("Invalid Authorization");

      const token = Helper.ExtractToken(
        req.headers["Authorization"].toString()
      );

      if (token === "") throw new Error("Invalid Token");
      //  token = "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";

      const octokit = new Octokit({
        auth: token,
      });

      const result = await octokit.request(`GET /users/${username}/gists`, {
        username: username,
      });
      res.status(200).json(result.data);
    } catch (error) {
      next(error);
    }
  };

  static GetRepos: RequestHandler = async (req, res, next) => {
    try {
      const username = req.params.username;

      if (!username || username === "") throw new Error("Invalid Username");

      if (!req.headers["Authorization"] || req.headers["Authorization"] === "")
        throw new Error("Invalid Authorization");

      const token = Helper.ExtractToken(
        req.headers["Authorization"].toString()
      );

      if (token === "") throw new Error("Invalid Token");
      //  token = "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";

      const octokit = new Octokit({
        auth: token,
      });

      const result = await octokit.request(`GET /users/${username}/repos`, {
        username: username,
      });
      res.status(200).json(result.data);
    } catch (error) {
      next(error);
    }
  };

  static GetOrgs: RequestHandler = async (req, res, next) => {
    try {
      const username = req.params.username;

      if (!username || username === "") throw new Error("Invalid Username");

      if (!req.headers["Authorization"] || req.headers["Authorization"] === "")
        throw new Error("Invalid Authorization");

      const token = Helper.ExtractToken(
        req.headers["Authorization"].toString()
      );

      if (token === "") throw new Error("Invalid Token");
      //  token = "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";

      const octokit = new Octokit({
        auth: token,
      });

      const result = await octokit.request(`GET /users/${username}/orgs`, {
        username: "mojombo",
      });
      res.status(200).json(result.data);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
