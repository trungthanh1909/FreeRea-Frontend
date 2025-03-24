import React from "react";
import "../styles/Banner.scss";

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Chào mừng bạn đến với Thư Viện Sách</h1>
                <p>Khám phá hàng ngàn cuốn sách hấp dẫn!</p>
                <button className="explore-btn">Khám phá ngay</button>
            </div>
        </div>
    );
};

export default Banner;
