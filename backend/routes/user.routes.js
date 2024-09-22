import express from "express";
import { login, logout, regiter, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router =  express.Router();

router.route("/register").post(regiter);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;