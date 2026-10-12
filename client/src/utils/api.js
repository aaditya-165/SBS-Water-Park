import { siteConfig } from '../config/siteConfig';

export async function submitEnquiry(data) {
  try {
    const response = await fetch(`${siteConfig.apiUrl}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMsg = errorData.message || (errorData.errors && errorData.errors.join('. ')) || 'Failed to submit enquiry. Please make sure all details are correct and try again.';
      throw new Error(errorMsg);
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Unable to connect to the server. Please ensure the backend is running or contact us via WhatsApp.');
    }
    throw error;
  }
}

export async function fetchEnquiries() {
  try {
    const response = await fetch(`${siteConfig.apiUrl}/enquiries`);
    if (!response.ok) {
      throw new Error('Failed to fetch enquiries from server');
    }
    const result = await response.json();
    return result.data?.enquiries || [];
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    throw error;
  }
}
