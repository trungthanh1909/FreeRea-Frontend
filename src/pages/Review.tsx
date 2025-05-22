import { useLocation,useNavigate  } from 'react-router-dom';
import '../styles/Review/ReviewPage.scss';
import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";

const ReviewPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { book, chapters } = location.state || {};

    useEffect(() => {
        if (!book) navigate('/admin/create');
    }, [book, navigate]);

    const [currentBook, setCurrentBook] = useState({ ...book });
    const [editedBook, setEditedBook] = useState({ ...book });
    const [isEditing, setIsEditing] = useState(false);
    const [newImage, setNewImage] = useState<string | null>(null);

    const [showModal, setShowModal] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDeleteClick = () => {
        setConfirmDelete(false);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        if (confirmDelete) {
            setShowModal(false);
            alert('Book deleted!');
            navigate('/admin');
        }
    };

    const handleUpdate = () => {
        navigate("/admin/create/createchapter", { state: { book, chapters } });
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
        <div className="reviewpage-container-big">
            <Navbar/>
            <div className="reviewpage-container">

                <div className="story-detail-bg"></div>

                <div className="story-detail-card">
                    <div className="story-img-wrap">
                        <img className="story-img" src={newImage || currentBook.imageUrl} alt={currentBook.title}/>
                        {isEditing && (
                            <label className="image-upload-label">
                                <span className="upload-icon">+</span>
                                <input type="file" accept="image/*" onChange={handleImageUpload} hidden/>
                            </label>
                        )}
                    </div>

                    <div className="story-info-main">
                        <div className="info-actions">
                            {!isEditing ? (
                                <>
                                    <button onClick={handleUpdate} className="action-btn">Update</button>
                                    <button onClick={handleDeleteClick} className="action-btn delete-btn">Delete
                                    </button>
                                </>
                            ) : (
                                <button onClick={() => setIsEditing(false)} className="action-btn">Cancel</button>
                            )}
                        </div>

                        {isEditing ? (
                            <input
                                value={editedBook.title}
                                onChange={(e) => setEditedBook({...editedBook, title: e.target.value})}
                                className="edit-input"
                            />
                        ) : (
                            <div className="story-title">{currentBook.title}</div>
                        )}

                        {isEditing ? (
                            <input
                                value={editedBook.author}
                                onChange={(e) => setEditedBook({...editedBook, author: e.target.value})}
                                className="edit-input"
                            />
                        ) : (
                            <div className="story-author">Author: {currentBook.author}</div>
                        )}

                        <div className="story-tags">
                            {currentBook.categories.map((cat: string, idx: number) => (
                                <div className="story-tag" key={idx}>{cat}</div>
                            ))}
                        </div>

                        <div className="story-summary-label">Descriptions</div>
                        {isEditing ? (
                            <textarea
                                value={editedBook.description}
                                onChange={(e) => setEditedBook({...editedBook, description: e.target.value})}
                                className="edit-textarea"
                            />
                        ) : (
                            <div className="story-summary">{currentBook.description}</div>
                        )}
                    </div>
                </div>

                <section className="chapter-section">
                    <div className="chapter-section-title">Chapters</div>
                    <div className="chapter-list-vertical">
                        {chapters?.length > 0 ? (
                            chapters.map((chapter: any, index: number) => (
                                <button
                                    key={index}
                                    className="chapter-card"
                                    onClick={() => navigate('/admin/review/reading', {state: {chapters}})}
                                >
                                    {chapter.title}
                                </button>
                            ))
                        ) : (
                            <p style={{marginLeft: '20px'}}>There are no chapters yet.</p>
                        )}
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-links">
                            <a href="#">About Us</a>
                            <a href="#">Contact</a>
                            <a href="#">Terms of Service</a>
                        </div>
                        <div className="footer-copy">&copy; 2025 LiteraryApp. All rights reserved.</div>
                    </div>
                </footer>

                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content-review">
                            <div className="modal-icon">⚠️</div>
                            <p>Are you sure you want to delete this story?</p>
                            <div className="modal-checkbox">
                                <input
                                    type="checkbox"
                                    id="confirm"
                                    checked={confirmDelete}
                                    onChange={(e) => setConfirmDelete(e.target.checked)}
                                />
                                <label htmlFor="confirm">I confirm deletion</label>
                            </div>
                            <div className="modal-buttons">
                                <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                                <button
                                    className="delete-btn"
                                    onClick={handleConfirmDelete}
                                    disabled={!confirmDelete}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
            );
            };

            export default ReviewPage;