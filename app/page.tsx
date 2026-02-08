import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { ServicesTable } from "@/components/services-table"
import { SEOSection } from "@/components/seo-section"
import { WebDevSection } from "@/components/web-dev-section"
import { HostingSection } from "@/components/hosting-section"
import { ContentSection } from "@/components/content-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

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
      <SEOSection />
      <WebDevSection />
      <HostingSection />
      <ContentSection />
      <AboutSection />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  )
}
