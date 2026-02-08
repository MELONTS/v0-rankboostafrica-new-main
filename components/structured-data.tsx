export function StructuredData() {
  const baseUrl = "https://www.rankboost.africa"
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "RankBoost Africa",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/favicon.png`,
      width: 512,
      height: 512,
    },
    image: `${baseUrl}/favicon.png`,
    description: "Expert digital marketing services including SEO, web development, hosting, and content marketing for SMEs in South Africa.",
    foundingDate: "2025",
    founder: {
      "@type": "Organization",
      name: "Sabe Investment Holdings (Pty) Ltd",
    },
    address: {
      "@type": "PostalAddress",
    streetAddress: "Remote / Online Services",        // ✅ added
    addressLocality: "South Africa",                  // ✅ added
    postalCode: "7460",                               // ✅ added (use real code if available)
    addressRegion: "South Africa",
    addressCountry: "ZA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+27-63-740-9880",
        contactType: "customer service",
        email: "info@rankboost.africa",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+27-63-740-9880",
        contactType: "service",
        email: "service@rankboost.africa",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [],
  }

  // LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#localbusiness`,
  name: "RankBoost Africa",
  url: baseUrl,
  image: `${baseUrl}/favicon.png`,
  description:
    "Professional digital marketing agency offering SEO, web development, web hosting, and content marketing services.",
  priceRange: "$$",

  // ✅ ADD THIS (top-level telephone – REQUIRED by Google)
  telephone: "+27-63-740-9880",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Remote / Online Services",
    addressLocality: "South Africa",
    postalCode: "7460",
    addressRegion: "South Africa",
    addressCountry: "ZA",
  },

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+27-63-740-9880",
      contactType: "customer service",
      email: "info@rankboost.africa",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+27-63-740-9880",
      contactType: "service",
      email: "service@rankboost.africa",
      availableLanguage: ["English"],
    },
  ],

  sameAs: [],

  geo: {
    "@type": "GeoCoordinates",
    latitude: "-26.2041",
    longitude: "28.0473",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],

  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
}

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "RankBoost Africa",
    description: "Expert digital marketing services for SMEs in South Africa",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-ZA",
  }

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "RankBoost Africa | SEO, Web Development & Hosting Experts",
    description: "Grow your rankings with expert SEO, web development, hosting, and copywriting services. Get ranked higher and drive real results.",
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/favicon.png`,
    },
    datePublished: "2026-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: "en-ZA",
  }

  // SEO Service Schema
  const seoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#seo-service`,
    serviceType: "Search Engine Optimization",
    name: "SEO Services",
    description: "Professional SEO services including technical audits, on-page optimization, local SEO, and keyword research to improve your website rankings on Google.",
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO Audits",
            description: "Comprehensive technical SEO audits to identify and fix issues affecting your search rankings.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "On-Page SEO Optimization",
            description: "Optimize your website content, meta tags, and structure for better search engine visibility.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local, Regional, National SEO",
            description: "Improve your local search presence and Google Business Profile optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Keyword Research & Strategy",
            description: "Data-driven keyword research and SEO strategy development.",
          },
        },
      ],
    },
    url: `${baseUrl}/#seo`,
  }

  // Web Development Service Schema
  const webDevServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#webdev-service`,
    serviceType: "Web Development",
    name: "Web Development Services",
    description: "Professional website development services including WordPress, Shopify, responsive design, and performance optimization.",
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom WordPress Design",
            description: "Bespoke WordPress website design and development tailored to your brand.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Development",
            description: "Shopify and WooCommerce e-commerce website development.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Responsive Mobile-First Design",
            description: "Mobile-optimized websites that look great on all devices.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Performance Optimization",
            description: "Speed optimization and Core Web Vitals improvements.",
          },
        },
      ],
    },
    url: `${baseUrl}/#web-development`,
  }

  // Web Hosting Service Schema
  const hostingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#hosting-service`,
    serviceType: "Web Hosting",
    name: "Web Hosting Services",
    description: "Reliable managed web hosting services including WordPress hosting, SSL certificates, daily backups, and professional email hosting.",
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Hosting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed WordPress Hosting",
            description: "Fully managed WordPress hosting with automatic updates and security.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SSL Certificates",
            description: "Free SSL certificates for secure HTTPS connections.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Daily Automated Backups",
            description: "Automatic daily backups with easy restore options.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Email Hosting",
            description: "Business email hosting with your domain name.",
          },
        },
      ],
    },
    url: `${baseUrl}/#hosting`,
  }

  // Content Marketing Service Schema
  const contentServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#content-service`,
    serviceType: "Content Marketing",
    name: "Content Marketing Services",
    description: "Professional content marketing services including SEO content writing, blog management, social media strategy, and email marketing.",
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Content Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO-Optimized Content",
            description: "Professionally written content optimized for search engines.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Blog Writing & Management",
            description: "Regular blog content creation and management services.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Content Strategy",
            description: "Strategic social media content planning and creation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Email Marketing Campaigns",
            description: "Effective email marketing campaign design and management.",
          },
        },
      ],
    },
    url: `${baseUrl}/#content`,
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO Services",
        item: `${baseUrl}/#seo`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Web Development",
        item: `${baseUrl}/#web-development`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Web Hosting",
        item: `${baseUrl}/#hosting`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Content Marketing",
        item: `${baseUrl}/#content`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "About Us",
        item: `${baseUrl}/#about`,
      },
    ],
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What SEO services does RankBoost Africa offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RankBoost Africa offers comprehensive SEO services including technical SEO audits, on-page optimization, local SEO, keyword research, and link building strategies to help your business rank higher on Google.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer web development services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide professional web development services including custom WordPress design, Shopify e-commerce development, responsive mobile-first design, and website performance optimization.",
        },
      },
      {
        "@type": "Question",
        name: "What web hosting services are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer managed WordPress hosting, SSL certificates, daily automated backups, and professional email hosting with 99.9% uptime guarantee.",
        },
      },
      {
        "@type": "Question",
        name: "Where is RankBoost Africa located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RankBoost Africa is a South African digital marketing agency serving clients throughout South Africa and across the African continent.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hostingServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
