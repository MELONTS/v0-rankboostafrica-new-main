"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section
      id="faqs"
      className="max-w-7xl mx-auto px-4 py-6 sm:py-8"
      aria-labelledby="faq-heading"
    >
      {/* H2 for SEO */}
      <h2
        id="faq-heading"
        className="text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
      >
        Frequently Asked Questions About Our Services
      </h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="seo-services">
          <AccordionTrigger>
            What SEO services does RankBoost Africa offer?
          </AccordionTrigger>
          <AccordionContent>
            RankBoost Africa provides local SEO, regional SEO, and national SEO
            services. This includes technical SEO audits, keyword research,
            on-page optimization, Google Business Profile optimization, and
            long-term SEO strategies designed to increase rankings and leads.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="web-dev-seo">
          <AccordionTrigger>
            Do you offer combined web development and SEO services?
          </AccordionTrigger>
          <AccordionContent>
            Yes. We offer once-off starter packs and maintenance packs that
            include web development and SEO without long-term retainers. These
            are ideal for businesses that want an SEO-ready website from day
            one.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="website-types">
          <AccordionTrigger>
            What types of websites do you build?
          </AccordionTrigger>
          <AccordionContent>
            We build custom WordPress websites, government and institutional
            websites, and Shopify eCommerce websites. All sites are
            mobile-friendly, fast, secure, and optimized for search engines.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="maintenance">
          <AccordionTrigger>
            Do you provide website maintenance and ongoing SEO support?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Our maintenance services include performance monitoring,
            updates, security hardening, technical SEO improvements, and ongoing
            optimization to ensure your site continues to rank and convert.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="get-started">
          <AccordionTrigger>
            How do I get started with RankBoost Africa?
          </AccordionTrigger>
          <AccordionContent>
            Simply select a service and submit an enquiry through our contact
            form. The selected service is automatically sent to our team so we
            can respond with accurate pricing, timelines, and next steps.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
