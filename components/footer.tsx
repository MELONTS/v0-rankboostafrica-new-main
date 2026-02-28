import Link from "next/link"
import { Mail, MapPin, Instagram } from "lucide-react"
import { Logo } from "@/components/logo"

const serviceLinks = [
  { href: "#seo", label: "SEO Services" },
  { href: "#web-development", label: "Web Development" },
  { href: "#hosting", label: "Web Hosting" },
  { href: "#content", label: "Content Marketing" },
]

const emailLinks = [
  { email: "info@rankboost.africa", label: "General Inquiries" },
  { email: "service@rankboost.africa", label: "Service Support" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <Logo size="md" />
            </div>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed">
              Your trusted digital marketing partner. We help SMEs and related governmental agencies grow their online presence
              through expert SEO, web development, and content strategies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/hub"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Marketing Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              {emailLinks.map((link) => (
                <li key={link.email}>
                  <a
                    href={`mailto:${link.email}`}
                    className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors text-sm group"
                  >
                    <Mail className="w-4 h-4 text-primary shrink-0 flex-none" />
                    <span>
                      <span className="block text-background/50 text-xs">{link.label}</span>
                      {link.email}
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>De La Fontaine Ave, Monte Vista, Cape Town, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-background/50 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} RankBoost Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-background/50 text-xs sm:text-sm text-center md:text-right">
              Digital Marketing | SEO | Web Development | Hosting
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/sabeconnect/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow RankBoost Africa on Instagram"
                className="text-background/50 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/sabeconnect/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow RankBoost Africa on Facebook"
                className="text-background/50 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
