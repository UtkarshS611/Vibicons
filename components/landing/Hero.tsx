import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { HeroBackground } from "@/components/landing/HeroBackground";
import Header from "./Header";

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
                    <h1 className="font-bold text-5xl lg:text-7xl">
                        Animated icons, made for <span className="text-primary">React</span>.
                    </h1>
                    <p className="text-muted-foreground">
                        Open-source animated React icons built with Motion, designed for modern interfaces.
                    </p>

                    <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-4">
                        <Link
                            href={"/icons"}
                            className={`${buttonVariants({ variant: "default", size: "lg" })} text-white w-44 xl:w-fit`}>
                            Explore Icons
                        </Link>
                        <Link
                            href={"/docs"}
                            className={`${buttonVariants({ variant: "secondary", size: "lg" })} text-white w-44 xl:w-fit`}>
                            Docs
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