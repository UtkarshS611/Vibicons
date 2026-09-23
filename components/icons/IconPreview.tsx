"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

interface IconPreviewProps {
    selectedIcon: React.ComponentType<any> | null;
    iconName: string | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function IconPreview({
    selectedIcon: SelectedIcon,
    iconName,
    open,
    onOpenChange,
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
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
            >
                <SheetHeader>
                    <SheetTitle>{iconName}</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-8 px-4">
                    {/* Icon preview */}
                    <div className="flex aspect-square w-full items-center justify-center rounded-xl border bg-muted">
                        <SelectedIcon
                            size={120}
                            strokeWidth={1.5}
                        />
                    </div>

                    {/* Import */}
                    <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                            Import
                        </p>

                        <pre className="relative overflow-x-auto rounded-md bg-black px-3 py-4 pr-12 text-sm text-white">
                            <code>{importCode}</code>

                            <button
                                type="button"
                                onClick={() =>
                                    handleCopy(importCode, "import")
                                }
                                className="absolute right-2 top-2 rounded-md p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                                aria-label="Copy import code"
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
                    <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                            Usage
                        </p>

                        <pre className="relative overflow-x-auto rounded-md bg-black px-3 py-4 pr-12 text-sm text-white">
                            <code>{usageCode}</code>

                            <button
                                type="button"
                                onClick={() =>
                                    handleCopy(usageCode, "usage")
                                }
                                className="absolute right-2 top-2 rounded-md p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                                aria-label="Copy usage code"
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
            </SheetContent>
        </Sheet>
    );
}