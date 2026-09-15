interface IconsSidebarProps {
    open: boolean;
}

export default function IconsSidebar({
    open,
}: IconsSidebarProps) {

    return (
        <aside
            className={` fixed left-0 top-0 h-screen w-72 bg-sidebar transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="flex items-center gap-2 px-5 py-4">
                <div
                    className="h-8 w-8 bg-primary rounded-full aspect-square"
                />
                <h2 className="text-xl">
                    Vibicons
                </h2>
            </div>
        </aside>
    )
}