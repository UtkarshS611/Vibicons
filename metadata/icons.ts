export interface IconMetadata {
    name: string;
    slug: string;
    category: string;
    tags: string[];
}

export const icons: IconMetadata[] = [
    {
        name: "Bell",
        slug: "bell",
        category: "notification",
        tags: [
            "alert",
            "notification",
            "reminder",
            "alarm",
            "ring",
        ],
    }
];