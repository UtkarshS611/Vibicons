export interface IconMetadata {
    name: string;
    component: string;
    categories: string[];
    tags: string[];
}

export const icons: IconMetadata[] = [
    {
        name: "Bell",
        component: "Bell",
        categories: ["status", "notification"],
        tags: [
            "alert",
            "notification",
            "reminder",
            "alarm",
            "ring",
        ],
    }
];