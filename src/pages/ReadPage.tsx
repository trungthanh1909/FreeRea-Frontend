import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChapterList from "../components/ChapterList";
import { getBookById } from "../mocks/bookMocks";
import "../styles/ReadPage.scss";

const ReadPage: React.FC = () => {
    const { bookId } = useParams<{ bookId: string }>(); // 📌 Lấy ID truyện từ URL
    const book = getBookById(Number(bookId)); // 📌 Tìm sách theo ID
    const navigate = useNavigate(); // 📌 Để điều hướng khi nhấn "Đọc ngay"

    if (!book) {
        return <div>Không tìm thấy truyện</div>;
    }

    return (
        <div className="read-page">
            <Navbar />
            <div className="container">
                {/* 🔹 Thông tin truyện */}
                <div className="book-info">
                    <img src={book.image} alt={book.title} className="book-cover" />
                    <div className="book-details">
                        <h2>{book.title}</h2>
                        <p><strong>Tác giả:</strong> {book.author}</p>
                        <p><strong>Lượt xem:</strong> {book.views}</p>
                        <p><strong>Thể loại:</strong> {book.category}</p>
                        <p><strong>Mô tả:</strong> {book.description}</p>

                        <div className="buttons">
                            <button className="read-now-btn" onClick={() => navigate(`/book/${book.id}/chapter/${book.chapters[0]?.id}`)}>
                                📖 Đọc ngay
                            </button>
                            <button className="follow-btn">📌 Theo dõi</button>
                        </div>
                    </div>
                </div>

                {/* 🔹 Danh sách chương */}
                <ChapterList chapters={book.chapters} bookId={book.id} />
            </div>
        </div>
    );
};

export default ReadPage;
