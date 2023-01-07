import { Router } from "express";

import UserController from "../controller/UserController";


const router = Router();

router.post("/authorizeUser", UserController.authorizeUser);
router.get("/user/:username", UserController.GetUser);
router.get("/gists/:username", UserController.GetGists);
router.get("/repos/:username", UserController.GetRepos);
router.get("/orgs/:username", UserController.GetOrgs);

export default router;
