import React from 'react';
import "../type/Homepage.css";

const MangaComponent = () => (
    <div className="main-content">
        <div className="story-list">
            <Section title="Truyện Đề Cử" />
            <Section title="Truyện Cập Nhật" />
            <Section title="Bảng Xếp Hạng" />
        </div>
    </div>
);

const Section = ({ title }) => (
    <>
        <p className="text-gray">{title}</p>
        <div className="line"></div>
        <div className="container2">
            {[...Array(5)].map((_, index) => (
                <div className="comic2" key={index}>
                    <img src="img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif" alt=""/>
                    <p className="name2">Tên Chuyện</p>
                    <p className="sales2">Tác giả <span>{1000 + index * 300}</span></p>
                </div>
            ))}
            <div className="arrow1">»</div>
        </div>
    </>
);

export default MangaComponent;
