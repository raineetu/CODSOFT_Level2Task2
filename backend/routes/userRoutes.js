import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { upload } from "../middleware/mutler.js";
import { signup, login, logout, updateProfile } from "../controllers/userControllers.js";

const router = express.Router();

// Routes
router.route("/signup").post(upload.single("profilePhoto"), signup);
router.route("/login").post(login);
router.route("/logout").post(logout); 
router.route("/updateProfile").put(authenticate, upload.single("profilePhoto"), updateProfile);

export default router;
