"use client"

import Image from "next/image"

interface Tool {
  name: string
  icon: string
}

interface ToolsCarouselProps {
  tools: Tool[]
  label?: string
}

export function ToolsCarousel({ tools, label }: ToolsCarouselProps) {
  // Duplicate the list so the animation loops seamlessly
  const items = [...tools, ...tools]

  return (
    <div className="w-full overflow-hidden py-6 sm:py-8">
      {label && (
        <p className="text-center text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5 tracking-wide uppercase font-medium">
          {label}
        </p>
      )}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div
          className="flex items-center gap-8 sm:gap-12 md:gap-16 animate-scroll-left"
          style={{
            width: "max-content",
          }}
        >
          {items.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex flex-col items-center gap-2 sm:gap-2.5 flex-shrink-0"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                  fill
                  className="object-contain"
                  sizes="56px"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-medium whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
