"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ContactForm } from "@/components/contact-form"

const navLinks = [
  { href: "#services", label: "Digital Market" },
  { href: "#seo", label: "Search" },
  { href: "#web-development", label: "Web Development" },
  { href: "#hosting", label: "Hosting" },
  { href: "#content", label: "Content" },
  { href: "#about", label: "About" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Determine active section
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
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border mt-1"
          : "bg-transparent mt-1"
      }`}
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
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-border bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary"
                  }`}
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <ContactForm
                  trigger={
                    <Button className="w-full active:scale-95 transition-transform" size="sm">
                      Contact Us
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
