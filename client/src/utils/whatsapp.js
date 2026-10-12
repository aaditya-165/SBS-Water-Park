import { siteConfig } from '../config/siteConfig';

export const getWhatsAppUrl = (message, number = siteConfig.whatsapp) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

export const whatsappMessages = {
  general: 'Hi SBS Water Park, I would like to know more about your facilities.',
  tickets: 'Hi, I want to inquire about ticket prices and packages.',
  school: 'Hi, I want to organize a school picnic at SBS Water Park. Please share the details.',
  birthday: 'Hi, I want to celebrate a birthday party at SBS Water Park. Please share the details.',
  haldi: 'Hi, I want to organize a Haldi ceremony at SBS Water Park. Please share package details and availability.',
  group: 'Hi, I want to make a group booking for SBS Water Park. Please share the special rates.'
};
