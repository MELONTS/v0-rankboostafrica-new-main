"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ContactForm } from "@/components/contact-form"
import { useMobileMenu } from "@/components/mobile-menu-provider"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "#seo", label: "SEO" },
  { href: "#web-development", label: "Web Dev" },
  { href: "#hosting", label: "Hosting" },
  { href: "#content", label: "Content" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { isOpen, toggle, close } = useMobileMenu()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      let current = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const triggerHaptic = () => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(15)
    }
  }

  const handleNavClick = () => {
    triggerHaptic()
    close()
  }

  return (
    <>
      {/* Header bar -- moves with page content via the push wrapper */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border mt-1"
            : "bg-transparent mt-1"
        } ${isOpen ? "-translate-x-[280px]" : "translate-x-0"}`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
            <Logo size="md" onClick={triggerHaptic} />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={triggerHaptic}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <ContactForm
                trigger={
                  <Button size="sm" className="active:scale-95 transition-transform">
                    Contact Us
                  </Button>
                }
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-foreground active:scale-95 transition-transform"
              onClick={() => {
                triggerHaptic()
                toggle()
              }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Slide-in drawer panel -- sits outside the push wrapper */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-background border-l border-border flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal={isOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-border shrink-0">
          <span className="text-sm font-semibold text-foreground tracking-wide uppercase">
            Menu
          </span>
          <button
            type="button"
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground active:scale-95 transition-all"
            onClick={() => {
              triggerHaptic()
              close()
            }}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={handleNavClick}
              >
                {link.label}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="px-4 py-4 border-t border-border shrink-0">
          <ContactForm
            trigger={
              <Button className="w-full active:scale-95 transition-transform" size="sm">
                Contact Us
              </Button>
            }
          />
        </div>
      </aside>
    </>
  )
}
