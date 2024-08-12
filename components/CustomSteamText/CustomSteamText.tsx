import { cn } from "@/utils/utils";

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
  const baseClass = `font-steam  antialiased text-sm rounded-none `;

  const variantClasses = {
    default: `text-white`,
    olive: `text-steamOlive`,
    underlined: `underline text-steamOlive`,
    goldLight: `text-steamGold`,
    goldDark: `text-steamGold2`,
    disabled: `bg-steam text-shadow-sm`,
  };

  return (
    <p className={cn(baseClass, variantClasses[variant], className)}>
      {children}
    </p>
  );
}

export default CustomSteamText;
