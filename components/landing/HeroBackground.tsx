"use client"
import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"

export function HeroBackground() {
    return (
        <div className="h-full w-full bg-transparent opacity-12">
            <InteractiveGridPattern
                className={cn(
                    "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
                )}
                width={60}
                height={60}
                squares={[80, 80]}
                squaresClassName="hover:fill-gray-500"
            />
        </div>
    )
}
