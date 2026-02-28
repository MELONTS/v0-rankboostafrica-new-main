"use client"

import React, { createContext, useContext, useState } from "react"

type MobileMenuContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined)

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export function useMobileMenu() {
  const context = useContext(MobileMenuContext)
  if (!context) {
    return { isOpen: false, setIsOpen: () => {} } as MobileMenuContextType
  }
  return context
}

export const DRAWER_WIDTH = 280
