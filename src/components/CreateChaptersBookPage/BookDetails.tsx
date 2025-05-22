import React, { useState } from 'react';
import "../../styles/CreateChaptersBookPage/BookDetails.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import BookInfoSection from './BookInfoSection';
import ChapterEditor from './ChapterEditor';
import ChapterList from './ChapterList';
import Navbar from "../Navbar";

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

const BookDetails: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as { book: BookForm; chapters: Chapter[] } | null;

    if (!locationState || !locationState.book) {
        return <div className="no-data">No book data provided.</div>;
    }

    const [currentBook, setCurrentBook] = useState<BookForm>({
        title: locationState.book.title ?? '',
        author: locationState.book.author ?? '',
        description: locationState.book.description ?? '',
        categories: locationState.book.categories ?? [],
        imageUrl: locationState.book.imageUrl ?? ''
    });

    const [editedBook, setEditedBook] = useState<BookForm>({ ...currentBook });
    const [isEditing, setIsEditing] = useState(false);
    const [newImage, setNewImage] = useState<string | null>(null);

    const [chapters, setChapters] = useState<Chapter[]>(locationState.chapters || []);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = () => setShowConfirm(true);

    const confirmSubmit = () => {
        setShowConfirm(false);

        const processedChapters = chapters.map((chapter) => ({
            ...chapter,
            images: chapter.images.map((img) => URL.createObjectURL(img)),
        }));

        const finalBook = {
            ...editedBook,
            imageUrl: newImage || editedBook.imageUrl || currentBook.imageUrl
        };

        navigate('/admin/review', {
            state: {
                book: finalBook,
                chapters: processedChapters
            }
        });
    };

    return (
        <div className="create-chapter">
            <Navbar />

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

                <div className="submit-container">
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                </div>
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
        </div>
    );
};

export default BookDetails;