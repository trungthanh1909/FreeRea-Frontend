import React, { useEffect, useState } from "react";
import "../../styles/HomePage/Movingimages.scss";
import { Link } from "react-router-dom";

import { useGetAllBooks } from "../../hooks/bookService/useBook";



const MovingImages = () => {
    const { data, isLoading, error } = useGetAllBooks();
    const [currentIndex, setCurrentIndex] = useState(0);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const rawBooks = data?.data || [];

    const mappedBooks = rawBooks.map((book) => ({
        id: book.id,
        title: book.title,
        description: book.description ?? "No description available.",
        previewImages: book.coverUrl ? [book.coverUrl] : [],
        tags: book.categories ?? [],

        episodes: `${book.chapterCount}/?`,

        Images: book.coverUrl ? [book.coverUrl] : [],
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === mappedBooks.length - 1 ? 0 : prev + 1
            );
        }, 10000);
        return () => clearInterval(interval);
    }, [mappedBooks.length]);

    const currentData = mappedBooks[currentIndex];

    return (
        <div id="content-container">
            <div id="recommendation">
                <div className="recommendation-header">
                    <div className="recommendation-title">
                        <h2>Recommended for you</h2>
                        <p>Choose your favorite!</p>
                    </div>
                    <div className="recommendation-background">
                        <img
                            src={currentData.previewImages[0]}
                            alt="Background"
                            className="image-card"
                        />
                    </div>
                </div>

                <div className="recommendation-card">
                    <h3>{currentData.title}</h3>
                    <div className="recommendation-tags">
                        {currentData.tags.map((tag: string, i: number) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                    <div className="rating">
                        <span>⏳ {currentData.episodes}</span>

                    </div>

                    <div className="recommendation-divider"></div>
                    <p className="recommendation-description">{currentData.description}</p>

                    <div className="gap">
                        {currentData.Images.map((img, i) => (
                            <div className="image-container-baby" key={i}>
                                <Link to={`/book/review/${currentData.id}`}>
                                    <img src={img} alt={`Thumb ${i + 1}`} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="image-container">
                        <Link to={`/book/review/${currentData.id}`}>
                            <img
                                src={currentData.previewImages[0]}
                                alt="Main Preview"
                                className="image-card"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovingImages;


