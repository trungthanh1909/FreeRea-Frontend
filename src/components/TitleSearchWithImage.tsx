
import "../styles/TitleSearchWithImage.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
interface Book {
    id: number;
    title: string;
    image: string;
}

interface Props {
    books: Book[];
    search: string;
    onSelect: () => void;
}
const SearchDropdown: React.FC<Props> = ({ books, search, onSelect }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!search || books.length === 0) return null;

    return (
        <div className={`search-results-dropdown ${isScrolled ? "scrolled" : ""}`}>
            {books.map((book) => (
                <Link
                    to={`/book/${book.id}`}
                    className="search-result-item"
                    key={book.id}
                    onClick={onSelect}
                >
                    <img src={book.image} alt={book.title} />
                    <span>{book.title}</span>
                </Link>
            ))}
        </div>
    );
};export default SearchDropdown;