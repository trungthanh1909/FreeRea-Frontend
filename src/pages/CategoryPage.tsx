import React from "react";
import { useParams } from "react-router-dom";
import { getBookList } from "../mocks/bookMocks"; // ✅ Import danh sách sách
import { Book } from "../types/books";
import "../styles/CategoryPage.scss"; // ✅ SCSS nếu có

const CategoryPage: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>(); // ✅ Lấy tên thể loại từ URL

    // 🔹 Lọc danh sách sách theo thể loại
    const booksByCategory: Book[] = getBookList().filter((book) =>
        book.category.includes(categoryName || "")
    );

    return (
        <div className="category-page">
            <h2>{categoryName}</h2>
            <div className="book-list">
                {booksByCategory.length > 0 ? (
                    booksByCategory.map((book) => (
                        <div key={book.id} className="book-item">
                            <img src={book.image} alt={book.title} />
                            <div>
                                <h5>{book.title}</h5>
                                <p>Tác giả: {book.author}</p>
                                <p>Lượt xem: {book.views}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không có sách nào trong thể loại này.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
