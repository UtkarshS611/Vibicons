"use client";

import {
    Bell,
    Heart,
    Search,
    Settings,
    Home,
    User,
    Star,
    Menu,
} from "lucide-react";

import { motion } from "motion/react";

interface RotatingIconProps {
    className?: string;
    direction?: "clockwise" | "counterclockwise";
}

export default function RotatingIcon({
    className,
    direction = "clockwise",
}: RotatingIconProps) {

    
    const items = [
        Bell,
        Heart,
        Search,
        Settings,
        Home,
        User,
        Star,
        Menu,
    ];

    return (
        <motion.div
            className={`h-120 w-120 md:h-150 md:w-150 xl:h-180 xl:w-180 aspect-square rounded-full border border-primary ${className ?? ""}`}
            animate={{
                rotate: direction === "clockwise" ? 360 : -360,
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {items.map((Icon, index) => {
                const angle = index * 45;

                return (
                    <div
                        key={index}
                        className="absolute left-1/2 top-1/2 h-full w-full"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                        }}
                    >
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <div className="flex h-15 w-15 md:h-20 md:w-20 items-center justify-center rounded-2xl rotating-icon-glass-effect">
                                <Icon
                                    size={28}
                                    strokeWidth={1.8}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );
}