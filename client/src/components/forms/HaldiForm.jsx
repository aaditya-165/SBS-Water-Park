import { useState } from 'react';
import { useLocation } from 'react-router';
import FormField from '../ui/FormField';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import { validateForm } from '../../utils/validators';
import { submitEnquiry } from '../../utils/api';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export default function HaldiForm() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    numberOfGuests: '',
    eventDate: '',
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
        numberOfPeople: formData.numberOfGuests,
        preferredDate: formData.eventDate,
        message: formData.message,
        enquiryType: 'HALDI',
        sourcePage: location.pathname
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will get in touch shortly to help plan your joyful Haldi ceremony.'
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
      <div className="text-center p-8 bg-amber-50 rounded-2xl border border-amber-200">
        <div className="text-4xl mb-3">🌼</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Received!</h3>
        <p className="text-gray-600 mb-6">{submitStatus.message}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button href={getWhatsAppUrl(whatsappMessages.haldi)} variant="whatsapp">WhatsApp Us</Button>
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
        <FormField label="Your Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} placeholder="e.g. Rahul Sharma" required />
        <FormField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="10-digit mobile number" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="optional" />
        <FormField label="Estimated Guests" name="numberOfGuests" type="number" value={formData.numberOfGuests} onChange={handleChange} placeholder="e.g. 50" />
        <FormField label="Haldi Date" name="eventDate" type="date" value={formData.eventDate} onChange={handleChange} />
      </div>

      <FormField label="Special Requests / Decoration Needs" name="message" as="textarea" rows={3} value={formData.message} onChange={handleChange} placeholder="Tell us about decor theme, food preferences, stage setup or rain dance requirements..." />

      <Button type="submit" variant="primary" className="w-full shadow-md font-bold py-3" disabled={isSubmitting}>
        {isSubmitting ? <Loader text="Submitting..." /> : 'Enquire for Haldi Celebration'}
      </Button>
    </form>
  );
}
