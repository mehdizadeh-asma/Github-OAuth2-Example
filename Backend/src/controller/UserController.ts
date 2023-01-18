import { RequestHandler } from "express";

import { createOAuthUserAuth } from "@octokit/auth-oauth-user";
import { Octokit } from "@octokit/core";

import Helper from "../utils/Helper";

class UserController {
  static AuthorizeUser: RequestHandler = async (req, res, next) => {
    try {
      const code = req.params.code;

      const clientId = process.env.GITHUB_OAUTH_CLIENTID;
      const clientSecret = process.env.GITHUB_OAUTH_CLIENTSECRET;

      if (!code || code === "") throw new Error("Invalid Code");

      if (!clientId || clientId === "")
        throw new Error("Github ClientId doesn't Exist!");

      if (!clientSecret || clientSecret === "")
        throw new Error("Github ClientSecret doesn't Exist!");

      const auth = createOAuthUserAuth({
        clientId: clientId,
        clientSecret: clientSecret,
        code: code,
      });

      const { token } = await auth();
      res.status(200).json({ token: token });
    } catch (error) {
      next(error);
    }
  };

  static GetAuthenticatedUser: RequestHandler = async (req, res, next) => {
    try {
      if (!req.headers["authorization"] || req.headers["authorization"] === "")
        throw new Error("Invalid Authorization");

      const token = Helper.ExtractToken(
        req.headers["authorization"].toString()
      );

      if (token === "") throw new Error("Invalid Token");

      const octokit = new Octokit({
        auth: token,
      });

      const result = await octokit.request(`GET /user`);

      res.status(200).json(result.data);
    } catch (error) {
      next(error);
    }
  };

  static GetUser: RequestHandler = async (req, res, next) => {
    try {
      const username = req.params.username;

      if (!username || username === "") throw new Error("Invalid Username");

      if (!req.headers["authorization"] || req.headers["authorization"] === "")
        throw new Error("Invalid Authorization");

      const token = Helper.ExtractToken(
        req.headers["authorization"].toString()
      );

      if (token === "") throw new Error("Invalid Token");

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

  static GetOrgs: RequestHandler = async (req, res, next) => {
    try {
      const username = req.params.username;

      if (!username || username === "") throw new Error("Invalid Username");

      if (!req.headers["authorization"] || req.headers["authorization"] === "")
        throw new Error("Invalid Authorization");

      const token = Helper.ExtractToken(
        req.headers["authorization"].toString()
      );

      if (token === "") throw new Error("Invalid Token");

      const octokit = new Octokit({
        auth: token,
      });

      const result = await octokit.request(`GET /users/${username}/orgs`, {
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

      if (!req.headers["authorization"] || req.headers["authorization"] === "")
        throw new Error("Invalid Authorization");

      const token = Helper.ExtractToken(
        req.headers["authorization"].toString()
      );

      if (token === "") throw new Error("Invalid Token");

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

      if (!req.headers["authorization"] || req.headers["authorization"] === "")
        throw new Error("Invalid Authorization");

      const token = Helper.ExtractToken(
        req.headers["authorization"].toString()
      );

      if (token === "") throw new Error("Invalid Token");

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
}

export default UserController;
