import Link from "next/link";

import { MoveUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";
import RotatingIcon from "./RotatingIcon";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <section className="bg-linear-to-t from-black to-primary to-80% mx-4 rounded-t-[30px] px-4 overflow-hidden">
            <div className="text-white pt-24 pb-64 relative overflow-hidden">
                <RotatingIcon
                    className="max-[1300px]:hidden absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
                    direction="counterclockwise"
                />
                <RotatingIcon
                    className="max-[1300px]:hidden absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2"
                />
                <RotatingIcon
                    className="min-[1300px]:hidden absolute top-full -translate-y-1/4 left-1/2 -translate-x-1/2"
                />
                <div className="text-center space-y-6">
                    <h2 className="text-4xl mx-auto w-full md:max-w-2xl font-semibold">
                        Your category has a breakout moment coming. Will you run it or watch a competitor?
                    </h2>
                    <p className="mx-auto w-full md:max-w-lg text-sm">
                        Book a 15-minute strategy call. We'll map your category, show you who's already running creator networks in your space, and build your playbook — no commitment required.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                        <Link
                            href={"/icons"}
                            className={`${buttonVariants({ variant: "secondary" })} w-44 xl:w-fit flex items-center`}
                        >
                            <span>Explore Icons</span>
                            <MoveUpRight className="size-3" />
                        </Link>
                        <Link
                            href={"/installation"}
                            className={`${buttonVariants({ variant: "secondary" })} w-44 xl:w-fit flex items-center`}
                        >
                            <span>View Docs</span>
                            <MoveUpRight className="size-3" />
                        </Link>
                    </div>
                </div>
            </div>
            <footer className="relative z-999 bg-background rounded-t-[30px] pt-12 pb-6 px-16">
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo/logo.svg"
                        alt="Vibicons Logo"
                        width={32}
                        height={32}
                        className="size-8"
                    />
                    <h2 className="font-semibold text-xl">Vibicons</h2>
                </div>
                <div className="flex items-center justify-start gap-24 pt-8">
                    <div className="space-y-4">
                        <div>
                            Services
                        </div>
                        <ul className="text-muted-foreground text-sm space-y-2">
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div>
                            Company
                        </div>
                        <ul className="text-muted-foreground text-sm space-y-2">
                            <li>Icons</li>
                            <li>Terms & Conditions</li>
                            <li>Socials</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center py-6 border-b border-primary gap-4">
                    <Link
                        href={"https://github.com/UtkarshS611/Vibicons"}
                        target="_blank"
                    >
                        <FaGithub className="size-5" />
                    </Link>
                    <Link
                        href={"https://www.linkedin.com/in/utkarsh-singh-5630b42aa/"}
                        target="_blank"
                    >
                        <FaLinkedin className="size-5" />
                    </Link>
                </div>
                <div>
                    <p className="text-muted-foreground text-sm pt-6">
                        &copy; {year} Vibicons. All rights reserved.
                    </p>
                </div>
            </footer>
        </section>
    )
}