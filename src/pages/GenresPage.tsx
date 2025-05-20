import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/GenresPage/Sidebar";
import "../styles/GenresPage/GenresPage.scss";

const categories = [
    'All', 'Action', 'Adventure', 'Anime', 'Comedy', 'Comic', 'Cooking', 'Historical', 'Doujinshi', 'Drama', 'Fantasy', 'Isekai', 'Josei', 'Magic', 'Martial Arts', 'Mecha', 'Military', 'Music', 'Mystery', 'One Shot', 'Psychological', 'Romance', 'Samurai', 'School Life', 'Sci-Fi', 'Seinen', 'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Slice of Life', 'Smut', 'Sports', 'Supernatural', 'Tragedy', 'Vampire', 'Webtoon', 'Reincarnation', 'Manhua', 'Manhwa',
    'Girls Love', 'Detective', 'Game', 'Humor', 'Thriller', 'Horror', 'Urban', 'Magic Realism', 'Superpower', 'Fantasy Romance', 'Time Travel', 'Post-Apocalyptic'
];


const comicsData = [
    {
        img: "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
        category: "Action"
    },
    {
        img: "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
        category: "Anime"
    },
    {
        img: "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
        category: "Fantasy"
    },
    {
        img: "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện cua usio",
        author: "Tác giả A",
        views: 1234,
        category: ["Action","Fantasy"]
    },
    {
        img: "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
        category: "Action",
    },
    {
        img: "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
        category: "Action"
    },
    {
        img: "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
        category: "Action"
    },
    {
        img: "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
    },
    {
        img: "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
    },
    {
        img: "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
    },
    {
        img: "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
    },
    {
        img: "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
    },
    {
        img: "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
    },
    {
        img: "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
    },
    {
        img: "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
    },
    {
        img: "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
    },
    {
        img: "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
    },
    {
        img: "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
    },

    ...Array.from({ length: 30 }, (_, index) => {
        const images = [
            "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
            "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
            "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
            "img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif",
            "img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif"
        ];

        const allGenres = [
            "Action", "Adventure", "Anime", "Chuyển Sinh", "Comedy", "Comic", "Cooking",
            "Cổ Đại", "Doujinshi", "Drama", "Fantasy", "Romance", "Horror", "Thriller",
            "Isekai", "Shounen", "Slice of Life", "Mystery", "Supernatural", "Sci-Fi",
            "Martial Arts", "School Life", "Sports", "Magic", "Psychological", "Historical"
        ];


        const shuffled = [...allGenres].sort(() => 0.5 - Math.random());
        const categoryCount = Math.floor(Math.random() * 4) + 2;
        const selectedCategories = shuffled.slice(0, categoryCount);

        return {
            img: images[index % images.length],
            name: `Sample Comic ${index + 1}`,
            author: `Author ${String.fromCharCode(65 + (index % 26))}`,
            views: Math.floor(Math.random() * 10000),
            category: selectedCategories
        };
    })


];


const GenresPage = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [showAllCategories, setShowAllCategories] = useState(false);

    const visibleCategories = showAllCategories ? categories : categories.slice(0, 15);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const initialSelected = queryParams.get("categories")?.split(",") || [];
        setSelectedCategories(initialSelected);
    }, [location.search]);

    const toggleCategory = (category: string) => {
        if (category === 'All') {
            setSelectedCategories([]);
        } else {
            setSelectedCategories(prev =>
                prev.includes(category)
                    ? prev.filter(c => c !== category)
                    : [...prev, category]
            );
        }
    };

    const handleSearch = () => {
        const query = selectedCategories.join(",");
        navigate(`/results?categories=${encodeURIComponent(query)}`);
    };

    const filteredComics = selectedCategories.length === 0
        ? comicsData
        : comicsData.filter(comic => {

            const comicCategories = Array.isArray(comic.category)
                ? comic.category.map(cat => cat.toLowerCase())
                : comic.category ? [comic.category.toLowerCase()] : [];

            return selectedCategories.every(cat => comicCategories.includes(cat.toLowerCase()));
        });

    return (
        <div className="container-main">
            <div className="container-genres">
                <Sidebar
                    categories={visibleCategories}
                    selectedCategories={selectedCategories}
                    onToggleCategory={toggleCategory}
                />
                <button
                    onClick={() => setShowAllCategories(prev => !prev)}
                    className="toggle-categories-btn"
                >
                    {showAllCategories ? 'Ẩn bớt' : 'Hiển thị thêm'}
                </button>

                <button
                    onClick={handleSearch}
                    className="search-button"
                    disabled={selectedCategories.length === 0}
                >
                    Tìm kiếm
                </button>

                <div className="Genres">
                    <h2>
                        Bùm chíu!! <span>Mỗi trang truyện là một cánh cửa dẫn đến thế giới mà chỉ người dám mơ mới dám bước vào</span>
                    </h2>
                    <div className="manga-list">
                        {filteredComics.map((comic, index) => (
                            <div className="comic2" key={index}>
                                <img src={comic.img} alt={comic.name} />
                                <p className="name2">{comic.name}</p>
                                <p className="sales2">
                                    {comic.author}<span>{comic.views}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenresPage;
