"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function TrustpilotBanner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem("trustpilot-dismissed")
      if (dismissed === "true") {
        setIsVisible(false)
      }
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("trustpilot-dismissed", "true")
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4 py-2 sm:py-2.5">
          {/* TrustBox widget */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <div
              className="trustpilot-widget"
              data-locale="en-US"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="69ba50175aa0a9b17480c20f"
              data-style-height="28px"
              data-style-width="100%"
              data-token="1d991c20-52c9-484b-973a-cd5b9e5a22a7"
            >
              <a
                href="https://www.trustpilot.com/review/rankboost.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-xs sm:text-sm font-medium"
              >
                Review us on Trustpilot
              </a>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1.5 sm:p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label="Close Trustpilot banner"
          >
            <X className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </div>
  )
}
