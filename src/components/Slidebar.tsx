import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/book";
import "../styles/Slidebar.scss";

interface SlidebarProps {
    books: Book[];
}

const Slidebar: React.FC<SlidebarProps> = ({ books }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
        }, 3000); // Chuyển ảnh mỗi 3 giây

        return () => clearInterval(interval);
    }, [books.length]);

    const handleClick = () => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            navigate(`/read/${books[currentIndex].id}`);
            document.body.classList.remove("fade-out");
        }, 300);
    };

    return (
        <div className="slidebar">
            {books.length > 0 && (
                <div className="slide-item" onClick={handleClick}>
                    <img src={books[currentIndex].image} alt={books[currentIndex].title} className="slide-img" />
                    <div className="slide-info">
                        <h3>{books[currentIndex].title}</h3>
                        <p>{books[currentIndex].author}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slidebar;
