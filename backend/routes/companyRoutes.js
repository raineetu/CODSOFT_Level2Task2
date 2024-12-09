import express from 'express';
import { authenticate } from "../middleware/authenticate.js";
import { registerCompany, getCompany, getCompanyById, updateCompany } from '../controllers/companyControllers.js';

const router = express.Router();

router.post("/registercompany", authenticate, registerCompany);

router.get("/getcompany", authenticate, getCompany);

router.get("/getcompany/:id", authenticate, getCompanyById);

router.put("/updatecompany/:id", authenticate, updateCompany);

export default router;
