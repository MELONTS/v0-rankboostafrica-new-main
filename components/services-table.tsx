"use client"

import React, { useState, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { 
  Search, 
  Code, 
  MapPin, 
  Globe, 
  Building, 
  ShoppingCart,
  Landmark,
  ArrowRight,
  Check,
  Package,
  Wrench,
  Rocket
} from "lucide-react"

type ServiceCategory = "all" | "seo" | "web-development" | "service-packs"

interface ServiceItem {
  id: string
  category: "seo" | "web-development" | "service-packs"
  categoryLabel: string
  name: string
  bestFor: string
  features: string[]
  icon: React.ElementType
  serviceValue: string
  subject: string
  message: string
}

const services: ServiceItem[] = [
  // SEO Services
  {
    id: "local-seo",
    category: "seo",
    categoryLabel: "SEO Services",
    name: "Local SEO",
    bestFor: "Small businesses targeting local customers within a specific city or region",
    features: [
      "Google Business Profile Optimization",
      "Local Citations & Directory Listings",
      "Local Keyword Research",
      "Review Management Strategy",
      "Location-Based Content"
    ],
    icon: MapPin,
    serviceValue: "seo",
    subject: "Local SEO Services Inquiry",
    message: `Hi RankBoost Africa,

I am interested in your Local SEO Services for my business. I would like to improve my local search visibility and attract more customers in my area.

Please contact me to discuss Local SEO options.

Thank you!`
  },
  {
    id: "regional-seo",
    category: "seo",
    categoryLabel: "SEO Services",
    name: "Regional SEO",
    bestFor: "Businesses expanding across multiple cities or provinces",
    features: [
      "Multi-Location SEO Strategy",
      "Regional Keyword Targeting",
      "Geo-Targeted Content Creation",
      "Regional Link Building",
      "Competitor Analysis"
    ],
    icon: Globe,
    serviceValue: "seo",
    subject: "Regional SEO Services Inquiry",
    message: `Hi RankBoost Africa,

I am interested in your Regional SEO Services. My business operates across multiple locations and I need help with regional search visibility.

Please contact me to discuss Regional SEO options.

Thank you!`
  },
  {
    id: "national-seo",
    category: "seo",
    categoryLabel: "SEO Services",
    name: "National SEO",
    bestFor: "Enterprises and brands targeting nationwide visibility",
    features: [
      "Comprehensive SEO Audit",
      "National Keyword Strategy",
      "Authority Link Building",
      "Content Marketing Integration",
      "Technical SEO Optimization"
    ],
    icon: Building,
    serviceValue: "seo",
    subject: "National SEO Services Inquiry",
    message: `Hi RankBoost Africa,

I am interested in your National SEO Services. I need help establishing nationwide search visibility for my brand.

Please contact me to discuss National SEO options.

Thank you!`
  },
  // Web Development Services
  {
    id: "wordpress-websites",
    category: "web-development",
    categoryLabel: "Web Development",
    name: "Custom WordPress Websites",
    bestFor: "SMEs, blogs, portfolios, and content-driven websites",
    features: [
      "Custom Theme Development",
      "Mobile-Responsive Design",
      "SEO-Friendly Structure",
      "Plugin Integration",
      "Content Management Training"
    ],
    icon: Code,
    serviceValue: "web-development",
    subject: "WordPress Website Development Inquiry",
    message: `Hi RankBoost Africa,

I am interested in your Custom WordPress Website Development services. I need a professional website for my business.

Please contact me to discuss WordPress development options.

Thank you!`
  },
  {
    id: "government-websites",
    category: "web-development",
    categoryLabel: "Web Development",
    name: "Government / Institutional Websites",
    bestFor: "Government agencies, NGOs, educational institutions",
    features: [
      "WCAG Accessibility Compliance",
      "High Security Standards",
      "Document Management System",
      "Multi-Language Support",
      "Scalable Infrastructure"
    ],
    icon: Landmark,
    serviceValue: "web-development",
    subject: "Government/Institutional Website Inquiry",
    message: `Hi RankBoost Africa,

I am interested in your Government/Institutional Website Development services. We need a secure, accessible, and compliant website.

Please contact me to discuss our requirements.

Thank you!`
  },
  {
    id: "shopify-websites",
    category: "web-development",
    categoryLabel: "Web Development",
    name: "Shopify (E-commerce) Websites",
    bestFor: "Online retailers and businesses selling products online",
    features: [
      "Custom Shopify Theme Design",
      "Product Catalog Setup",
      "Payment Gateway Integration",
      "Inventory Management",
      "Conversion Rate Optimization"
    ],
    icon: ShoppingCart,
    serviceValue: "web-development",
    subject: "Shopify E-commerce Website Inquiry",
    message: `Hi RankBoost Africa,

I am interested in your Shopify E-commerce Website Development services. I want to sell products online and need a professional online store.

Please contact me to discuss Shopify development options.

Thank you!`
  },
  // Service Packs
  {
    id: "starter-pack",
    category: "service-packs",
    categoryLabel: "Service Packs",
    name: "Once-Off Starter Pack",
    bestFor: "New businesses needing a complete digital foundation without ongoing commitments",
    features: [
      "Professional Website Development",
      "Initial SEO Setup & Optimization",
      "Google Business Profile Setup",
      "Basic Content Creation",
      "30-Day Support Included"
    ],
    icon: Rocket,
    serviceValue: "general",
    subject: "Once-Off Starter Pack Inquiry",
    message: `Hi RankBoost Africa,

I am interested in your Once-Off Starter Pack. I am a new business looking for a complete digital foundation including website development and initial SEO setup.

Please contact me to discuss the Starter Pack options.

Thank you!`
  },
  {
    id: "maintenance-pack",
    category: "service-packs",
    categoryLabel: "Service Packs",
    name: "Maintenance Pack",
    bestFor: "Established businesses needing ongoing website maintenance and SEO support",
    features: [
      "Website Updates & Maintenance",
      "Ongoing SEO Optimization",
      "Monthly Performance Reports",
      "Security Monitoring & Updates",
      "Priority Technical Support"
    ],
    icon: Wrench,
    serviceValue: "general",
    subject: "Maintenance Pack Inquiry",
    message: `Hi RankBoost Africa,

I am interested in your Maintenance Pack. I have an existing website and need ongoing maintenance and SEO support.

Please contact me to discuss the Maintenance Pack options.

Thank you!`
  },
]

const filterOptions: { value: ServiceCategory; label: string; icon: React.ElementType }[] = [
  { value: "all", label: "All Services", icon: Package },
  { value: "seo", label: "SEO Services", icon: Search },
  { value: "web-development", label: "Web Development", icon: Code },
  { value: "service-packs", label: "Service Packs", icon: Package },
]

export function ServicesTable() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>("all")

  const triggerHaptic = useCallback(() => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(10)
    }
  }, [])

  const handleFilterChange = useCallback((filter: ServiceCategory) => {
    setActiveFilter(filter)
    triggerHaptic()
  }, [triggerHaptic])

  const visibilityMap = useMemo(() => {
    return services.reduce((acc, service) => {
      acc[service.id] = activeFilter === "all" || service.category === activeFilter
      return acc
    }, {} as Record<string, boolean>)
  }, [activeFilter])

  return (
    <section 
      id="services-comparison" 
      className="py-10 sm:py-14 md:py-16 lg:py-20 scroll-mt-16 will-change-scroll"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <header className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="text-primary font-semibold text-[10px] sm:text-xs tracking-widest uppercase mb-2 block">
            Compare Our Services
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 text-balance leading-tight">
            Find the Right Service for Your Business
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Compare our SEO, Web Development, and Service Pack solutions to find the perfect fit.
          </p>
        </header>

        {/* Filter Buttons */}
        <nav 
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-6 md:mb-8" 
          role="tablist" 
          aria-label="Filter services by category"
        >
          {filterOptions.map((option) => {
            const Icon = option.icon
            return (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange(option.value)}
                role="tab"
                aria-selected={activeFilter === option.value}
                aria-controls="services-table"
                className={`text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 h-7 sm:h-8 md:h-9 transition-all duration-200 ease-out ${
                  activeFilter !== option.value ? "bg-transparent hover:bg-secondary/50" : ""
                }`}
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
                <span className="hidden xs:inline sm:inline">{option.label}</span>
                <span className="inline xs:hidden sm:hidden">
                  {option.value === "all" ? "All" : option.value === "service-packs" ? "Packs" : option.label.split(" ")[0]}
                </span>
              </Button>
            )
          })}
        </nav>

        {/* Services Table - Desktop & Large Tablets */}
        <div className="hidden lg:block overflow-hidden rounded-xl border border-border shadow-sm">
          <div className="overflow-x-auto">
            <table 
              id="services-table"
              className="w-full border-collapse min-w-[900px]"
              role="tabpanel"
              aria-label="Services comparison table"
            >
              <caption className="sr-only">
                RankBoost Africa Services Comparison - SEO, Web Development, and Service Packs
              </caption>
              <thead>
                <tr className="bg-secondary/60">
                  <th scope="col" className="text-left p-3 lg:p-4 font-semibold text-xs lg:text-sm w-[15%]">Category</th>
                  <th scope="col" className="text-left p-3 lg:p-4 font-semibold text-xs lg:text-sm w-[18%]">Service Name</th>
                  <th scope="col" className="text-left p-3 lg:p-4 font-semibold text-xs lg:text-sm w-[25%]">Best For</th>
                  <th scope="col" className="text-left p-3 lg:p-4 font-semibold text-xs lg:text-sm w-[30%]">Key Features</th>
                  <th scope="col" className="text-center p-3 lg:p-4 font-semibold text-xs lg:text-sm w-[12%]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {services.map((service) => {
                  const Icon = service.icon
                  const isVisible = visibilityMap[service.id]
                  
                  return (
                    <tr
                      key={service.id}
                      className={`bg-card hover:bg-secondary/20 transition-colors duration-150 ${
                        isVisible ? "" : "hidden"
                      }`}
                      data-category={service.category}
                    >
                      <td className="p-3 lg:p-4">
                        <span className="inline-flex items-center gap-1.5 text-xs lg:text-sm">
                          {service.category === "seo" && <Search className="w-3.5 h-3.5 text-primary" />}
                          {service.category === "web-development" && <Code className="w-3.5 h-3.5 text-primary" />}
                          {service.category === "service-packs" && <Package className="w-3.5 h-3.5 text-primary" />}
                          <span className="text-muted-foreground">{service.categoryLabel}</span>
                        </span>
                      </td>
                      <td className="p-3 lg:p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                          </div>
                          <span className="font-medium text-xs lg:text-sm">{service.name}</span>
                        </div>
                      </td>
                      <td className="p-3 lg:p-4 text-xs lg:text-sm text-muted-foreground">
                        {service.bestFor}
                      </td>
                      <td className="p-3 lg:p-4">
                        <ul className="space-y-0.5 lg:space-y-1">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-1.5 text-[10px] lg:text-xs text-muted-foreground">
                              <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-[10px] lg:text-xs text-primary font-medium">
                              +{service.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </td>
                      <td className="p-3 lg:p-4 text-center">
                        <ContactForm
                          defaultService={service.serviceValue}
                          defaultSubject={service.subject}
                          defaultMessage={service.message}
                          trigger={
                            <Button 
                              size="sm" 
                              className="group text-[10px] lg:text-xs h-7 lg:h-8 px-2 lg:px-3 transition-transform duration-150 active:scale-95"
                            >
                              Get Started
                              <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-150" />
                            </Button>
                          }
                        />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Services Cards - Mobile & Tablets */}
        <div 
          className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" 
          role="tabpanel" 
          aria-label="Services list"
        >
          {services.map((service) => {
            const Icon = service.icon
            const isVisible = visibilityMap[service.id]
            
            return (
              <article
                key={service.id}
                className={`border border-border rounded-xl p-3 sm:p-4 bg-card hover:shadow-md hover:border-primary/20 transition-all duration-200 ease-out ${
                  isVisible ? "" : "hidden"
                }`}
                data-category={service.category}
                itemScope
                itemType="https://schema.org/Service"
              >
                <meta itemProp="provider" content="RankBoost Africa" />
                <meta itemProp="areaServed" content="South Africa" />
                
                {/* Card Header */}
                <div className="flex items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base leading-tight truncate" itemProp="name">
                      {service.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
                      {service.category === "seo" && <Search className="w-2.5 h-2.5" />}
                      {service.category === "web-development" && <Code className="w-2.5 h-2.5" />}
                      {service.category === "service-packs" && <Package className="w-2.5 h-2.5" />}
                      {service.categoryLabel}
                    </span>
                  </div>
                </div>
                
                {/* Best For */}
                <p className="text-xs sm:text-sm text-muted-foreground mb-2.5 sm:mb-3 leading-relaxed" itemProp="description">
                  <span className="font-medium text-foreground">Best for:</span> {service.bestFor}
                </p>
                
                {/* Features */}
                <ul className="grid grid-cols-1 gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-[10px] sm:text-xs text-primary font-medium pl-4">
                      +{service.features.length - 4} more
                    </li>
                  )}
                </ul>
                
                {/* CTA */}
                <ContactForm
                  defaultService={service.serviceValue}
                  defaultSubject={service.subject}
                  defaultMessage={service.message}
                  trigger={
                    <Button 
                      size="sm" 
                      className="w-full group text-xs sm:text-sm h-8 sm:h-9 transition-transform duration-150 active:scale-[0.98]"
                    >
                      Request This Service
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                    </Button>
                  }
                />
              </article>
            )
          })}
        </div>

        {/* Schema.org JSON-LD for Services Table */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "RankBoost Africa Services",
              description: "Compare SEO, Web Development, and Service Pack solutions offered by RankBoost Africa",
              url: "https://www.rankboost.africa/#services-comparison",
              numberOfItems: services.length,
              itemListElement: services.map((service, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Service",
                  "@id": `https://www.rankboost.africa/#${service.id}`,
                  name: service.name,
                  description: service.bestFor,
                  serviceType: service.categoryLabel,
                  provider: {
                    "@type": "Organization",
                    name: "RankBoost Africa",
                    url: "https://www.rankboost.africa"
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "South Africa"
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: `${service.name} Features`,
                    itemListElement: service.features.map((feature, fIndex) => ({
                      "@type": "OfferCatalogItem",
                      position: fIndex + 1,
                      name: feature
                    }))
                  }
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
}
