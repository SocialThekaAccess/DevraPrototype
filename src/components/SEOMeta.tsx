import { Helmet } from "react-helmet-async";

interface SEOMetaProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  path?: string;
}

export default function SEOMeta({
  title,
  description,
  keywords = [],
  ogImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80", // Sansarg Hero Image as default
  ogType = "website",
  path = "",
}: SEOMetaProps) {
  const baseTitle = "DEVRA Architects";
  const fullTitle = title.includes(baseTitle) ? title : `${title} | ${baseTitle}`;
  
  // Best practice absolute URL resolution for metadata sharing (e.g. WhatsApp, LinkedIn)
  const origin = typeof window !== "undefined" ? window.location.origin : "https://devrachandigarh.com";
  const absoluteUrl = `${origin}/${path.replace(/^\//, "")}`;

  // Broad set of baseline keywords focused on the premium Indian architectural landscape
  const defaultKeywords = [
    "best architects in chandigarh",
    "top residential architect mohali",
    "luxury home designers punjab",
    "modern courtyard houses india",
    "new chandigarh luxury villas",
    "sustainable farmhouses punjab",
    "exposed concrete architecture chandigarh",
    "buildofy architects chandigarh",
    "charged voids style projects",
    "aman aggarwal inspired architecture",
    "corbusier modernism tricity",
    "interior designers panchkula",
    "design to build contractors punjab",
    "modern haveli design",
  ];

  const uniqueKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={uniqueKeywords.join(", ")} />
      <meta name="author" content="DEVRA Architects" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={absoluteUrl} />

      {/* Region & Language Targeting (India SEO Best Practice) */}
      <meta name="geo.region" content="IN-PB" /> {/* Punjab */}
      <meta name="geo.region" content="IN-CH" /> {/* Chandigarh */}
      <meta name="geo.placename" content="Chandigarh, Mohali, New Chandigarh" />
      <meta name="geo.position" content="30.7333;76.7794" />
      <meta name="ICBM" content="30.7333, 76.7794" />

      {/* Open Graph / Facebook / LinkedIn / WhatsApp Social Meta Tags */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:site_name" content="DEVRA Architects Chandigarh" />

      {/* Twitter Cards Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@DevraArchitects" />
    </Helmet>
  );
}
