import express from 'express';
import {
  createApplication,
  getApplicationsByJob,
  getApplicationsByApplicant,
  updateApplicationStatus,
  deleteApplication,
} from '../controllers/applicationControllers.js';

const router = express.Router();

router.post('/create', createApplication);
router.get('/job/:jobId', getApplicationsByJob);
router.get('/applicant/:applicantId', getApplicationsByApplicant);
router.put('/status/:applicationId', updateApplicationStatus);
router.delete('/:applicationId', deleteApplication);

export default router;
