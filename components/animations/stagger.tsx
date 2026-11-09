"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export const StaggerContainer = ({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const shouldReduce = useReducedMotion();

  const item = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};
