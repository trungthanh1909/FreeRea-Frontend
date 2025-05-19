import React, { useState } from "react";
import { Recommendation } from "../mocks/recommendationMocks";
import "../styles/RecommendationCard.scss";

interface RecommendationCardProps {
    recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="recommendation-card">
            <h3>{recommendation.title}</h3>
            <div className="recommendation-tags">
                {recommendation.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
            <div className="rating">
                <span className="star">⭐</span>
                <span>{recommendation.rating}</span>
                <span>⏳ {recommendation.episodes}</span>
                <span>📅 {recommendation.year}</span>
            </div>
            <div className="recommendation-divider"></div>
            <p className="recommendation-description">
                {recommendation.description}
            </p>

            <div className="thumbnails">
                {recommendation.images.map((image, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${index === selectedIndex ? "active" : ""}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <img src={image} alt={`Ảnh ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="main-image-container">
                <img src={recommendation.images[selectedIndex]} alt={`Hiển thị ảnh ${selectedIndex + 1}`} />
            </div>

            <a href={recommendation.link} className="recommendation-button">Read</a>
        </div>
    );
};

export default RecommendationCard;
