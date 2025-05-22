import React from "react";
import { useLocation,  } from "react-router-dom";
import "../styles/GenresPage/ResultsPage.scss"
import Navbar from "../components/Navbar";

const comicsData = [
    {
        img: "/img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
        category: "Action"
    },
    {
        img: "/img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
        category: "Anime"
    },
    {
        img: "/img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
        category: "Fantasy"
    },
    {
        img: "/img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện cua usio",
        author: "Tác giả A",
        views: 1234,
        category: ["Action","Fantasy"]
    },
    {
        img: "/img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
        category: "Action",
    },
    {
        img: "/img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
        category: "Action"
    },
    {
        img: "/img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
        category: "Action"
    },
    {
        img: "/img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
    },
    {
        img: "/img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
    },
    {
        img: "/img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
    },
    {
        img: "/img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
    },
    {
        img: "/img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
    },
    {
        img: "/img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
    },
    {
        img: "/img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
    },
    {
        img: "/img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
    },
    {
        img: "/img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
        name: "Truyện 1",
        author: "Tác giả A",
        views: 1234,
    },
    {
        img: "/img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
        name: "Truyện 2",
        author: "Tác giả B",
        views: 4567,
    },
    {
        img: "/img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
        name: "Truyện 3",
        author: "Tác giả C",
        views: 7890,
    },

    ...Array.from({ length: 30 }, (_, index) => {
        const images = [
            "/img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
            "/img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
            "/img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
            "/img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif",
            "/img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif"
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


const ResultsPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedCategories = queryParams.get("categories")?.split(",") || [];

    const filteredComics = selectedCategories.length === 0
        ? comicsData
        : comicsData.filter(comic => {
            const comicCategories = Array.isArray(comic.category)
                ? comic.category
                : [comic.category];
            return selectedCategories.every(cat => comicCategories.includes(cat));
        });

    return (
        <div className="container-category">
            <Navbar/>
            <div className="Genres-results">
                <h2>
                  <span>{selectedCategories.join (", ") || "All"}</span>
                </h2>
                <div className="manga-list-category">
                    {filteredComics.length > 0 ? (
                        filteredComics.map((comic, index) => (
                            <div className="comic3" key={index}>
                                <img src={comic.img} alt={comic.name} />
                                <p className="name3">{comic.name}</p>
                                <p className="sales3">
                                    {comic.author}<span>{comic.views}</span>
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No matching stories found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;

