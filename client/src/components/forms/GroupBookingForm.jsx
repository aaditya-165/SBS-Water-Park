import { useState } from 'react';
import { useLocation } from 'react-router';
import FormField from '../ui/FormField';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import { validateForm } from '../../utils/validators';
import { submitEnquiry } from '../../utils/api';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export default function GroupBookingForm() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    numberOfPeople: '',
    preferredDate: '',
    visitType: '',
    message: '',
    website: '' // honeypot
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website) return;

    const rules = {
      name: { required: true, label: 'Name' },
      phone: { required: true, type: 'phone', label: 'Phone' },
      numberOfPeople: { required: true, label: 'Number of People' },
      email: { type: 'email', label: 'Email' }
    };

    const { isValid, errors: validationErrors } = validateForm(formData, rules);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await submitEnquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        organization: formData.organization,
        numberOfPeople: formData.numberOfPeople,
        preferredDate: formData.preferredDate,
        message: `Visit Type: ${formData.visitType}. ${formData.message}`,
        enquiryType: 'GROUP_BOOKING',
        sourcePage: location.pathname
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will contact you with a customized quote for your group.'
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus.type === 'success') {
    return (
      <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">{submitStatus.message}</p>
        <div className="flex justify-center gap-4">
          <Button href={getWhatsAppUrl(whatsappMessages.group)} variant="whatsapp">WhatsApp Us</Button>
          <Button href="/" variant="outline">Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus.type === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl mb-4">{submitStatus.message}</div>
      )}
      <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex="-1" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Contact Person" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
        <FormField label="Organization/Group Name" name="organization" value={formData.organization} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} required />
        <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField label="Group Size" name="numberOfPeople" type="number" value={formData.numberOfPeople} onChange={handleChange} error={errors.numberOfPeople} required />
        <FormField label="Preferred Date" name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} />
        <FormField label="Visit Type" name="visitType" as="select" value={formData.visitType} onChange={handleChange} options={['Family', 'Friends', 'Corporate', 'College', 'Other']} />
      </div>

      <FormField label="Additional Details" name="message" as="textarea" value={formData.message} onChange={handleChange} />

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader text="" /> : 'Get Group Quote'}
      </Button>
    </form>
  );
}
