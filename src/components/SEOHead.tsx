import React from "react";

interface SEOHeadProps {
  studioName?: string;
  studioDescriptor?: string;
  description?: string;
  email?: string;
  address?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  studioName = "STUDIO NAME",
  studioDescriptor = "ARCHITECTURE & INTERIORS",
  description = "A contemporary architectural and interior design practice shaping spaces through material, light and proportion.",
  email = "inquiries@yourstudio.com",
  address = "Global Practice",
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitectureFirm",
    name: studioName,
    alternateName: studioDescriptor,
    description: description,
    email: email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
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
