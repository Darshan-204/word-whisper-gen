import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium tracking-wide uppercase text-sm badge-glow transition-all hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  );
};
