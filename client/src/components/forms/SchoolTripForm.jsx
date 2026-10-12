import { useState } from 'react';
import { useLocation } from 'react-router';
import FormField from '../ui/FormField';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import { validateForm } from '../../utils/validators';
import { submitEnquiry } from '../../utils/api';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export default function SchoolTripForm() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    schoolName: '',
    coordinatorName: '',
    phone: '',
    email: '',
    numberOfStudents: '',
    numberOfTeachers: '',
    preferredDate: '',
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
      schoolName: { required: true, label: 'School Name' },
      coordinatorName: { required: true, label: 'Coordinator Name' },
      phone: { required: true, type: 'phone', label: 'Phone' },
      numberOfStudents: { required: true, label: 'Number of Students' },
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
        organization: formData.schoolName,
        name: formData.coordinatorName,
        phone: formData.phone,
        email: formData.email,
        numberOfPeople: formData.numberOfStudents,
        preferredDate: formData.preferredDate,
        message: `Teachers: ${formData.numberOfTeachers}. ${formData.message}`,
        enquiryType: 'SCHOOL_TRIP',
        sourcePage: location.pathname
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your interest! Our team will contact you shortly to plan the perfect school picnic.'
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
          <Button href={getWhatsAppUrl(whatsappMessages.school)} variant="whatsapp">WhatsApp Us</Button>
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
        <FormField label="School Name" name="schoolName" value={formData.schoolName} onChange={handleChange} error={errors.schoolName} required />
        <FormField label="Coordinator Name" name="coordinatorName" value={formData.coordinatorName} onChange={handleChange} error={errors.coordinatorName} required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} required />
        <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField label="No. of Students" name="numberOfStudents" type="number" value={formData.numberOfStudents} onChange={handleChange} error={errors.numberOfStudents} required />
        <FormField label="No. of Teachers" name="numberOfTeachers" type="number" value={formData.numberOfTeachers} onChange={handleChange} />
        <FormField label="Preferred Date" name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} />
      </div>

      <FormField label="Additional Requirements/Message" name="message" as="textarea" value={formData.message} onChange={handleChange} />

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader text="" /> : 'Request School Pricing'}
      </Button>
    </form>
  );
}
