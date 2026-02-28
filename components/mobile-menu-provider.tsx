"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

interface MobileMenuContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const MobileMenuContext = createContext<MobileMenuContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
})

export function useMobileMenu() {
  return useContext(MobileMenuContext)
}

export const DRAWER_WIDTH = 280

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  useEffect(() => {
    setMounted(true)
  }, [])

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <MobileMenuContext.Provider value={{ isOpen, open, close, toggle }}>
      {/* Backdrop */}
      {mounted && (
        <div
          className={`fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out lg:hidden ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Push wrapper -- shifts all page content when drawer is open */}
      <div
        className={`min-h-screen transition-transform duration-300 ease-in-out ${
          mounted && isOpen ? "-translate-x-[280px]" : "translate-x-0"
        }`}
      >
        {children}
      </div>
    </MobileMenuContext.Provider>
  )
}
