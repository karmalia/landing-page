import { cn } from "@/utils/utils";

function CustomSteamWindow({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "inner";
}) {
  const baseClass = `font-steam antialiased text-sm rounded-none`;
  const staticBorder = `bg-weldedIron border-t-2 border-t-slate-400
                border-l-2 border-l-slate-500
                border-r-2 border-r-slate-950
                border-b-2 border-b-slate-900`;

  const innerBorder = `bg-trachery
              border-t-2 border-t-slate-900 
              border-l-2 border-l-slate-950 
              border-r-2 border-r-slate-400 
              border-b-2 border-b-slate-500`;

  const border = variant === "default" ? staticBorder : innerBorder;

  return <div className={cn(baseClass, border, className)}>{children}</div>;
}

export default CustomSteamWindow;
