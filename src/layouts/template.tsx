"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Template({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <React.Fragment>
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.75,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className={cn("z-0", className ? className : "")}
      >
        {children}
      </motion.div>
    </React.Fragment>
  );
}
