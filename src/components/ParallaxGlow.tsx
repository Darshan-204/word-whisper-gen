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
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.18, 0.08, 0]);

  return (
    <>
      {/* Top-center teal glow (strengthened) */}
      <motion.div
        ref={ref}
        style={{
          y,
          opacity,
          width: '640px',
          height: '160px',
          background: 'radial-gradient(circle at 50% 6%, rgba(6,182,212,0.26) 0%, rgba(6,182,212,0.14) 28%, transparent 60%)',
          filter: 'blur(72px)'
        }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
      />

      {/* Bottom-right purple glow (strengthened) */}
      <motion.div
        style={{
          y,
          opacity,
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle at 70% 80%, rgba(139,92,246,0.20) 0%, rgba(139,92,246,0.12) 30%, transparent 60%)',
          filter: 'blur(64px)'
        }}
        className="absolute -right-16 -bottom-12 rounded-full pointer-events-none"
      />

      {/* Small blurred accent circle at the top-right (partially off-screen) */}
      <motion.div
        style={{ y, opacity }}
        className="absolute -right-8 -top-6 w-20 h-20 rounded-full pointer-events-none blur-2xl"
      >
        <div style={{ backgroundColor: 'rgba(162,135,244,0.92)', width: '100%', height: '100%', borderRadius: '9999px', boxShadow: '0 10px 30px rgba(162,135,244,0.28)' }} />
      </motion.div>
    </>
  );
};
