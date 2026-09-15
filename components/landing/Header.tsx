"use client";

import Link from "next/link";

import { MenuIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import {
    NavigationMenu,
} from "@/components/ui/navigation-menu";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";


interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {

    const links = [
        { title: "Home", href: "/" },
        { title: "Projects", href: "/projects" },
        { title: "About", href: "/about" },
        { title: "Blogs", href: "/blog" },
    ]

    return (
        <header className={`relative z-999 py-4 px-6 lg:px-32 ${className}`}>
            <nav className="flex items-center justify-between w-full relative">
                <div className="flex items-center gap-10">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        {/* <Image
                        src="/logo.jpeg"
                        alt="Noir & Blanc Designs Logo"
                        width={45}
                        height={45}
                    /> */}
                        <div
                            className="h-8 w-8 border border-muted-foreground rounded-xl flex items-center justify-center"
                        >
                            <h1 className="text-primary">
                                V
                            </h1>
                        </div>
                        <h1 className="text-2xl">
                            Vibicons
                        </h1>
                    </Link>
                    <NavigationMenu className="hidden lg:flex items-center gap-4 text-muted-foreground text-sm">
                        {links.map((item, index) => (
                            <Link key={index} href={item.href}>
                                {item.title}
                            </Link>
                        ))}
                    </NavigationMenu>
                </div>
                <div className="hidden items-center gap-4 lg:flex">
                    <Link
                        href={"/icons"}
                        className={`${buttonVariants({ variant: "default", size: "lg" })}w-44 xl:w-fit`}>
                        Explore Icons
                    </Link>
                    <Link
                        href={"/docs"}
                        className={`${buttonVariants({ variant: "secondary", size: "lg" })}w-44 xl:w-fit`}>
                        Docs
                    </Link>
                </div>
                <Sheet>
                    <SheetTrigger className="lg:hidden">
                            <MenuIcon className="h-4 w-4 text-primary" />
                    </SheetTrigger>
                    <SheetContent side="top" className="max-h-screen overflow-auto z-9999">
                        <SheetHeader>
                            <SheetTitle>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 font-title text-2xl"
                                >
                                    Vibicons
                                </Link>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col p-4 font-title">
                            <div className="flex flex-col items-start gap-6">
                                {links.map((link, index) => (
                                    <Link key={index} href={link.href}>
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-col gap-4">
                                <Link
                                    href={"/icons"}
                                    className={`${buttonVariants({ variant: "default", size: "lg" })} w-full`}>
                                    Explore Icons
                                </Link>
                                <Link
                                    href={"/docs"}
                                    className={`${buttonVariants({ variant: "secondary", size: "lg" })} w-full`}>
                                    Docs
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
};