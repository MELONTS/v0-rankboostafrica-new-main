"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  value: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, duration = 2000, className = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateValue()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateValue = () => {
    // Extract numeric value and suffix
    const numericMatch = value.match(/^([\d.]+)(.*)$/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const targetNum = parseFloat(numericMatch[1])
    const suffix = numericMatch[2]
    const isDecimal = numericMatch[1].includes(".")
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = targetNum * easeOut

      if (isDecimal) {
        setDisplayValue(currentValue.toFixed(1) + suffix)
      } else {
        setDisplayValue(Math.floor(currentValue) + suffix)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
