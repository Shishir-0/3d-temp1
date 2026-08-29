import React from "react";

interface SEOHeadProps {
  studioName?: string;
  description?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  studioName = "ATELIER NORTH",
  description = "A contemporary architectural and interior design studio shaping spaces through material, light and proportion.",
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitectureFirm",
    name: studioName,
    description: description,
    url: "https://atelier-north.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Limmatquai 82",
      addressLocality: "Zurich",
      postalCode: "8001",
      addressCountry: "CH",
    },
    knowsAbout: [
      "Architecture",
      "Interior Architecture",
      "Spatial Design",
      "Luxury Residential Design",
      "3D Architectural Visualization",
    ],
  };

  return (
    <script
      type="application/ld+json"
      children={JSON.stringify(jsonLd)}
    />
  );
};
