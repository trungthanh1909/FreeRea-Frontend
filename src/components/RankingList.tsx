import React from "react";
import { Book } from "../types/book";
import "../styles/RankingList.scss";  // Import SCSS

interface RankingListProps {
    books: Book[];
}

const RankingList: React.FC<RankingListProps> = ({ books }) => {
    return (
        <div className="ranking-list mt-3 p-3 bg-light rounded shadow-sm">
            <h4 className="mb-3">📊 Bảng Xếp Hạng</h4>
            <ul className="list-group">
                {books.map((book, index) => (
                    <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{index + 1}. {book.title}</span>
                        <span className="badge bg-primary rounded-pill">{book.views} lượt xem</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RankingList;
