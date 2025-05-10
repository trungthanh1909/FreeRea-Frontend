export interface Recommendation {
    title: string;
    tags: string[];
    rating: number;
    episodes: string;
    year: string;
    description: string;
    images: string[];
    link: string;
}

export const getRecommendations = (): Recommendation[] => [
    {
        title: "Nói chúc ngủ ngon ở Thành phố Quỷ Vương",
        tags: ["ma thuật", "công chúa"],
        rating: 4.9,
        episodes: "27/27",
        year: "2025",
        description:
            "Đây là thời đại mà con người và ma quỷ cùng tồn tại. Một ngày nọ, Quỷ Vương bắt công chúa loài người và đe dọa:...",
        images: [
            "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
            "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
            "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        ],
        link: "/detail/mc27915",
    },
];
