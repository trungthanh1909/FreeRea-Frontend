
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../../styles/HomePage/MangaSection.scss";
import { Link } from "react-router-dom";
import { FaEye } from 'react-icons/fa';

import React, { useMemo } from "react";

import {
    useBooksByCreatedDate,
    useBooksByViewCount,
} from "../../hooks/bookService/useBook";

// Interface cho comic đã render
interface Comic {
    img: string;
    title: string;
    author: string;
    views: number | string;
    id: string;
}

// Component hiển thị danh sách comics với pagination
const ComicList: React.FC<{ comics: Comic[]; title: string }> = ({ comics, title }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsPerPage = 6;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < comics.length) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const currentComics = comics.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <>
            <p className="text-gray">{title}</p>
            <div className="container2">
                {currentIndex > 0 && (
                    <div className="arrow1" onClick={handlePrev}><AiOutlineLeft /></div>
                )}

                {currentComics.map((comic, i) => (
                    <div className="comic2" key={i}>
                        <Link to={`/book/review/${comic.id}`}>
                            <img src={comic.img} alt={comic.title} />
                        </Link>
                        <p className="name2">{comic.title}</p>
                        <p className="sales2">
                            {comic.author}
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <FaEye style={{ color: "#666" }} /> {comic.views}
              </span>
                        </p>
                    </div>
                ))}

                {currentIndex + itemsPerPage < comics.length && (
                    <div className="arrow1" onClick={handleNext}><AiOutlineRight /></div>
                )}
            </div>
        </>
    );
};

// Component chính dùng 2 query hook
const MangaComponent = () => {
    const { data: createdBooks, isLoading: loadingCreated } = useBooksByCreatedDate();
    const { data: viewedBooks, isLoading: loadingViewed } = useBooksByViewCount();

    // Chuyển đổi dữ liệu từ API sang định dạng Comic
    const mapBooksToComics = (books: any[] = []): Comic[] =>
        books.map((book) => ({
            id: book.id,
            title: book.title,
            author: book.author ?? "Unknown",
            views: book.viewCount ?? 0,
            img: book.coverImageUrl ?? "",
        }));

    const createdComics = useMemo(() => mapBooksToComics(createdBooks), [createdBooks]);
    const viewedComics = useMemo(() => mapBooksToComics(viewedBooks), [viewedBooks]);

    if (loadingCreated || loadingViewed) return <div>Loading...</div>;

    return (
        <div className="manga-section">
            <ComicList comics={viewedComics} title="Recommended Stories" />
            <ComicList comics={createdComics} title="Updated Stories" />
        </div>
    );
};

export default MangaComponent;
