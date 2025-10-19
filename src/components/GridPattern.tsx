import { motion } from "framer-motion";

/**
 * GridPattern - Animated grid background with subtle movement
 * Provides visual depth and technical aesthetic
 */
export const GridPattern = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="absolute inset-0 grid-pattern pointer-events-none"
    >
      {/* Animated grid lines */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      />
    </motion.div>
  );
};
