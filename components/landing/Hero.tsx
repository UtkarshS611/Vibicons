import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { HeroBackground } from "@/components/landing/HeroBackground";
import Header from "@/components/landing/Header";
import { MoveUpRight } from "lucide-react";

export default function Hero() {

    const iconBox = [
        {
            id: "1",
        },
        {
            id: "2",
        },
        {
            id: "3",
        },
        {
            id: "4",
        },
        {
            id: "5",
        },
        {
            id: "6",
        },
        {
            id: "7",
        },
        {
            id: "8",
        },
        {
            id: "9",
        }
    ]

    return (
        <section className="overflow-hidden">
            <Header />
            <HeroBackground />
            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between w-screen pt-44 xl:pt-64 px-6 xl:px-32 gap-12 xl:gap-0">
                <div className="relative z-999  w-full xl:max-w-xl space-y-4 text-center xl:text-start">
                    {/* <div className="rounded-full px-6 border w-fit font-mono">
                        Welcome to <span className="text-primary">Vibicons</span>
                    </div> */}
                    <h1 className="font-bold text-5xl lg:text-7xl">
                        Animated icons, made for <span className="text-primary">React</span>.
                    </h1>
                    <p className="text-muted-foreground">
                        Open-source animated React icons built with Motion, designed for modern interfaces.
                    </p>

                    <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-4">
                        <Link
                            href={"/dashboard/icons"}
                            className={`${buttonVariants({ variant: "default" })} w-44 xl:w-fit flex items-center`}
                        >
                            <span>Explore Icons</span>
                            <MoveUpRight className="size-3" />
                        </Link>
                        <Link
                            href={"/dashboard/docs/installation"}
                            className={`${buttonVariants({ variant: "secondary" })} w-44 xl:w-fit flex items-center`}
                        >
                            <span>View Docs</span>
                            <MoveUpRight className="size-3" />
                        </Link>
                    </div>
                </div>


                <div className="relative z-999 grid grid-cols-3 grid-rows-3 gap-2 place-items-center">
                    {iconBox.map((icon, index) => (
                        <div
                            key={index}
                            className="bg-primary h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 text-black flex items-center justify-center rounded-xl"
                        >
                            {icon.id}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}