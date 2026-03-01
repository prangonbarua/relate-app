/**
 * InteractiveMenu — React Native adaptation of the modern-mobile-menu component.
 *
 * Web-specific APIs replaced:
 *   HTMLElement refs        → React Native View/measure
 *   window.addEventListener → not needed (no browser resize)
 *   CSS variables           → StyleSheet + Colors token (#446DFF from Figma)
 *   nav / button elements   → View / TouchableOpacity
 *   lucide-react            → @expo/vector-icons Ionicons (already installed)
 *   CSS class names         → inline StyleSheet objects
 *
 * The animated underline width is measured via onLayout on each label View.
 */

import React, { useState, useRef, useCallback, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  LayoutChangeEvent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// ─── Types ───────────────────────────────────────────────────────────────────

type IoniconName = keyof typeof Ionicons.glyphMap;

export interface InteractiveMenuItem {
  label: string;
  icon: IoniconName;
}

export interface InteractiveMenuProps {
  items?: InteractiveMenuItem[];
  accentColor?: string;
  initialIndex?: number;
  onSelect?: (index: number, item: InteractiveMenuItem) => void;
}

// ─── Defaults (mirrors Figma node 8:3 tab bar) ───────────────────────────────

const defaultItems: InteractiveMenuItem[] = [
  { label: "Home",      icon: "home-outline" },
  { label: "Guide",     icon: "compass-outline" },
  { label: "Skills",    icon: "book-outline" },
  { label: "Community", icon: "people-outline" },
  { label: "Assistant", icon: "sparkles-outline" },
];

// Figma active color: fill_6JHKSM = #446DFF
const DEFAULT_ACCENT = "#446DFF";
const INACTIVE_COLOR = "#C8C2BA";   // fill_3LUI05 from Figma
const BG_COLOR       = "#FFFFFF";   // tab bar bg
const BORDER_COLOR   = "#F0EBE4";   // stroke_558P6O from Figma

// ─── Single tab item ─────────────────────────────────────────────────────────

interface TabItemProps {
  item: InteractiveMenuItem;
  isActive: boolean;
  accentColor: string;
  onPress: () => void;
  onLabelLayout: (width: number) => void;
}

const TabItem: React.FC<TabItemProps> = ({
  item,
  isActive,
  accentColor,
  onPress,
  onLabelLayout,
}) => {
  const iconColor = isActive ? accentColor : INACTIVE_COLOR;

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      onLabelLayout(e.nativeEvent.layout.width);
    },
    [onLabelLayout]
  );

  return (
    <TouchableOpacity
      style={styles.tabItem}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
      accessibilityLabel={item.label}
    >
      <Ionicons
        name={isActive ? (item.icon.replace("-outline", "") as IoniconName) : item.icon}
        size={22}
        color={iconColor}
      />
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.8}
        onLayout={handleLayout}
        style={[styles.label, { color: iconColor }]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  items,
  accentColor,
  initialIndex = 0,
  onSelect,
}) => {
  // Validate items (2–5 required, same rule as original)
  const finalItems = useMemo<InteractiveMenuItem[]>(() => {
    const valid =
      items && Array.isArray(items) && items.length >= 2 && items.length <= 5;
    if (!valid) {
      if (items !== undefined) {
        console.warn(
          "InteractiveMenu: 'items' prop is invalid or missing. Using default items.",
          items
        );
      }
      return defaultItems;
    }
    return items;
  }, [items]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const accent = accentColor || DEFAULT_ACCENT;

  // Track label widths for the animated underline
  const labelWidths = useRef<number[]>(new Array(finalItems.length).fill(0));
  const lineAnim = useRef(new Animated.Value(0)).current;

  const handleLabelLayout = useCallback((index: number, width: number) => {
    labelWidths.current[index] = width;
    // Update line width if this is the active tab
    if (index === activeIndex) {
      Animated.spring(lineAnim, {
        toValue: width,
        useNativeDriver: false,
        tension: 120,
        friction: 8,
      }).start();
    }
  }, [activeIndex, lineAnim]);

  const handlePress = useCallback(
    (index: number) => {
      setActiveIndex(index);
      onSelect?.(index, finalItems[index]);
      Animated.spring(lineAnim, {
        toValue: labelWidths.current[index] ?? 0,
        useNativeDriver: false,
        tension: 120,
        friction: 8,
      }).start();
    },
    [finalItems, lineAnim, onSelect]
  );

  return (
    <View style={styles.nav} accessibilityRole="tablist">
      {finalItems.map((item, index) => (
        <View key={item.label} style={styles.itemWrapper}>
          <TabItem
            item={item}
            isActive={index === activeIndex}
            accentColor={accent}
            onPress={() => handlePress(index)}
            onLabelLayout={(w) => handleLabelLayout(index, w)}
          />
          {/* Animated underline — mirrors the --lineWidth CSS trick */}
          {index === activeIndex && (
            <Animated.View
              style={[
                styles.underline,
                { width: lineAnim, backgroundColor: accent },
              ]}
            />
          )}
        </View>
      ))}
    </View>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    backgroundColor: BG_COLOR,
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
    height: 72,
    alignItems: "stretch",
    paddingHorizontal: 8,
  },
  itemWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingTop: 8,
  },
  label: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 12,
    textAlign: "center",
  },
  underline: {
    height: 2,
    borderRadius: 1,
    marginTop: 2,
  },
});

export { InteractiveMenu };
