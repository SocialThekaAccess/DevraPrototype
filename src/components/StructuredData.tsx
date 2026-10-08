import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: 'organization' | 'article' | 'localBusiness';
  data?: any;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  
  // Organization Schema for DEVRA Architects
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DEVRA Architects",
    "alternateName": "Devra Chandigarh",
    "url": "https://devra.in",
    "logo": "https://devra.in/assets/devraBlack.png",
    "description": "Premium luxury architecture and interior design services in Chandigarh, Mohali, and Punjab. Specializing in modern residential villas, farmhouses, and commercial spaces.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chandigarh",
      "addressLocality": "Chandigarh",
      "addressRegion": "Chandigarh",
      "postalCode": "160001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.7333,
      "longitude": 76.7794
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "pa"]
    },
    "sameAs": [
      "https://www.instagram.com/devra.architects",
      "https://www.facebook.com/devraarchitects",
      "https://www.linkedin.com/company/devra-architects"
    ]
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DEVRA Architects",
    "image": "https://devra.in/assets/devraBlack.png",
    "url": "https://devra.in",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chandigarh",
      "addressLocality": "Chandigarh",
      "addressRegion": "Punjab",
      "postalCode": "160001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.7333,
      "longitude": 76.7794
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 30.7333,
        "longitude": 76.7794
      },
      "geoRadius": "100000"
    }
  };

  // Article Schema for Blog Posts
  const articleSchema = data ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "image": data.image || "https://devra.in/assets/devraBlack.png",
    "author": {
      "@type": "Person",
      "name": data.author || "Ar. Rajkumar Devra"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DEVRA Architects",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devra.in/assets/devraBlack.png"
      }
    },
    "datePublished": data.datePublished,
    "dateModified": data.dateModified || data.datePublished
  } : null;

  const getSchema = () => {
    switch (type) {
      case 'article':
        return articleSchema;
      case 'localBusiness':
        return localBusinessSchema;
      case 'organization':
      default:
        return organizationSchema;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
