"use client";

import * as React from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        // animate={{
        //   y: 0,
        //   opacity: 1,
        // }}
        transition={{
          ease: "easeInOut",
          duration: 0.75,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        {children}
      </motion.div>
    </React.Fragment>
  );
}
