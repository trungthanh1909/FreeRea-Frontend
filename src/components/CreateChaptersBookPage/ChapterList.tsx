import React, { useState } from 'react';
import "../../styles/CreateChaptersBookPage/ChapterList.scss";
import { DragDropContext, Droppable, Draggable,DropResult } from "@hello-pangea/dnd";
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

    const handleDragEnd = (result: DropResult, chapterIndex: number) => {
        if (!result.destination) return;
        const updated = [...chapters];
        const imgs = Array.from(updated[chapterIndex].images);
        const [moved] = imgs.splice(result.source.index, 1);
        imgs.splice(result.destination.index, 0, moved);
        updated[chapterIndex].images = imgs;
        setChapters(updated);
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
                            <DragDropContext
                                onDragEnd={(result) => handleDragEnd(result, index)}
                            >
                                <Droppable droppableId={`chapter-${index}`}>
                                    {(provided) => (
                                        <div
                                            className="image-list-vertical"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            {chapter.images.length === 0 && <p>No images</p>}
                                            {chapter.images.map((img, i) => (
                                                <Draggable key={i} draggableId={`${index}-${i}`} index={i}>
                                                    {(provided) => (
                                                        <div
                                                            className="image-row"
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <img
                                                                src={URL.createObjectURL(img)}
                                                                alt={`img-${i}`}
                                                                className="thumb-small"
                                                            />
                                                            <span className="filename">{img.name}</span>
                                                            <button
                                                                className="delete-image-btn"
                                                                onClick={() =>
                                                                    handleDeleteChapterImage(index, i)
                                                                }
                                                            >
                                                                ✖
                                                            </button>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ChapterList;
