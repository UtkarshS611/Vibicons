"use client";

import { motion } from "motion/react";
import type { AnimatedIconProps } from "../core/types";

export function Bell({
    size = 24,
    strokeWidth = 2,
    ...props
}: AnimatedIconProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="normal"
            whileHover="hover"
            {...props}
        >
            <motion.path
                d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
                variants={{
                    normal: {
                        rotate: 0,
                    },
                    hover: {
                        rotate: [0, -8, 8, -8, 8, 0],
                    },
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                style={{
                    transformOrigin: "center top",
                }}
            />

            <path d="M10 21h4" />
        </motion.svg>
    );
}