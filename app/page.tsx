import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

/* Below-fold sections -- code-split to reduce initial JS bundle */
const ServicesTable = dynamic(() => import("@/components/services-table").then(m => ({ default: m.ServicesTable })), { ssr: true })
const WhyChooseUs = dynamic(() => import("@/components/why-choose-us").then(m => ({ default: m.WhyChooseUs })), { ssr: true })
const RecentWorkCarousel = dynamic(() => import("@/components/recent-work-carousel").then(m => ({ default: m.RecentWorkCarousel })), { ssr: true })
const SEOSection = dynamic(() => import("@/components/seo-section").then(m => ({ default: m.SEOSection })), { ssr: true })
const WebDevSection = dynamic(() => import("@/components/web-dev-section").then(m => ({ default: m.WebDevSection })), { ssr: true })
const HostingSection = dynamic(() => import("@/components/hosting-section").then(m => ({ default: m.HostingSection })), { ssr: true })
const ContentSection = dynamic(() => import("@/components/content-section").then(m => ({ default: m.ContentSection })), { ssr: true })
const AboutSection = dynamic(() => import("@/components/about-section").then(m => ({ default: m.AboutSection })), { ssr: true })
const CTASection = dynamic(() => import("@/components/cta-section").then(m => ({ default: m.CTASection })), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <div id="services" className="scroll-mt-16">
        <ServicesOverview />
      </div>
      <ServicesTable />
      <WhyChooseUs />
      <RecentWorkCarousel />
      <SEOSection />
      <WebDevSection />
      <HostingSection />
      <ContentSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
