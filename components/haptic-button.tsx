"use client"

import React from "react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { forwardRef, type ReactNode } from "react"

interface HapticButtonProps extends ButtonProps {
  children: ReactNode
  hapticIntensity?: "light" | "medium" | "heavy"
}

export const HapticButton = forwardRef<HTMLButtonElement, HapticButtonProps>(
  ({ children, hapticIntensity = "medium", onClick, className, ...props }, ref) => {
    const triggerHaptic = () => {
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        const duration = hapticIntensity === "light" ? 10 : hapticIntensity === "medium" ? 25 : 50
        navigator.vibrate(duration)
      }
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      triggerHaptic()
      onClick?.(e)
    }

    return (
      <Button
        ref={ref}
        onClick={handleClick}
        className={`active:scale-95 transition-transform duration-100 ${className || ""}`}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

HapticButton.displayName = "HapticButton"
