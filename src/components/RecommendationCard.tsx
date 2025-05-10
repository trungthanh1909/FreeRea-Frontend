import React from 'react';
import { Recommendation } from "../mocks/recommendationMocks";
import "../styles/RecommendationCard.scss";

interface RecommendationCardProps {
    recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => (
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
        <div className="gap">
            {recommendation.images.map((image, index) => (
                <div className="image-container-baby" key={index}>
                    <img src={image} alt={`Ảnh ${index + 1}`} />
                </div>
            ))}
        </div>
        <div className="image-container">
            {recommendation.images.map((image, index) => (
                <img src={image} alt={`Ảnh chi tiết ${index + 1}`} className="image-container" key={index} />
            ))}
        </div>
        <a href={recommendation.link} className="recommendation-button">Read</a>
    </div>
);

export default RecommendationCard;
