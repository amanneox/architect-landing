import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";
import { createUISlice, UISlice } from "./slices/uiSlice";
import { createContentSlice, ContentSlice } from "./slices/contentSlice";

// Combine all slice types
export type StoreState = UISlice & ContentSlice;

// Create the store with all slices
export const useStore = create<StoreState>()(
  devtools(
    (...args) => ({
      ...createUISlice(...args),
      ...createContentSlice(...args),
    }),
    {
      name: "architect-store",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);

// ============================
// Individual atomic hooks (recommended for performance)
// ============================

// UI State Hooks
export const useIsMobileMenuOpen = () => useStore((state) => state.isMobileMenuOpen);
export const useSetMobileMenuOpen = () => useStore((state) => state.setMobileMenuOpen);
export const useIsScrolled = () => useStore((state) => state.isScrolled);
export const useSetScrolled = () => useStore((state) => state.setScrolled);
export const useHoveredFeature = () => useStore((state) => state.hoveredFeature);
export const useSetHoveredFeature = () => useStore((state) => state.setHoveredFeature);
export const useActiveSection = () => useStore((state) => state.activeSection);
export const useSetActiveSection = () => useStore((state) => state.setActiveSection);

// Content Hooks (using shallow comparison to prevent unnecessary re-renders)
export const useBrand = () => useStore(useShallow((state) => state.brand));
export const useNavItems = () => useStore(useShallow((state) => state.navItems));
export const useHero = () => useStore(useShallow((state) => state.hero));
export const useLogoBar = () => useStore(useShallow((state) => state.logoBar));
export const useRoadmapContent = () => useStore(useShallow((state) => state.roadmap));
export const useQuoteContent = () => useStore(useShallow((state) => state.quote));
export const useFeaturesContent = () => useStore(useShallow((state) => state.features));
export const useRoadmapPageContent = () => useStore(useShallow((state) => state.roadmapPage));
export const useFooterContent = () => useStore(useShallow((state) => state.footer));

// ============================
// Aggregated hooks (using shallow for stability)
// ============================

interface UIState {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  hoveredFeature: string | null;
  setHoveredFeature: (feature: string | null) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface ContentState {
  brand: ContentSlice["brand"];
  navItems: ContentSlice["navItems"];
  hero: ContentSlice["hero"];
  logoBar: ContentSlice["logoBar"];
  roadmap: ContentSlice["roadmap"];
  quote: ContentSlice["quote"];
  features: ContentSlice["features"];
  roadmapPage: ContentSlice["roadmapPage"];
  footer: ContentSlice["footer"];
}

export const useUI = (): UIState =>
  useStore(
    useShallow((state) => ({
      isMobileMenuOpen: state.isMobileMenuOpen,
      setMobileMenuOpen: state.setMobileMenuOpen,
      isScrolled: state.isScrolled,
      setScrolled: state.setScrolled,
      hoveredFeature: state.hoveredFeature,
      setHoveredFeature: state.setHoveredFeature,
      activeSection: state.activeSection,
      setActiveSection: state.setActiveSection,
    }))
  );

export const useContent = (): ContentState =>
  useStore(
    useShallow((state) => ({
      brand: state.brand,
      navItems: state.navItems,
      hero: state.hero,
      logoBar: state.logoBar,
      roadmap: state.roadmap,
      quote: state.quote,
      features: state.features,
      roadmapPage: state.roadmapPage,
      footer: state.footer,
    }))
  );

// ============================
// Individual selectors for advanced use cases
// ============================
export const selectBrand = (state: StoreState) => state.brand;
export const selectNavItems = (state: StoreState) => state.navItems;
export const selectHero = (state: StoreState) => state.hero;
export const selectLogoBar = (state: StoreState) => state.logoBar;
export const selectRoadmap = (state: StoreState) => state.roadmap;
export const selectQuote = (state: StoreState) => state.quote;
export const selectFeatures = (state: StoreState) => state.features;
export const selectFooter = (state: StoreState) => state.footer;
