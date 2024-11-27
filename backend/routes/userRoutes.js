import express from 'express';
import { upload } from "../middleware/mutler.js";
import {signup, login, logout, updateProfile} from '../controllers/userControllers.js';

const router  = express.Router();

router.post("/signup", upload.single("profilePhoto"), signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.put("/updateProfile", upload.single("profilePhoto"), updateProfile);


export default router;