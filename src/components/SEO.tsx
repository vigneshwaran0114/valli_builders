import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "civil engineering, construction, structural design, project management, Palani, Tamil Nadu, Valli Builders, construction company, building contractors, engineering services",
  canonical,
  ogImage = "https://vallibuilders.com/og-image.jpg",
  ogType = "website",
  structuredData,
  noindex = false,
  nofollow = false
}: SEOProps) => {
  const siteUrl = "https://vallibuilders.com";
  const fullTitle = `${title} | Valli Builders - Professional Civil Engineering Solutions`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Determine robots content
  const robotsContent = noindex || nofollow 
    ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`
    : 'index, follow';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Valli Builders" />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={fullCanonical} />

      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Palani, Tamil Nadu" />
      <meta name="geo.position" content="10.4548;77.5201" />
      <meta name="ICBM" content="10.4548, 77.5201" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Valli Builders - Professional Civil Engineering Solutions" />
      <meta property="og:site_name" content="Valli Builders" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ta_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Valli Builders - Professional Civil Engineering Solutions" />
      <meta name="twitter:site" content="@vallibuilders" />
      <meta name="twitter:creator" content="@vallibuilders" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Valli Builders" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="N/S Complex, Near Wakeman School" />
      <meta name="business:contact_data:locality" content="Palani" />
      <meta name="business:contact_data:postal_code" content="624601" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content="+91-9003487292" />
      <meta name="business:contact_data:email" content="vallibuilders1@gmail.com" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
    </Helmet>
  );
};

export default SEO; 