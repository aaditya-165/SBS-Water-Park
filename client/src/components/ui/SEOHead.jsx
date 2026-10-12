import { Helmet } from 'react-helmet-async';

export default function SEOHead({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogTitle, 
  ogDescription,
  structuredData,
  robots = 'index, follow'
}) {
  const fullUrl = `https://sbswaterpark.com${canonical || ''}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={`https://sbswaterpark.com${ogImage}`} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      {ogImage && <meta name="twitter:image" content={`https://sbswaterpark.com${ogImage}`} />}
      
      <meta name="robots" content={robots} />
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
