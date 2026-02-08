import { Target, TrendingUp, Building2, Wallet, Shield, Users } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "SEO-First Approach",
    description:
      "Every solution we build is optimised for search engines from the ground up, ensuring maximum visibility.",
  },
  {
    icon: TrendingUp,
    title: "Results & Data-Driven",
    description:
      "We focus on measurable outcomes that directly impact your bottom line, not vanity metrics.",
  },
  {
    icon: Building2,
    title: "SME & E-commerce Focus",
    description:
      "Specialised expertise in helping small and medium businesses compete with larger competitors online.",
  },
  {
    icon: Wallet,
    title: "Affordable & Scalable",
    description:
      "Flexible pricing and solutions that grow with your business, from startup to enterprise.",
  },
  {
    icon: Shield,
    title: "Trusted Partnership",
    description:
      "Transparent communication, ethical practices, and a commitment to your long-term success.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "A responsive team always ready to help, ensuring your digital presence never misses a beat.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Why Choose RankBoost Africa?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Partner with a team that understands your business goals and delivers solutions that
            drive real growth.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-4 sm:p-6 md:p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-3 sm:mb-5 md:mb-6">
                <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
