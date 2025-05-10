import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getHotBooks, getRankingBooks, getRecentBooks } from "../mocks/bookMocks";
import { getRecommendations, Recommendation } from "../mocks/recommendationMocks";
import RecommendationCard from "../components/RecommendationCard";
import MangaComponent from "../components/MangaComponent";
import { Book } from "../types";
import "../styles/Home.scss";

const Home: React.FC = () => {
    const [hotBooks, setHotBooks] = useState<Book[]>([]);
    const [rankingBooks, setRankingBooks] = useState<Book[]>([]);
    const [recentBooks, setRecentBooks] = useState<Book[]>([]);
    const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

    useEffect(() => {
        setHotBooks(getHotBooks());
        setRankingBooks(getRankingBooks());
        setRecentBooks(getRecentBooks());
        setRecommendations(getRecommendations());
    }, []);

    return (
        <div className="container-big">
            <Navbar />
            <div className="container-all">
                <div id="content-container">
                    <div id="recommendation">
                        <div className="recommendation-header">
                            <div className="recommendation-title">
                                <h2>Đề xuất cho bạn</h2>
                                <p>Chọn mục yêu thích của bạn!</p>
                            </div>
                            <div className="recommendation-background">
                                <img
                                    src="img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif"
                                    alt="Image 1"
                                    className="image-card"
                                />
                                <img
                                    src="img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif"
                                    alt="Image 2"
                                    className="image-card"
                                />
                                <img
                                    src="img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif"
                                    alt="Image 3"
                                    className="image-card"
                                />
                                <img
                                    src="img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif"
                                    alt="Image 4"
                                    className="image-card"
                                />
                                <img
                                    src="img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif"
                                    alt="Image 5"
                                    className="image-card"
                                />
                            </div>
                        </div>
                        {recommendations.map((recommendation, index) => (
                            <RecommendationCard
                                key={index}
                                recommendation={recommendation}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <MangaComponent
                    hotBooks={hotBooks}
                    rankingBooks={rankingBooks}
                    recentBooks={recentBooks}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
