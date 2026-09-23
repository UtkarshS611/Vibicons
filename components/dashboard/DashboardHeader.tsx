"use client";

interface IconsHeaderProps {
    sidebarOpen: boolean;
    onToggleSidebar: () => void;
}

import Link from "next/link";

import {
    PanelLeftOpen,
    PanelLeftClose,
    Search
} from "lucide-react"
import { FaGithub } from "react-icons/fa";


import ThemeToggle from "@/components/ui/theme-toggle"

import { Button } from "@/components/ui/button"

export default function DashboardHeader({
    sidebarOpen,
    onToggleSidebar,
}: IconsHeaderProps) {
    return (
        <header className="z-999 top-0 w-full border-b py-4 px-2 flex items-center justify-between">
            <div className="flex items-center">
                <div className="border-r w-fit pr-2 flex items-center justify-center">
                    <Button
                        size={"icon"}
                        variant={"ghost"}
                        onClick={onToggleSidebar}
                    >
                        {sidebarOpen ? <PanelLeftClose className="size-5" /> : <PanelLeftOpen className="size-5" />}
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="pl-2">
                <ThemeToggle />
                </div>
                <Link
                    href={"https://github.com/UtkarshS611/Vibicons"}
                    target="_blank"
                    className="border-l pl-2"
                >
                    <FaGithub className="size-5" />
                </Link>
            </div>
        </header>
    )
}