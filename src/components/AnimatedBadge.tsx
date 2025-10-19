import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * AnimatedBadge - A badge component with smooth entrance animations and hover effects
 * Features:
 * - Fade and slide in animation on mount
 * - Scale effect on hover
 * - Glow effect on focus/hover
 */
export const AnimatedBadge = ({ children, className }: AnimatedBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className={cn(
        "inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium tracking-wide uppercase text-sm badge-glow cursor-default select-none",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
