import { StateCreator } from "zustand";

export interface UISlice {
  // Navigation state
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Scroll state
  isScrolled: boolean;
  setScrolled: (scrolled: boolean) => void;

  // Active section for scroll spy
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const createUISlice: StateCreator<UISlice> = (set) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),

  isScrolled: false,
  setScrolled: (scrolled) => set({ isScrolled: scrolled }),

  activeSection: "hero",
  setActiveSection: (section) => set({ activeSection: section }),
});
