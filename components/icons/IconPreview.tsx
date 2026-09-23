"use client";

import { Check, Copy, X } from "lucide-react";
import { useState } from "react";

interface IconPreviewProps {
    selectedIcon: React.ComponentType<any> | null;
    iconName: string | null;
    onClose: () => void;
}

export default function IconPreview({
    selectedIcon: SelectedIcon,
    iconName,
    onClose,
}: IconPreviewProps) {
    const [copied, setCopied] = useState<string | null>(null);

    if (!SelectedIcon || !iconName) return null;

    const importCode = `import { ${iconName} } from "vibicons-react";`;
    const usageCode = `<${iconName} />`;

    const handleCopy = async (text: string, type: string) => {
        await navigator.clipboard.writeText(text);

        setCopied(type);

        setTimeout(() => {
            setCopied(null);
        }, 1500);
    };

    return (
        <div
            className="bg-gray-200 fixed bottom-0 left-1/2 z-50 w-full sm:max-w-lg xl:max-w-3xl -translate-x-1/2 rounded-t-xl border p-6"
        >
            {/* Close */}
            <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close preview"
            >
                <X size={18} />
            </button>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                {/* Icon */}
                <div
                    className="flex h-28 w-28 shrink-0 self-center items-center justify-center rounded-sm border bg-muted sm:h-36 sm:w-36"
                >
                    <SelectedIcon
                        size={40}
                        strokeWidth={1.5}
                    />
                </div>

                {/* Code */}
                <div className="flex min-w-0 flex-1 flex-col gap-4">
                    {/* Import */}
                    <div className="min-w-0">
                        <p className="mb-2 text-sm text-muted-foreground">
                            Import
                        </p>

                        <pre className="relative overflow-x-auto rounded-sm bg-black px-3 py-3 pr-12 text-sm text-white">
                            <code>{importCode}</code>
                            <button
                                type="button"
                                onClick={() =>
                                    handleCopy(importCode, "import")
                                }
                                className="absolute right-2 top-2 rounded-sm p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                {copied === "import" ? (
                                    <Check size={16} />
                                ) : (
                                    <Copy size={16} />
                                )}
                            </button>
                        </pre>
                    </div>

                    {/* Usage */}
                    <div className="min-w-0">
                        <p className="mb-2 text-sm text-muted-foreground">
                            Usage
                        </p>

                        <pre className="relative overflow-x-auto rounded-sm bg-black px-3 py-3 pr-12 text-sm text-white">
                            <code>{usageCode}</code>

                            <button
                                type="button"
                                onClick={() =>
                                    handleCopy(usageCode, "usage")
                                }
                                className="absolute right-2 top-2 rounded-sm p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                {copied === "usage" ? (
                                    <Check size={16} />
                                ) : (
                                    <Copy size={16} />
                                )}
                            </button>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}