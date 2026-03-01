// Relate design system — derived from Figma (CatXz8NSJUmN2VmAlZqq0Q)
export const Colors = {
  // Brand blue — primary across all screens
  primary: "#446DFF",
  primaryDark: "#2D52CC",
  primaryDeep: "#1A3A9E",
  primaryLight: "#EEF2FF",

  // Backgrounds
  background: "#F9F6F1",   // off-white canvas
  surface: "#FFFFFF",

  // Text
  text: "#1C1C2E",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",

  // Borders
  border: "#F0EBE4",       // tab bar top border from Figma
  borderLight: "#E5E7EB",

  // Tab bar
  tabActive: "#446DFF",
  tabInactive: "#C8C2BA",

  // Semantic
  danger: "#EF4444",
  dangerLight: "#FEE2E2",
  success: "#10B981",
  successLight: "#D1FAE5",

  // Skill card gradient (from Figma 2:2 home screen)
  gradientStart: "#446DFF",
  gradientEnd: "#2D52CC",
};

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 999,
};

export const Shadow = {
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  soft: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
};
