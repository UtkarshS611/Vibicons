"use client";

import { useState } from "react";

import { icons } from "@/metadata/icons";
import { iconRegistry } from "@/components/icons/icon-registry";

import IconGallery from "@/components/icons/IconGallery";
import IconPreview from "@/components/icons/IconPreview";

export default function IconsPage() {
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    const selectedMetadata = icons.find(
        (icon) => icon.slug === selectedIcon
    );

    const SelectedIcon = selectedMetadata
        ? iconRegistry[
        selectedMetadata.name as keyof typeof iconRegistry
        ]
        : null;

    return (
        <div className="min-h-screen">
            <IconGallery onSelectIcon={setSelectedIcon} />

            <IconPreview
                selectedIcon={SelectedIcon}
                iconName={selectedMetadata?.name ?? null}
                open={selectedIcon !== null}
                onOpenChange={(open: any) => {
                    if (!open) {
                        setSelectedIcon(null);
                    }
                }}
            />
        </div>
    );
}