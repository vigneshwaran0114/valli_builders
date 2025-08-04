import React from 'react';

const GoogleMap = ({ locationUrl, className = "" }) => {
  // Convert share link to embed URL
  const getEmbedUrl = (url) => {
    // If it's already an embed URL, return as is
    if (url.includes('maps/embed')) {
      return url;
    }
    
    // For share links, we need to extract the location and create an embed URL
    // Since share links don't work directly in iframes, we'll use a fallback embed URL
    // You should replace this with your actual embed URL from Google Maps
    
    // For now, using a generic embed URL for Palani, Tamil Nadu
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1234567890123!2d77.52012345678901!3d10.45678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00a1234567890%3A0x1234567890abcdef!2sN%2FS+Complex%2C+Near+Wakeman+School%2C+Palani%2C+Tamil+Nadu+624601!5e0!3m2!1sen!2sin!4v1234567890123";
  };

  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={getEmbedUrl(locationUrl)}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Valli Builders Office Location"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default GoogleMap; 