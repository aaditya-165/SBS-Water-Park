export const errorHandler = (err, req, res, next) => {
    console.error('Error caught by global handler:', err);
    
    // Never expose database credentials, internals, or stack traces to clients
    res.status(500).json({
        success: false,
        message: 'Unable to process your enquiry at this moment. Please try again shortly or contact us directly via WhatsApp/Call.'
    });
};
