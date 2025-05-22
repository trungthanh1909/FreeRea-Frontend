import React, { useEffect, useState } from 'react';
import '../styles/BookReview.scss';
import Navbar from "../components/Navbar";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from 'react-icons/fa';

interface Chapter {
    id: string;
    title: string;
}

interface BookData {
    imageUrl: string;
    title: string;
    author: string;
    description: string;
    categories: string[];
    rating: number;
    chapters: Chapter[];
}

const fetchMockBookData = (): Promise<BookData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2c/OnePiece62Cover.png',
                title: 'One Piece',
                author: 'Eiichiro Oda',
                description: 'Một câu chuyện về Luffy và hành trình trở thành Vua Hải Tặc.',
                categories: ['Phiêu lưu', 'Hành động', 'Hài hước'],
                rating: 4.8,
                chapters: [
                    { id: '1', title: 'Chương 1: Ra khơi' },
                    { id: '2', title: 'Chương 2: Zoro gia nhập' },
                    { id: '3', title: 'Chương 3: Cuộc phiêu lưu tiếp tục' },
                    { id: '4', title: 'Chương 4: Trận chiến ác liệt' },
                    { id: '5', title: 'Chương 5: Bí ẩn Grand Line' },
                ],
            });
        }, 1);
    });
};

const BookReview: React.FC = () => {
    const [bookData, setBookData] = useState<BookData | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        fetchMockBookData().then(setBookData);
    }, []);

    if (!bookData) return <div className="loading">Đang tải dữ liệu...</div>;

    return (
        <div className="container-book-review">
            <Navbar />
            <div className="Reviewpage-big">
                <div className="story-detail-bg"></div>

                <div className="story-detail-card">
                    <div className="story-img-wrap">
                        <img className="story-img" src={bookData.imageUrl} alt={bookData.title} />
                    </div>
                    <div className="story-info-main">
                        <div className="story-title">{bookData.title}</div>
                        <div className="story-author">Author: {bookData.author}</div>
                        <div className="story-tags">
                            {bookData.categories.map((cat, index) => (
                                <div className="story-tag" key={index}>{cat}</div>
                            ))}
                        </div>
                        <div className="story-summary-label">Description</div>
                        <div className="story-summary">{bookData.description}</div>
                        <div className="story-actions">
                            <button
                                className={`icon-btn ${isFavorite ? 'active' : ''}`}
                                onClick={() => setIsFavorite(!isFavorite)}
                                aria-label="Thêm vào yêu thích"
                            >
                                {isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
                            </button>

                            <button
                                className={`icon-btn ${isBookmarked ? 'active' : ''}`}
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                aria-label="Bookmark"
                            >
                                {isBookmarked ? <FaBookmark color="#007bff" size={24} /> : <FaRegBookmark size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                <section className="chapter-section">
                    <div className="chapter-section-title">Chapters</div>
                    <div className="chapter-list-scroll" role="list">
                        {bookData.chapters.map((chapter) => (
                            <button key={chapter.id} className="chapter-card" role="listitem">
                                {chapter.title}
                            </button>
                        ))}
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-links">
                            <a href="#">About Us</a>
                            <a href="#">Contact</a>
                            <a href="#">Terms of Service</a>
                        </div>
                        <div className="footer-copy">&copy; 2025 LiteraryApp. All rights reserved.</div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BookReview;
