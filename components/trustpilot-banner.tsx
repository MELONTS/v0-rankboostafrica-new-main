"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

export function TrustpilotBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isDismissed, setIsDismissed] = useState(false)
  const scrollCountRef = useRef(0)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    // Check if already dismissed in this session
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem("trustpilot-dismissed")
      if (dismissed === "true") {
        setIsDismissed(true)
        setIsVisible(false)
      }
    }
  }, [])

  useEffect(() => {
    if (isDismissed) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current)

      // Count significant scrolls (more than 50px movement)
      if (scrollDelta > 50) {
        scrollCountRef.current += 1
        lastScrollYRef.current = currentScrollY

        // Hide after 3 scrolls
        if (scrollCountRef.current >= 3) {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("trustpilot-dismissed", "true")
    }
  }

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-background border-t border-border shadow-lg transition-transform duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* TrustBox widget - Review Collector */}
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="69ba50175aa0a9b17480c20f"
            data-style-height="52px"
            data-style-width="100%"
            data-token="1d991c20-52c9-484b-973a-cd5b9e5a22a7"
          >
            <a
              href="https://www.trustpilot.com/review/rankboost.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              Review us on Trustpilot
            </a>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Close Trustpilot banner"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  )
}
