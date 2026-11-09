"use client";

import { motion, useReducedMotion } from "motion/react";

export const MotionDiv = motion.div;

export const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const HoverTap = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduce ? undefined : { scale: 1.05 }}
      whileTap={shouldReduce ? undefined : { scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
