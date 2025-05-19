import React from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/book";
import { getRecentBooks } from "../mocks/bookMocks"; // ✅ Import từ bookMocks.ts
import "../styles/RecentBooks.scss";

const RecentBooks: React.FC = () => {
    const navigate = useNavigate();
    const recentBooks: Book[] = getRecentBooks(); // ✅ Lấy danh sách truyện mới cập nhật

    const handleClick = (bookId: number) => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            navigate(`/read/${bookId}`);
            document.body.classList.remove("fade-out");
        }, 300);
    };

    return (
        <div className="recent-books">
            <h4>📚 Truyện Mới Cập Nhật</h4>
            {recentBooks.map((book) => (
                <div key={book.id} className="book-item" onClick={() => handleClick(book.id)}>
                    <img src={book.image} alt={book.title} className="book-thumbnail" />
                    <div className="book-info">
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentBooks;
