import { siteConfig } from '../config/siteConfig';

export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AmusementPark",
    "name": siteConfig.name,
    "image": "https://sbswaterpark.com/images/hero-bg.webp",
    "@id": "https://sbswaterpark.com",
    "url": "https://sbswaterpark.com",
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pulgaon",
      "addressLocality": "Wardha",
      "addressRegion": "Maharashtra",
      "postalCode": "",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "11:00",
      "closes": "16:00"
    }
  };
};

export const getFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const getBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://sbswaterpark.com${item.href}`
    }))
  };
};

export const getWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": "https://sbswaterpark.com"
  };
};
