import express from "express";
import { 
    postJob, 
    getAllJobs, 
    getJobById, 
    getAdminJobs 
} from "../controllers/jobControllers.js"; // Adjust the path as needed

const router = express.Router();


router.post("/jobpost", /* requireAuth, */ postJob);

router.get("/jobs", getAllJobs);

router.get("/jobs/:id", getJobById);

router.get("/admin/jobs", /* requireAuth, */ getAdminJobs);

export default router;
