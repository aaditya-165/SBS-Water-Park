import { useState } from 'react';
import { useLocation } from 'react-router';
import FormField from '../ui/FormField';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import { validateForm } from '../../utils/validators';
import { submitEnquiry } from '../../utils/api';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export default function ContactForm() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    numberOfPeople: '',
    preferredDate: '',
    enquiryType: 'General',
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
    
    // Honeypot check
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
        ...formData,
        enquiryType: 'GENERAL',
        sourcePage: location.pathname
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for reaching out! We will get back to you shortly.'
      });
      
      setFormData({
        name: '', phone: '', email: '', numberOfPeople: '', preferredDate: '', enquiryType: 'General', message: '', website: ''
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
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">{submitStatus.message}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={getWhatsAppUrl(whatsappMessages.general)} variant="whatsapp">
            WhatsApp Us
          </Button>
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus.type === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl mb-4">
          {submitStatus.message}
        </div>
      )}

      {/* Honeypot field */}
      <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
        <FormField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
        <FormField label="Number of People" name="numberOfPeople" type="number" value={formData.numberOfPeople} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Preferred Date" name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} />
        <FormField label="Enquiry Type" name="enquiryType" as="select" value={formData.enquiryType} onChange={handleChange} options={['General', 'Ticket Enquiry', 'Other']} />
      </div>

      <FormField label="Your Message" name="message" as="textarea" value={formData.message} onChange={handleChange} placeholder="How can we help you?" />

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader text="" /> : 'Send Message'}
      </Button>
    </form>
  );
}
