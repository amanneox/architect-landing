import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createUISlice, UISlice } from "./slices/uiSlice";

export type StoreState = UISlice;

// Only wrap with devtools in development to avoid bundling overhead in production
const storeCreator = (...args: Parameters<typeof createUISlice>) => ({
  ...createUISlice(...args),
});

export const useStore =
  process.env.NODE_ENV === "development"
    ? create<StoreState>()(
        devtools(storeCreator, { name: "architect-store" })
      )
    : create<StoreState>()(storeCreator);

// ============================
// Individual atomic hooks
// ============================

// UI State Hooks
export const useIsMobileMenuOpen = () => useStore((state) => state.isMobileMenuOpen);
export const useSetMobileMenuOpen = () => useStore((state) => state.setMobileMenuOpen);
export const useIsScrolled = () => useStore((state) => state.isScrolled);
export const useSetScrolled = () => useStore((state) => state.setScrolled);
export const useActiveSection = () => useStore((state) => state.activeSection);
export const useSetActiveSection = () => useStore((state) => state.setActiveSection);
