import { Search } from "lucide-react";

export default function IconsSearch() {
    return (
        <div
            className="mx-4 h-10 w-full max-w-xl rounded-lg border border-input bg-sidebar flex items-center"
        >
            <Search
                className="size-5 mx-2"
            />
            <input
                className="w-full focus:outline-none bg-transparent text-sm"
                placeholder="Search icons..."
            >
            </input>
            <div className="bg-secondary mx-2 flex items-center justify-center text-xs border border-input rounded-sm w-16 h-6">
                Ctrl + K
            </div>
        </div>
    )
}