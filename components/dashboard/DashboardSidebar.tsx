"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

interface IconsSidebarProps {
    open: boolean;
}

export default function DashboardSidebar({
    open,
}: IconsSidebarProps) {
    const pathname = usePathname();

    const docsLinks = [
        {
            name: "Installation",
            href: "/dashboard/docs/installation",
        },
        {
            name: "Versions",
            href: "/dashboard/docs/versions",
        },
    ];

    const iconsCategories = [
        {
            name: "Arrows",
            href: "/dashboard/icons/animated",
            number: 32
        },
        {
            name: "Cursors",
            href: "/dashboard/icons/static",
            number: 12
        },
    ]

    return (
        <aside
            className={`px-5 z-999 fixed left-0 top-0 h-screen w-72 bg-sidebar transition-all duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <Link
                href="/dashboard"
                className="flex items-center gap-2 py-4"
            >
                <Image
                    src="/logo/logo.svg"
                    alt="Vibicons Logo"
                    width={32}
                    height={32}
                    className="size-8"
                />

                <h2 className="text-xl">
                    Vibicons
                </h2>
            </Link>

            <div className="flex flex-col items-start pt-6 space-y-2 w-full">
                <h2 className="text-xs">
                    Introduction
                </h2>
                <div className="flex flex-col items-start space-y-1 w-full">
                    {docsLinks.map((link,index) => {
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={`duration-300 w-full rounded-sm py-1 px-2 ${pathname === link.href ? "bg-gray-200 text-black" : "hover:bg-gray-200"}`}
                            >
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>


            <div className="flex flex-col items-start pt-6 space-y-2 w-full">
                <h2 className="text-xs">
                    All Icons
                </h2>
                <div className="flex flex-col items-start space-y-1 w-full">
                    {iconsCategories.map((link,index) => {
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={`flex items-center justify-between duration-300 w-full rounded-sm py-1 px-2 ${pathname === link.href ? "bg-gray-200 text-black" : "hover:bg-gray-200"}`}
                            >
                                <span>{link.name}</span>
                                <span className="font-extralight text-xs text-muted-foreground">{link.number}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}