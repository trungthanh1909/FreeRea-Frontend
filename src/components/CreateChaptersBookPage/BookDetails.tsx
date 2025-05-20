import React, { useState } from 'react';
import "../styles/CreateChaptersBookPage/BookDetails.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import BookInfoSection from './BookInfoSection';
import ChapterEditor from './ChapterEditor';
import ChapterList from './ChapterList';


interface BookForm {
    title: string;
    author: string;
    description: string;
    categories: string[];
    imageUrl: string;
}

interface Chapter {
    title: string;
    images: File[];
}

const BookDetails: React.FC<{ book: BookForm }> = ({ book }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as { book: BookForm; chapters: Chapter[] } | null;

    const [currentBook, setCurrentBook] = useState<BookForm>(
        locationState?.book || { title: '', author: '', description: '', categories: [], imageUrl: '' }
    );
    const [editedBook, setEditedBook] = useState({ ...book });
    const [isEditing, setIsEditing] = useState(false);
    const [newImage, setNewImage] = useState<string | null>(null);

    const [chapters, setChapters] = useState<Chapter[]>(locationState?.chapters || []);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = () => setShowConfirm(true);
    const confirmSubmit = () => {
        setShowConfirm(false);
        const processedChapters = chapters.map((chapter) => ({
            ...chapter,
            images: chapter.images.map((img) => URL.createObjectURL(img)),
        }));
        const finalBook = { ...currentBook, imageUrl: newImage || currentBook.imageUrl };
        navigate('/review', { state: { book: finalBook, chapters: processedChapters } });
    };

    return (
        <div className="book-details">
            <BookInfoSection
                currentBook={currentBook}
                editedBook={editedBook}
                isEditing={isEditing}
                newImage={newImage}
                setEditedBook={setEditedBook}
                setCurrentBook={setCurrentBook}
                setIsEditing={setIsEditing}
                setNewImage={setNewImage}
            />

            <div className="main-panel">
                <ChapterEditor setChapters={setChapters} />
                <ChapterList chapters={chapters} setChapters={setChapters} />
            </div>

            {showConfirm && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Are you sure you want to submit?</p>
                        <div className="modal-actions">
                            <button className="confirm-btn" onClick={confirmSubmit}>Yes</button>
                            <button className="cancel-btn" onClick={() => setShowConfirm(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="submit-container">
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default BookDetails;
