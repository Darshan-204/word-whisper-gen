import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedBadge } from "@/components/AnimatedBadge";
import { ParallaxGlow } from "@/components/ParallaxGlow";
import { GridPattern } from "@/components/GridPattern";
import { useRef } from "react";

/**
 * Index - Main landing page for UI Developer Assignment
 * Features:
 * - Responsive design (mobile, tablet, desktop)
 * - Parallax scrolling effects
 * - Staggered content animations
 * - Micro-interactions on hover
 * - Cross-browser compatible animations
 */
const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effect for background gradient
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Staggered animation variants for content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen gradient-bg relative overflow-hidden"
    >
      {/* Animated background elements */}
      <GridPattern />
      
      {/* Gradient overlay with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/10 pointer-events-none"
      />
      
      {/* Main content container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 sm:px-8 md:px-12 lg:px-24 max-w-7xl mx-auto w-full py-12"
      >
        {/* Bordered box container for heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="content-box-border p-8 sm:p-10 md:p-12 lg:p-16 mb-12 sm:mb-14 lg:mb-16 rounded-lg"
        >
          {/* Badge with entrance animation */}
          <motion.div variants={itemVariants}>
            <AnimatedBadge className="mb-8 sm:mb-10 lg:mb-12">
              Assignment
            </AnimatedBadge>
          </motion.div>

          {/* Main heading with character animation */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight tracking-tight"
          >
            <motion.span
              className="block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              UI DEVELOPER
            </motion.span>
            <motion.span
              className="block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ASSIGNMENT
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Company information with stagger */}
        <motion.div 
          variants={itemVariants}
          className="space-y-3 sm:space-y-4"
        >
          <motion.p 
            className="text-muted-foreground uppercase tracking-widest text-xs sm:text-sm font-medium"
            whileHover={{ 
              letterSpacing: "0.2em",
              transition: { duration: 0.3 }
            }}
          >
            Company
          </motion.p>
          <motion.p 
            className="text-foreground text-lg sm:text-xl md:text-2xl font-mono tracking-wide"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Juspay Technologies Private Limited
          </motion.p>
        </motion.div>

        {/* Decorative floating orb - hidden on mobile for performance */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"
        />
      </motion.div>

      {/* Parallax glow effect */}
      <ParallaxGlow />

      {/* Bottom gradient accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/5 to-transparent pointer-events-none"
      />
    </div>
  );
};

export default Index;
