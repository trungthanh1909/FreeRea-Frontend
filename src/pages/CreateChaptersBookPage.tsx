import React from "react";
import { useLocation } from "react-router-dom";
import BookDetails from "../components/CreateChaptersBookPage/BookDetails";


const BookDetailsPage: React.FC = () => {
    const location = useLocation();
    const book = location.state?.book;

    if (!book) return <div>No book data found.</div>;

    return <BookDetails book={book} />;
};

export default BookDetailsPage;
