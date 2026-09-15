"use client";

import { useEffect, useState } from "react";
import IconsHeader from "@/components/iconPage/IconsHeader";
import IconsSidebar from "@/components/iconPage/IconsSidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Page() {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setSidebarOpen(isDesktop);
    }, [isDesktop]);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    const closeSidebar = () => {
        if (!isDesktop) {
            setSidebarOpen(false);
        }
    };

    return (
        <section>
            {sidebarOpen && !isDesktop && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 z-40 bg-black/30"
                />
            )}

            <IconsSidebar
                open={sidebarOpen}
            />

            <div
                className={`
                    transition-all duration-300
                    ${sidebarOpen ? "lg:ml-72" : "ml-0"}
                `}
            >
                <IconsHeader
                    sidebarOpen={sidebarOpen}
                    onToggleSidebar={toggleSidebar}
                />

                <div className="px-2 py-4">
                    Main content
                </div>
            </div>
        </section>
    );
}