import { Router } from 'express';
import { validateEnquiry } from '../middleware/validate.js';
import { enquiryLimiter } from '../middleware/rateLimiter.js';
import { submitEnquiry, listEnquiries } from '../controllers/enquiry.controller.js';

const router = Router();

router.get('/', listEnquiries);
router.post('/', enquiryLimiter, validateEnquiry, submitEnquiry);

export default router;
