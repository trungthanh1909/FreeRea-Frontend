import React from "react";
import {getTopRatedBooks } from "../mocks/bookMocks";
import { Book } from "../types/book";
import "../styles/TopRatedBooks.scss"; // ✅ Import SCSS

const TopRatedBooks: React.FC = () => {
    const books: Book[] = getTopRatedBooks(); // ✅ Lấy dữ liệu từ mock

    return (
        <div className="top-rated-books">
            <h4>📚 Truyện Được Đánh Giá Cao</h4>
            <div className="book-list">
                {books.map((book) => (
                    <div key={book.id} className="book-item">
                        <img src={book.image} alt={book.title} />
                        <div className="book-info">
                            <span className="title">{book.title}</span>
                            <span className="author">{book.author}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatedBooks;
