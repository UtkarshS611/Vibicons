"use client";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

import { useEffect, useState } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function Page({ children }: DashboardLayoutProps) {
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
                    className="fixed inset-0 z-40 bg-black/10"
                />
            )}

            <DashboardSidebar
                open={sidebarOpen}
            />

            <div
                className={`
                    transition-all duration-300
                    ${sidebarOpen ? "lg:ml-72" : "ml-0"}
                `}
            >
                <DashboardHeader
                    sidebarOpen={sidebarOpen}
                    onToggleSidebar={toggleSidebar}
                />

                <div className="px-2 py-4">
                    {children}
                </div>
            </div>
        </section>
    );
}