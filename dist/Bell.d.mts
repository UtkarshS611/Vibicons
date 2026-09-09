import * as react from 'react';
import { SVGMotionProps } from 'motion/react';

interface AnimatedIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number;
}

declare function Bell({ size, strokeWidth, ...props }: AnimatedIconProps): react.JSX.Element;

export { Bell };
