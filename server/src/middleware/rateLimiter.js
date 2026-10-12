import rateLimit from 'express-rate-limit';

export const enquiryLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 10, // Limit each IP to 10 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        errors: ['Too many enquiries created from this IP, please try again after 15 minutes']
    }
});
