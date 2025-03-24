import React from "react";
import { Link } from "react-router-dom";
import "../styles/ChapterList.scss";

interface Chapter {
    id: number;
    title: string;
}

interface ChapterListProps {
    chapters: Chapter[];
    bookId: number;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, bookId }) => {
    return (
        <div className="chapter-list">
            <h3>Danh sách Chương</h3>
            <ul>
                {chapters.map((chapter) => (
                    <li key={chapter.id}>
                        <Link to={`/read/${bookId}/chapter/${chapter.id}`}>
                            {chapter.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChapterList;
