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
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <GridPattern />
      
      {/* Gradient overlay with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/10 pointer-events-none"
      />

      {/* Top-center teal half-circle (attached to top) */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[720px] h-[360px] pointer-events-none overflow-hidden"
      >
        {/* big blurred circle clipped by container to create a half-circle */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '-160px',
            width: '720px',
            height: '720px',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 50% 12%, rgba(6,182,212,0.36) 0%, rgba(6,182,212,0.22) 28%, transparent 60%)',
            filter: 'blur(72px)'
          }}
        />
      </motion.div>

      {/* Bottom-right purple half-circle (attached to bottom-right with small right gap) */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -right-6 bottom-0 w-[520px] h-[260px] pointer-events-none overflow-hidden"
      >
        {/* circle positioned so only its top half shows, creating a bottom-attached semicircle */}
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: '520px',
            height: '520px',
            transform: 'translateY(260px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 70% 70%, rgba(38, 17, 87, 0.60) 0%, rgba(139,92,246,0.48) 30%, transparent 60%)',
            filter: 'blur(48px)'
          }}
        />
      </motion.div>
      
      {/* Main content container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
  className="relative z-10 flex flex-col items-start justify-center min-h-screen pl-12 sm:pl-16 md:pl-24 lg:pl-32 max-w-7xl mx-auto w-full py-12"
      >
    {/* Large grid overlay behind the heading */}
    <div className="grid-overlay--large" />

          {/* Badge with entrance animation */}
          <motion.div variants={itemVariants}>
            <AnimatedBadge className="mb-8 sm:mb-10 lg:mb-12">
              Assignment
            </AnimatedBadge>
          </motion.div>

        {/* Main heading with character animation */}
        <motion.h1 
          variants={itemVariants}
  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-bold text-foreground mb-10 sm:mb-12 lg:mb-14 leading-tight tracking-tight"
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
