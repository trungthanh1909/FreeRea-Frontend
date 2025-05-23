import React, { useEffect, useState } from "react";
import "../../styles/HomePage/Movingimages.scss";
import { Link } from "react-router-dom";

const recommendationData = [

    {
        title: "Tsuihou Sarenakatta Otoko ",
        tags: ["action", "fantansy"],
        rating: 4.9,
        episodes: "27/27",
        year: "2025",
        description:
            "The Man Who Wasn't Banished My Second Life Began with Groveling",
        previewImages: [

            "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",

        ],
        Images:[
            "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
            "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
            "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
            "img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif",
            "img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif",]
    },
    {
        title: "Date or Kill: Secret Matching",
        tags: ["School", "hime"],
        rating: 4.0,
        episodes: "145/145",
        year: "2023",
        description:
            "Ayame, a top-notch assassin who has lived 25 years without any connection to romance, is convinced by a colleague to register on a dating app—while hiding her true identity!",
        previewImages: [
            "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",

        ],
        Images:[
            "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
            "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
            "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
            "img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif",
            "img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif",]
    },
    {
        title: "Kimetsu no Yaiba ",
        tags: ["Action", "Fantasy"],
        rating: 5.0,
        episodes: "26/26",
        year: "2024",
        description:
            "Tanjirou kiếm sống bằng nghề bán than củi để nuôi gia đình. Ngày nọ, một con quỷ sát hại cả gia đình cậu, chỉ còn duy nhất người em gái Nezuko nhưng cô lại bị biến thành quỷ. Mang trong mình quyết tâm chữa trị cho em gái, Tanjirou cùng Nezuko bắt đầu cuộc hành trình tìm kiếm tung tích con quỷ đã ra tay với gia đình mình nhằm phá giải lời nguyền.",
        previewImages: [

            "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",

        ],
        Images:[
            "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
            "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
            "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
            "img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif",
            "img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif",]
    },
    {
        title: " Dragonball ",
        tags: ["võ thuât", "công chúa"],
        rating: 3.0,
        episodes: "570/600",
        year: "2025",
        description:
            "khỉ nguuuuuuuuu",
        previewImages: [
            "img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif",

        ],
        Images:[
            "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
            "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
            "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
            "img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif",
            "img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif",]
    },
    {
        title: " Dr.Stone",
        tags: ["íekai", "khoa hoc"],
        rating: 5.0,
        episodes: "24/24",
        year: "2025",
        description:
            "anh sờ tanh ",
        previewImages: [
            "img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif",

        ],
        Images:[
            "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif",
            "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif",
            "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif",
            "img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif",
            "img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif",]
    },

];

const Movingimages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === recommendationData.length - 1 ? 0 : prev + 1
            );
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const currentData = recommendationData[currentIndex];

    return (
        <div id="content-container">
            <div id="recommendation">
                <div className="recommendation-header">
                    <div className="recommendation-title">
                        <h2>Đề xuất cho bạn</h2>
                        <p>Chọn mục yêu thích của bạn!</p>
                    </div>
                    <div className="recommendation-background">
                        <img
                            src={currentData.previewImages[0]}
                            alt="Background"
                            className="image-card"
                        />
                    </div>
                </div>

                <div className="recommendation-card">
                    <h3>{currentData.title}</h3>
                    <div className="recommendation-tags">
                        {currentData.tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                    <div className="rating">
                        <span className="star">⭐</span>
                        <span>{currentData.rating}</span>
                        <span>⏳ {currentData.episodes}</span>
                        <span>📅 {currentData.year}</span>
                    </div>

                    <div className="recommendation-divider"></div>
                    <p className="recommendation-description">{currentData.description}</p>

                    <div className="gap">
                        {currentData.Images.map((img, i) => (
                            <div className="image-container-baby" key={i}>
                                <Link to="/book/review">
                                    <img src={img} alt={`Thumb ${i + 1}`} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="image-container">
                        <Link to="/book/review">
                            <img
                                src={currentData.previewImages[0]}
                                alt="Background"
                                className="image-card"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movingimages;

