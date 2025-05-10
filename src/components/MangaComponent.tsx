import React from 'react';
import { Book } from "../types/books";
import "../styles/MangaComponent.scss";

type MangaComponentProps = {
    hotBooks: Book[];
    rankingBooks: Book[];
    recentBooks: Book[];
};

type SectionProps = {
    title: string;
    books: Book[];
};

const MangaComponent: React.FC<MangaComponentProps> = ({ hotBooks, rankingBooks, recentBooks }) => {
    return (
        <div className="main-content">
            <div className="story-list">
                <Section title="Truyện Đề Cử" books={hotBooks} />
                <Section title="Truyện Cập Nhật" books={recentBooks} />
                <Section title="Bảng Xếp Hạng" books={rankingBooks} />
            </div>
        </div>
    );
};

const Section: React.FC<SectionProps> = ({ title, books }) => {
    return (
        <>
            <p className="text-gray">{title}</p>
            <div className="line"></div>
            <div className="container2">
                {books.map((book) => (
                    <div className="comic2" key={book.id}>
                        <img src={book.image} alt={book.title} />
                        <p className="name2">{book.title}</p>
                        <p className="sales2">
                            Tác giả <span>{book.author || "Không rõ"}</span>
                        </p>
                    </div>
                ))}
                <div className="arrow1">»</div>
            </div>
        </>
    );
};

export default MangaComponent;
