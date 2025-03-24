import React from "react";
import Navbar from "../components/Navbar";
import CategoryList from "../components/CategoryList";
import Slidebar from "../components/Slidebar";
import RankingList from "../components/RankingList";
import HotBooks from "../components/HotBooks";
import BookList from "../components/BookList";
import RecentBooks from "../components/RecentBooks";
import UserQA from "../components/UserQA";
import Footer from "../components/Footer";
import { getBookList, getHotBooks, getRankingBooks, getRecentBooks } from "../mocks/bookMocks";
import { getCategories } from "../mocks/categoryMocks";

import "../styles/Home.scss";

const Home: React.FC = () => {
    const hotBooks = getHotBooks();
    const bookList = getBookList();
    const rankingBooks = getRankingBooks();
    const recentBooks = getRecentBooks();
    const categories = getCategories();

    return (
        <div className="home-container">
            {/* Thanh Navbar */}
            <Navbar />

            {/* Thanh thể loại */}
            <CategoryList categories={categories} />

            <div className="main-content container">
                {/* Cột Trái: Slidebar + Bảng xếp hạng + Mới cập nhật */}
                <div className="left-section">
                    <Slidebar books={hotBooks} />
                    <RankingList books={rankingBooks} />
                    <RecentBooks books={recentBooks} />
                </div>

                {/* Cột Giữa: Hot Books + Danh sách truyện */}
                <div className="center-section">
                    <HotBooks books={hotBooks} />
                    <BookList books={bookList} />
                </div>

                {/* Cột Phải: Hỏi đáp người dùng */}
                <div className="right-section">
                    <UserQA />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
