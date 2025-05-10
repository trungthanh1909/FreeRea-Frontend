import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types";
import "../styles/BookList.scss";

interface BookListProps {
    books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 8; // 8 sách mỗi trang (2 hàng x 4 cột)

    // Tính số trang
    const totalPages = Math.ceil(books.length / booksPerPage);

    // Cắt danh sách sách theo trang hiện tại
    const startIndex = (currentPage - 1) * booksPerPage;
    const displayedBooks = books.slice(startIndex, startIndex + booksPerPage);

    const handleClick = (bookId: number) => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            navigate(`/read/${bookId}`);
            document.body.classList.remove("fade-out");
        }, 300);
    };

    // Chuyển trang
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="book-list">
            {/* Danh sách sách */}
            <div className="book-list__container">
                {displayedBooks.map((book) => (
                    <div key={book.id} className="book-item" onClick={() => handleClick(book.id)}>
                        <img src={book.image} alt={book.title} className="book-thumbnail" />
                        <div className="book-info">
                            <h3 className="book-title">{book.title}</h3>
                            <p><strong>Chapter:</strong> {book.latestChapter}</p>
                            <p><strong>Lượt xem:</strong> <span className="book-views">{book.views ?? 0}</span></p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>«</button>

                {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                    const pageNumber = i + 1;
                    return (
                        <button
                            key={pageNumber}
                            className={currentPage === pageNumber ? "active" : ""}
                            onClick={() => goToPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                {totalPages > 7 && <span>...</span>}

                {totalPages > 7 && (
                    <button onClick={() => goToPage(totalPages)}>{totalPages}</button>
                )}

                <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>»</button>
            </div>
        </div>
    );
};

export default BookList;
