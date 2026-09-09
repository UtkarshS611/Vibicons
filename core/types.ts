import type { SVGMotionProps } from "motion/react";

export interface AnimatedIconProps
    extends SVGMotionProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number;
}