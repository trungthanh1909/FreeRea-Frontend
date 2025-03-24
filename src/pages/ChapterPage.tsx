import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getChapterById } from "../mocks/bookMocks";
import "../styles/ChapterPage.scss";

const ChapterPage: React.FC = () => {
    const { bookId, chapterId } = useParams<{ bookId: string; chapterId: string }>();
    const chapter = getChapterById(Number(bookId), Number(chapterId));

    if (!chapter) {
        return <div>Không tìm thấy chương này</div>;
    }

    return (
        <div className="chapter-page">
            <Navbar />
            <div className="container">
                <h2>{chapter.title}</h2>
                <p>{chapter.content}</p>
                <div className="chapter-navigation">
                    <button>⬅ Chương trước</button>
                    <button>Chương tiếp theo ➡</button>
                </div>
            </div>
        </div>
    );
};

export default ChapterPage;
