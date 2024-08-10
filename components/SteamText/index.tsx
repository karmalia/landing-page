type SteamTextVariants =
  | "default"
  | "olive"
  | "underlined"
  | "goldDark"
  | "goldLight"
  | "disabled";

function SteamText({
  children,

  variant = "default",
}: {
  children: React.ReactNode;

  variant?: SteamTextVariants;
  disabled?: boolean;
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

  const classConcat = `${baseClass} ${variantClasses[variant]}`;

  return <p className={classConcat}>{children}</p>;
}

export default SteamText;
