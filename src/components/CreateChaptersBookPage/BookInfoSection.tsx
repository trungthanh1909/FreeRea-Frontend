import React from 'react';
import "../../styles/CreateChaptersBookPage/BookInfoSection.scss";

interface BookForm {
    title: string;
    author: string;
    description: string;
    categories: string[];
    imageUrl: string;
}

interface Props {
    currentBook: BookForm;
    editedBook: BookForm;
    isEditing: boolean;
    newImage: string | null;
    setEditedBook: (book: BookForm) => void;
    setCurrentBook: (book: BookForm) => void;
    setIsEditing: (val: boolean) => void;
    setNewImage: (val: string | null) => void;
}

const BookInfoSection: React.FC<Props> = ({
                                              currentBook,
                                              editedBook,
                                              isEditing,
                                              newImage,
                                              setEditedBook,
                                              setCurrentBook,
                                              setIsEditing,
                                              setNewImage,
                                          }) => {
    const handleSaveUpdate = () => {
        const updatedBook = { ...editedBook };
        if (newImage) updatedBook.imageUrl = newImage;
        setCurrentBook(updatedBook);
        setIsEditing(false);
        setNewImage(null);
        alert('Book information updated!');
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="top-section">
            <div className="image-edit-wrapper">
                <img
                    src={newImage || currentBook.imageUrl}
                    alt="Book cover"
                    className="preview-image"
                />
                {isEditing && (
                    <label className="edit-image-label-image">
                        <span className="upload-icon-image">+</span>
                        <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                    </label>
                )}
            </div>

            <div className="book-info-upload">
                <div className="info-actions-upload">
                    {!isEditing ? (
                        <button onClick={() => setIsEditing(true)} className="action-btn-upload">Update</button>
                    ) : (
                        <>
                            <button onClick={handleSaveUpdate} className="action-btn-upload">Save</button>
                            <button onClick={() => setIsEditing(false)} className="action-btn-upload">Cancel</button>
                        </>
                    )}
                </div>

                {isEditing ? (
                    <input
                        value={editedBook.title}
                        onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
                        className="edit-input"
                        placeholder="Title"
                    />
                ) : (
                    <h2>{currentBook.title}</h2>
                )}

                {isEditing ? (
                    <input
                        value={editedBook.author}
                        onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
                        className="edit-input"
                        placeholder="Author"
                    />
                ) : (
                    <p><strong>Author:</strong> {currentBook.author}</p>
                )}

                <div className="categories">
                    {currentBook.categories.map((cat, idx) => (
                        <span key={idx} className="tag">{cat}</span>
                    ))}
                </div>

                {isEditing ? (
                    <textarea
                        value={editedBook.description}
                        onChange={(e) => setEditedBook({ ...editedBook, description: e.target.value })}
                        className="edit-textarea"
                        placeholder="Description"
                    />
                ) : (
                    <p>{currentBook.description}</p>
                )}
            </div>
        </div>
    );
};

export default BookInfoSection;
