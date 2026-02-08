'use client';

import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  linkTo?: string
  onClick?: () => void
}

export function Logo({ className = "", size = "md", linkTo = "/", onClick }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  }

  const content = (
    <span className={`font-bold tracking-tight ${sizeClasses[size]} ${className}`}>
      <span className="text-primary">RankBoost</span>
      <span className="text-foreground">Africa</span>
    </span>
  )

  if (linkTo) {
    return (
      <Link href={linkTo} onClick={onClick} className="inline-block">
        {content}
      </Link>
    )
  }

  return content
}
