import React from "react";
import { cn } from "@/utils/utils";
import styles from "./SteamText.module.css";

type SteamTextVariants =
  | "default"
  | "olive"
  | "underlined"
  | "goldDark"
  | "goldLight"
  | "disabled";

function CustomSteamText({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: SteamTextVariants;
}) {
  const variantClasses = {
    default: styles.defaultVariant,
    olive: styles.oliveVariant,
    underlined: styles.underlinedVariant,
    goldLight: styles.goldLightVariant,
    goldDark: styles.goldDarkVariant,
    disabled: styles.disabledVariant,
  };

  return (
    <p className={cn(styles.baseClass, variantClasses[variant], className)}>
      {children}
    </p>
  );
}

export default CustomSteamText;
