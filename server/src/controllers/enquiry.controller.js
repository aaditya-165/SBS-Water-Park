import { createEnquiry, getEnquiries } from '../models/enquiry.model.js';

export const submitEnquiry = async (req, res, next) => {
    // In Express 5+, async errors are automatically passed to next()
    const result = await createEnquiry(req.sanitizedData);
    
    if (result) {
        res.status(201).json({
            success: true,
            message: 'Enquiry submitted successfully'
        });
    } else {
        throw new Error('Failed to create enquiry');
    }
};

export const listEnquiries = async (req, res, next) => {
    const data = await getEnquiries();
    res.status(200).json({
        success: true,
        data
    });
};
