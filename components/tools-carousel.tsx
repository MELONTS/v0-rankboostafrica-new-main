"use client"

interface Tool {
  name: string
  logo: React.ReactNode
}

interface ToolsCarouselProps {
  tools: Tool[]
  label?: string
}

export function ToolsCarousel({ tools, label }: ToolsCarouselProps) {
  // Duplicate list for seamless loop -- each tool appears exactly once per copy
  const items = [...tools, ...tools]

  return (
    <div className="w-full overflow-hidden py-6 sm:py-8">
      {label && (
        <p className="text-center text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5 tracking-wide uppercase font-medium">
          {label}
        </p>
      )}
      <div className="relative mx-auto max-w-5xl">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex items-center justify-center">
          <div
            className="flex items-center gap-10 sm:gap-14 md:gap-16 animate-scroll-left"
            style={{ width: "max-content" }}
          >
            {items.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="flex flex-col items-center gap-2 sm:gap-2.5 flex-shrink-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {tool.logo}
                </div>
                <span className="text-[10px] sm:text-xs text-muted-foreground font-medium whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ──────────────────── SEO Tool Logos ──────────────────── */

const sz = "w-full h-full"

export const seoTools: Tool[] = [
  {
    name: "SEMrush",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <rect width="512" height="512" rx="80" fill="#FF642D" />
        <path d="M156 148h56v216h-56V148zm72 72h56v144h-56V220zm72-36h56v180h-56V184z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <path d="M393 450c32.6 0 59-26.4 59-59V121c0-32.6-26.4-59-59-59s-59 26.4-59 59v270c0 32.6 26.4 59 59 59z" fill="#F9AB00" />
        <path d="M256 450c32.6 0 59-26.4 59-59V256c0-32.6-26.4-59-59-59s-59 26.4-59 59v135c0 32.6 26.4 59 59 59z" fill="#E37400" />
        <circle cx="119" cy="391" r="59" fill="#E37400" />
      </svg>
    ),
  },
  {
    name: "Search Console",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <path d="M256 48L48 160v192l208 112 208-112V160L256 48z" fill="#4285F4" />
        <path d="M256 48L48 160l208 112 208-112L256 48z" fill="#669DF6" />
        <path d="M48 160v192l208 112V272L48 160z" fill="#185ABC" />
        <path d="M256 272v192l208-112V160L256 272z" fill="#4285F4" />
        <circle cx="256" cy="240" r="48" fill="#fff" />
        <path d="M244 216v48l34-24-34-24z" fill="#4285F4" />
      </svg>
    ),
  },
  {
    name: "Ahrefs",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <rect width="512" height="512" rx="80" fill="#1B3A5C" />
        <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 196c-37.6 0-68-30.4-68-68s30.4-68 68-68 68 30.4 68 68-30.4 68-68 68z" fill="#FF8C2E" />
        <circle cx="256" cy="256" r="28" fill="#FF8C2E" />
      </svg>
    ),
  },
  {
    name: "Google Ads",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <path d="M346 432L228 227l82-47 118 205-82 47z" fill="#4285F4" />
        <path d="M166 432L48 227l82-47 118 205-82 47z" fill="#FBBC04" />
        <circle cx="130" cy="384" r="60" fill="#34A853" />
      </svg>
    ),
  },
  {
    name: "Tag Manager",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <path d="M296 56l-88 80 64 64 152-112L296 56z" fill="#8AB4F8" />
        <path d="M424 88L272 200l64 64 120-120c16-16 16-40 0-56h-32z" fill="#4285F4" />
        <path d="M272 200L120 352l64 64L336 264l-64-64z" fill="#8AB4F8" />
        <path d="M120 352L56 416c-16 16-16 40 0 56s40 16 56 0l72-72-64-48z" fill="#246FDB" />
        <circle cx="120" cy="408" r="40" fill="#246FDB" />
        <circle cx="120" cy="408" r="20" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Screaming Frog",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <rect width="512" height="512" rx="80" fill="#6CB33F" />
        <ellipse cx="184" cy="208" rx="44" ry="48" fill="#fff" />
        <ellipse cx="328" cy="208" rx="44" ry="48" fill="#fff" />
        <circle cx="196" cy="200" r="18" fill="#2D2D2D" />
        <circle cx="340" cy="200" r="18" fill="#2D2D2D" />
        <path d="M168 316c0 0 36 52 88 52s88-52 88-52" stroke="#fff" strokeWidth="14" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Google Business",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <path d="M96 224h320v208H96V224z" fill="#4285F4" />
        <path d="M96 224l160-120 160 120H96z" fill="#34A853" />
        <rect x="208" y="304" width="96" height="128" rx="8" fill="#FBBC04" />
        <path d="M96 224h320" stroke="#EA4335" strokeWidth="20" strokeLinecap="round" />
        <circle cx="256" cy="224" r="28" fill="#EA4335" />
      </svg>
    ),
  },
]

/* ─────────────── Web Dev Platform Logos ─────────────── */

export const webDevTools: Tool[] = [
  {
    name: "WordPress",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <circle cx="256" cy="256" r="240" fill="#21759B" />
        <path d="M41 256c0 84.4 49 157.2 120 191.6L55.2 180.8C46 203.6 41 229 41 256zm380.4-22.4c0-26.4-9.6-44.8-17.6-59.2-10.8-17.6-21.2-32.4-21.2-50 0-19.6 14.8-37.8 35.8-37.8.9 0 1.8.1 2.8.2C384.4 55 322.4 32 256 32c-88.8 0-167 45.6-212.4 114.6 6 .2 11.6.3 16.2.3 26.4 0 67.2-3.2 67.2-3.2 13.6-.8 15.2 19.2 1.6 20.8 0 0-13.6 1.6-28.8 2.4L209.2 444l56-167.6L235 200.8c-13.6-.8-26.4-2.4-26.4-2.4-13.6-.8-12-21.6 1.6-20.8 0 0 41.6 3.2 66.4 3.2 26.4 0 67.2-3.2 67.2-3.2 13.6-.8 15.2 19.2 1.6 20.8 0 0-13.6 1.6-28.8 2.4l108 321.6 30-99.6c12.8-41.2 22.8-70.8 22.8-96.2z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <path d="M380.8 100.8c-.4-2.8-2.8-4.4-4.8-4.4-2 0-41.2-3.2-41.2-3.2s-27.2-26.8-30.4-30c-3.2-3.2-9.2-2-11.6-1.6-0.4 0-6 1.8-16 4.8-9.6-27.6-26.4-52.8-56-52.8h-2.4C209.2 2 197.2 0 186.8 0c-70.4 0-104 88-114.4 132.8l-49.2 15.2c-15.2 4.8-15.6 5.2-17.6 19.6C4 180.4-32 452 -32 452l303.2 52.4L416 468s-35.2-364.4-35.2-367.2zM280 78l-20.4 6.4c0-4-.4-9.2-1.2-14.8 12 2.4 20 9.2 21.6 8.4zm-38 12l-44 13.6c4.4-16.4 12.4-32.8 28.4-43.6 6 3.2 15.2 12.8 15.6 30zm-26-58.4c2.8 0 5.2.8 7.6 2.4-26.8 12.8-55.6 44.8-67.6 109.2l-34.8 10.8C131.2 112.8 158 31.6 216 31.6z" fill="#95BF47" />
        <path d="M376 96.4c-2 0-41.2-3.2-41.2-3.2s-27.2-26.8-30.4-30c-1.2-1.2-2.8-1.6-4.4-2L272 504.4 416 468s-35.2-364.4-35.2-367.2c-.4-2.8-2.8-4.4-4.8-4.4z" fill="#5E8E3E" />
        <path d="M257.2 176l-19.6 58.4s-17.2-9.2-38.4-9.2c-30.8 0-32.4 19.6-32.4 24.4 0 26.8 69.6 37.2 69.6 100.4 0 49.6-31.6 81.6-74 81.6-51.2 0-77.2-31.6-77.2-31.6l13.6-45.2s27.2 23.2 49.6 23.2c14.8 0 20.8-11.6 20.8-20 0-35.2-57.2-36.8-57.2-94.4 0-48.4 34.8-95.6 105.2-95.6 27.2 0 40 7.6 40 7.6z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <circle cx="256" cy="256" r="240" fill="#000" />
        <path d="M200 160v192M200 160l168 232" stroke="#fff" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="312" y="160" width="0" height="128" stroke="#fff" strokeWidth="32" strokeLinecap="round">
          <animate attributeName="height" from="0" to="128" dur="0.01s" fill="freeze" />
        </rect>
        <line x1="312" y1="160" x2="312" y2="288" stroke="#fff" strokeWidth="32" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "React",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <circle cx="256" cy="256" r="240" fill="#20232A" />
        <g stroke="#61DAFB" strokeWidth="12" fill="none">
          <ellipse cx="256" cy="256" rx="144" ry="56" />
          <ellipse cx="256" cy="256" rx="144" ry="56" transform="rotate(60 256 256)" />
          <ellipse cx="256" cy="256" rx="144" ry="56" transform="rotate(120 256 256)" />
        </g>
        <circle cx="256" cy="256" r="20" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: "WooCommerce",
    logo: (
      <svg viewBox="0 0 512 512" className={sz} aria-hidden="true">
        <rect width="512" height="512" rx="80" fill="#7F54B3" />
        <path d="M88 152c0-17.6 14.4-32 32-32h272c17.6 0 32 14.4 32 32v160c0 17.6-14.4 32-32 32H280l-48 48-48-48H120c-17.6 0-32-14.4-32-32V152z" fill="#fff" />
        <circle cx="188" cy="224" r="20" fill="#7F54B3" />
        <circle cx="268" cy="224" r="20" fill="#7F54B3" />
        <path d="M336 200c0 0 4 48-16 48s-16-48-16-48" stroke="#7F54B3" strokeWidth="12" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
]
