import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ParallaxGlow - Animated glow orb with parallax scrolling effect
 * Creates depth and visual interest through movement
 */
export const ParallaxGlow = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.05, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
    />
  );
};
