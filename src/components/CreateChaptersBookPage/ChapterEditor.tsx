import React, { useState } from 'react';
import "../../styles/CreateChaptersBookPage/ChapterEditor.scss";

interface Chapter {
    title: string;
    images: File[];
}

interface Props {
    setChapters: React.Dispatch<React.SetStateAction<Chapter[]>>;
}

const ChapterEditor: React.FC<Props> = ({ setChapters }) => {
    const [newTitle, setNewTitle] = useState('');
    const [newImages, setNewImages] = useState<File[]>([]);

    const handleAddChapter = () => {
        if (!newTitle.trim()) return;
        setChapters((prev) => [...prev, { title: newTitle, images: newImages }]);
        setNewTitle('');
        setNewImages([]);
    };

    const handleDeleteNewImage = (index: number) => {
        const updated = [...newImages];
        updated.splice(index, 1);
        setNewImages(updated);
    };

    return (
        <div className="left-panel">
            <h3>Add New Chapter</h3>
            <input
                type="text"
                placeholder="Chapter title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />

            {!newTitle.trim() ? (
                <div className="action-buttons">
                    <button onClick={() => newTitle.trim() && setNewTitle(newTitle)}>Start Adding Images</button>
                </div>
            ) : (
                <div className="action-buttons">
                    <button onClick={() => { setNewTitle(''); setNewImages([]); }}>Cancel</button>
                    <button onClick={handleAddChapter}>Add New Chapter</button>
                </div>
            )}

            {newTitle.trim() && (
                <>
                    <div className="custom-upload2">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) =>
                                setNewImages(Array.from(e.target.files || []).concat(newImages))
                            }
                        />
                        <strong>Add the files in chapter</strong> +
                    </div>

                    <div className="image-preview">
                        {newImages.map((img, i) => (
                            <div key={i} className="preview-item">
                                <img
                                    src={URL.createObjectURL(img)}
                                    alt={`preview-${i}`}
                                    className="thumb"
                                />

                                <button
                                    className="delete-image-btn"
                                    onClick={() => handleDeleteNewImage(i)}
                                >
                                    ✖
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ChapterEditor;
