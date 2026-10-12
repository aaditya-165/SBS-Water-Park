export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === '') {
    return `${fieldName} is required`;
  }
  return null;
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10,}$/;
  if (!phone || !phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
    return 'Please enter a valid phone number (at least 10 digits)';
  }
  return null;
};

export const validateEmail = (email) => {
  if (!email || email.trim() === '') return null; // Optional field in most forms
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return null;
};

export const validateForm = (fields, rules) => {
  let isValid = true;
  const errors = {};

  Object.keys(rules).forEach(key => {
    const rule = rules[key];
    const value = fields[key];

    if (rule.required) {
      const err = validateRequired(value, rule.label || key);
      if (err) {
        errors[key] = err;
        isValid = false;
        return;
      }
    }

    if (rule.type === 'phone' && value) {
      const err = validatePhone(value);
      if (err) {
        errors[key] = err;
        isValid = false;
        return;
      }
    }

    if (rule.type === 'email' && value) {
      const err = validateEmail(value);
      if (err) {
        errors[key] = err;
        isValid = false;
      }
    }
  });

  return { isValid, errors };
};
