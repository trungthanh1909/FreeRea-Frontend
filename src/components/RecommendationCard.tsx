import React from 'react';
import "../type/Homepage.css";

const RecommendationCard = () => (
    <div className="recommendation-card">
        <h3>Nói chúc ngủ ngon ở Thành phố Quỷ Vương</h3>
        <div className="recommendation-tags">
            <span>ma thuật</span>
            <span>công chúa</span>
        </div>
        <div className="rating">
            <span className="star">⭐</span>
            <span>4.9</span>
            <span>⏳ 27/27</span>
            <span>📅 2025</span>
        </div>
        <div className="recommendation-divider"></div>
        <p className="recommendation-description">
            Đây là thời đại mà con người và ma quỷ cùng tồn tại. Một ngày nọ, Quỷ Vương bắt công chúa loài người và đe dọa:...
        </p>
        <div className="gap">
            {[1, 2, 3, 4, 5].map((i) => (
                <div className="image-container-baby" key={i}>
                    <img src="img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif" alt={`Ảnh ${i}`} />
                </div>
            ))}
        </div>
        <div className="image-container">
            <img src="img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif" alt="1" className="image-container"/>
            <img src="img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif" alt="2" className="image-container"/>
            <img src="img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif" alt="3" className="image-container"/>
            <img src="img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif" alt="4" className="image-container"/>
            <img src="img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif" alt="5" className="image-container"/>
        </div>
        <a href="/detail/mc27915" className="recommendation-button">Read</a>
    </div>
);

export default RecommendationCard;
