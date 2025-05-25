import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CommentSection from"../components/ReadPage/CommentSection";
import "../styles/ReadPage/ReadingPage.scss";
import Navbar from "../components/Navbar";


import { useGetChaptersByBookId } from "../hooks/chapterService/usePublicChapter";


interface Chapter {
    id: string;
    title: string;
    images: string[];
    content?: string;
}

const ReadingForm = () => {
    const location = useLocation();
    const bookId: string = location.state?.bookId;

    const { data: chaptersData, isLoading } = useGetChaptersByBookId(bookId);
    const rawChapters = chaptersData?.data || [];

    const chapters: Chapter[] = rawChapters
        .filter((ch) => !!ch.id && !!ch.title)
        .map((ch) => ({
            id: ch.id!,
            title: ch.title!,
            images: ch.images || [],
            content: ch.content ?? "",
        }));

    const [chapterIndex, setChapterIndex] = useState<number>(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [chapterIndex]);

    const updateChapter = (num: number) => {
        if (num >= 0 && num < chapters.length) {
            setChapterIndex(num);
        }
    };

    if (!bookId) {
        return <div style={{ padding: '20px' }}>Missing Book ID</div>;
    }

    if (isLoading) {
        return <div style={{ padding: '20px' }}>Loading chapters...</div>;
    }

    if (chapters.length === 0) {
        return <div style={{ padding: '20px' }}>No chapters found.</div>;
    }

    const currentChapter = chapters[chapterIndex];

    return (
        <div className="reading-container">
            <Navbar />
            <div className="chapter-navigation-big">
                <div className="chapter-navigation">
                    <button onClick={() => updateChapter(chapterIndex - 1)} disabled={chapterIndex === 0}>
                        Previous
                    </button>
                    <select value={chapterIndex} onChange={(e) => updateChapter(parseInt(e.target.value))}>
                        {chapters.map((chapter, i) => (
                            <option key={chapter.id} value={i}>
                                Chapter {i + 1} - {chapter.title}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={() => updateChapter(chapterIndex + 1)}
                        disabled={chapterIndex === chapters.length - 1}
                    >
                        Next
                    </button>
                </div>

                <h2 className="chapter-title">{currentChapter.title}</h2>

                {currentChapter.images?.length > 0 && (
                    <div className="chapter-image-gallery">
                        {currentChapter.images.map((imgUrl, idx) => (
                            <img key={idx} src={imgUrl} alt={`Chapter image ${idx + 1}`} className="chapter-image" />
                        ))}
                    </div>
                )}

                {currentChapter.content && (
                    <div className="chapter-content">{currentChapter.content}</div>
                )}

                <CommentSection chapterId={chapterIndex} />
                {/* Hoặc: <CommentSection chapterId={currentChapter.id} /> nếu prop nhận string */}
            </div>
        </div>
    );
};

export default ReadingForm;
