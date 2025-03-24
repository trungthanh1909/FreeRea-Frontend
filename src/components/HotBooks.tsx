import React from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/books";
import "../styles/HotBooks.scss";

interface HotBooksProps {
    books: Book[];
}

const HotBooks: React.FC<HotBooksProps> = ({ books }) => {
    const navigate = useNavigate();

    const handleClick = (bookId: number) => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            navigate(`/read/${bookId}`);
            document.body.classList.remove("fade-out");
        }, 300);
    };

    return (
        <div className="hot-books">
            <h3>🔥 Truyện Hot</h3>
            <div className="hot-books__list">
                {books.map((book) => (
                    <div key={book.id} className="hot-books__item" onClick={() => handleClick(book.id)}>
                        <img src={book.image} alt={book.title} className="hot-books__image" />
                        <div className="hot-books__overlay">
                            <h4>{book.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotBooks;
