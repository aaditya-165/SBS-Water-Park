export const validateEnquiry = (req, res, next) => {
    const {
        website,
        name,
        phone,
        email,
        enquiryType,
        organization,
        numberOfPeople,
        numberOfStudents,
        numberOfTeachers,
        preferredDate,
        selectedPackage,
        message,
        sourcePage
    } = req.body;

    // Honeypot field for bot detection
    if (website) {
        return res.status(200).json({ success: true, message: 'Enquiry submitted successfully' });
    }

    const errors = [];
    const sanitized = {};

    // Helper to sanitize strings
    const sanitize = (str) => {
        if (typeof str !== 'string') return '';
        return str.trim().replace(/<[^>]*>?/gm, ''); // Trim and strip HTML tags
    };

    // Validate and sanitize Name
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 255) {
        errors.push('Name must be a string between 2 and 255 characters');
    } else {
        sanitized.name = sanitize(name);
    }

    // Validate and sanitize Phone
    if (!phone || typeof phone !== 'string' || !/^\+?[\d\s-]{10,15}$/.test(phone.trim().replace(/[\s-]/g, ''))) {
        errors.push('Phone must be between 10 and 15 digits (optional + prefix)');
    } else {
        sanitized.phone = sanitize(phone);
    }

    // Validate and sanitize Email
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof email !== 'string' || !emailRegex.test(email.trim())) {
            errors.push('If provided, email must be a valid format');
        } else {
            sanitized.email = sanitize(email);
        }
    } else {
        sanitized.email = null;
    }

    // Validate enquiryType
    const validTypes = ['GENERAL', 'TICKET', 'SCHOOL_TRIP', 'BIRTHDAY', 'GROUP_BOOKING', 'HALDI'];
    if (enquiryType && !validTypes.includes(enquiryType)) {
        errors.push('Invalid enquiry type');
    } else {
        sanitized.enquiryType = enquiryType || 'GENERAL';
    }

    // Organization
    if (organization) {
        if (typeof organization !== 'string' || organization.length > 255) {
            errors.push('Organization must be a string up to 255 characters');
        } else {
            sanitized.organization = sanitize(organization);
        }
    } else {
        sanitized.organization = null;
    }

    // Number validation helper
    const validatePositiveInt = (val, fieldName) => {
        if (val !== undefined && val !== null && val !== '') {
            const num = Number(val);
            if (!Number.isInteger(num) || num <= 0) {
                errors.push(`${fieldName} must be a positive integer`);
                return null;
            }
            return num;
        }
        return null;
    };

    sanitized.numberOfPeople = validatePositiveInt(numberOfPeople, 'numberOfPeople');
    sanitized.numberOfStudents = validatePositiveInt(numberOfStudents, 'numberOfStudents');
    sanitized.numberOfTeachers = validatePositiveInt(numberOfTeachers, 'numberOfTeachers');

    // Date validation
    if (preferredDate) {
        const date = new Date(preferredDate);
        if (isNaN(date.getTime())) {
            errors.push('preferredDate must be a valid date');
        } else {
            sanitized.preferredDate = date.toISOString().split('T')[0];
        }
    } else {
        sanitized.preferredDate = null;
    }

    // Selected Package
    if (selectedPackage) {
        sanitized.selectedPackage = sanitize(selectedPackage);
    } else {
        sanitized.selectedPackage = null;
    }

    // Message
    if (message) {
        if (typeof message !== 'string' || message.length > 2000) {
            errors.push('Message must be a string up to 2000 characters');
        } else {
            sanitized.message = sanitize(message);
        }
    } else {
        sanitized.message = null;
    }

    // Source Page
    if (sourcePage) {
        if (typeof sourcePage !== 'string' || sourcePage.length > 100) {
            errors.push('Source page must be a string up to 100 characters');
        } else {
            sanitized.sourcePage = sanitize(sourcePage);
        }
    } else {
        sanitized.sourcePage = null;
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
    }

    req.sanitizedData = sanitized;
    next();
};
