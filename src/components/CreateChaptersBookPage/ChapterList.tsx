import React, { useState } from 'react';
import "../styles/CreateChaptersBookPage/BookDetails.scss";
interface Chapter {
    title: string;
    images: File[];
}

interface Props {
    chapters: Chapter[];
    setChapters: React.Dispatch<React.SetStateAction<Chapter[]>>;
}

const ChapterList: React.FC<Props> = ({ chapters, setChapters }) => {
    const [openChapters, setOpenChapters] = useState<{ [key: number]: boolean }>({});

    const toggleChapter = (index: number) => {
        setOpenChapters((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const handleDeleteChapter = (index: number) => {
        const updated = [...chapters];
        updated.splice(index, 1);
        setChapters(updated);
        setOpenChapters((prev) => {
            const copy = { ...prev };
            delete copy[index];
            return copy;
        });
    };

    const handleDeleteChapterImage = (chapterIndex: number, imgIndex: number) => {
        const updated = [...chapters];
        updated[chapterIndex].images.splice(imgIndex, 1);
        setChapters(updated);
    };

    const handleAddChapterImages = (chapterIndex: number, files: FileList | null) => {
        if (!files) return;
        const newFiles = Array.from(files);
        setChapters((prev) => {
            const copy = [...prev];
            copy[chapterIndex] = {
                ...copy[chapterIndex],
                images: [...copy[chapterIndex].images, ...newFiles],
            };
            return copy;
        });
    };

    return (
        <div className="right-panel">
            <h3 style={{ marginTop: '2rem' }}>Chapter List</h3>
            <div className="chapter-scroll">
                {chapters.length === 0 && <p>No chapters yet.</p>}
                {chapters.map((chapter, index) => (
                    <div key={index} className="chapter-item">
                        <div className="chapter-header">
                            <div className="chapter-title" onClick={() => toggleChapter(index)}>
                                <span>{openChapters[index] ? '▼' : '▶'}</span>{' '}
                                <strong>{chapter.title}</strong>
                            </div>

                            <label className="custom-file-upload">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => handleAddChapterImages(index, e.target.files)}
                                />
                                +
                            </label>

                            <button onClick={() => handleDeleteChapter(index)}>❌</button>
                        </div>

                        {openChapters[index] && (
                            <div className="image-list-vertical">
                                {chapter.images.length === 0 && <p>No images</p>}
                                {chapter.images.map((img, i) => (
                                    <div key={i} className="image-row">
                                        <img src={URL.createObjectURL(img)} alt={`img-${i}`} className="thumb-small" />
                                        <span className="filename">{img.name}</span>
                                        <button className="delete-image-btn" onClick={() => handleDeleteChapterImage(index, i)}>
                                            ✖
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ChapterList;
