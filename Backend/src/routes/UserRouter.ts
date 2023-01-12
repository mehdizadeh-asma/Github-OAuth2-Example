import { Router } from "express";

import UserController from "../controller/UserController";

const router = Router();

router.get("/authorizeuser/:code", UserController.authorizeUser);
router.get("/user", UserController.GetAuthenticatedUser);
router.get("/user/:username", UserController.GetUser);
router.get("/gists/:username", UserController.GetGists);
router.get("/repos/:username", UserController.GetRepos);
router.get("/orgs/:username", UserController.GetOrgs);


export default router;
