interface IconGalleryProps {
    onSelectIcon: (slug: string) => void;
}

import { icons } from "@/metadata/icons";
import { iconRegistry } from "@/components/icons/icon-registry";

export default function IconGallery({
    onSelectIcon,
}: IconGalleryProps) {

    const categories = Array.from(
        new Set(icons.map((icon) => icon.category))
    );

    return (
        <div className="relative space-y-10">
            {categories.map((category) => {
                const categoryIcons = icons.filter(
                    (icon) => icon.category === category
                );

                return (
                    <div key={category}>
                        <h2 className="pb-4 text-xl font-medium capitalize">
                            {category}
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {categoryIcons.map((icon) => {
                                const Icon =
                                    iconRegistry[
                                    icon.name as keyof typeof iconRegistry
                                    ];

                                if (!Icon) return null;

                                return (
                                    <button
                                        key={icon.slug}
                                        type="button"
                                        onClick={() => onSelectIcon(icon.slug)}
                                        className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-sm border bg-muted"
                                    >
                                        <Icon />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}