import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CommentSection from"../components/ReadPage/CommentSection";
import "../styles/ReadPage/ReadingPage.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Chapter {
    title: string;
    images: string[];
    content?: string;
}

const ReadingForm = () => {
    const location = useLocation();
    const chapters: Chapter[] = location.state?.chapters || [];

    const [chapterIndex, setChapterIndex] = useState<number>(0);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [chapterIndex]);
    const updateChapter = (num: number) => {
        if (num >= 0 && num < chapters.length) {
            setChapterIndex(num);
        }
    };
    if (chapters.length === 0) {
        return <div style={{ padding: '20px' }}>No Data</div>;
    }

    const currentChapter = chapters[chapterIndex];


    return (
        <div className="reading-container">
            <Navbar/>
            <div className="chapter-navigation-big">
                <div className="chapter-navigation">
                    <button onClick={() => updateChapter(chapterIndex - 1)} disabled={chapterIndex === 0}>Previous</button>
                    <select value={chapterIndex} onChange={(e) => updateChapter(parseInt(e.target.value))}>
                        {chapters.map((chapter, i) => (
                            <option key={i} value={i}>
                                Chapter {i + 1} - {chapter.title}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => updateChapter(chapterIndex + 1)} disabled={chapterIndex === chapters.length - 1}>Next</button>
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


            </div>
            <Footer />
        </div>
    );
};

export default ReadingForm;
