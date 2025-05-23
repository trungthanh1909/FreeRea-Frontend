import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../../styles/HomePage/MangaSection.scss";
import { Link } from "react-router-dom";

interface Comic {
    img: string;
    title: string;
    author: string;
    views: number | string;
}

interface ComicListProps {
    comics: Comic[];
    title: string;
}

const ComicList: React.FC<ComicListProps> = ({ comics, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < comics.length) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const currentComics = comics.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <>
            <p className="text-gray">{title}</p>
            <div className="container2">
                {currentIndex > 0 && (
                    <div className="arrow1" onClick={handlePrev}><AiOutlineLeft/></div>
                )}
                {currentComics.map((comic, i) => (

                    <div className="comic2" key={i}>
                        <Link to="/book/review">
                        <img src={comic.img} alt={comic.title} />
                        </Link>
                        <p className="name2">{comic.title}</p>
                        <p className="sales2">{comic.author} <span>{comic.views}</span></p>


                    </div>

                ))}
                {currentIndex + itemsPerPage < comics.length && (
                    <div className="arrow1" onClick={handleNext}><AiOutlineRight/></div>
                )}
            </div>
        </>
    );
};



const comics = [
    {
        title: "Ten Chuyen",
        author: "tac gia",
        views: 1413,
        img: "src/assets/pngtree-books-logo-png-image_4135439.jpg"
    },
    {
        title: "Ten chuyen",
        author: "tac gia",
        views: 1351,
        img: "img/8b843504867408d80c3a75fa2bb7132212379320.jpg@438w.avif"
    },
    {
        title: "Ten chuyen",
        author: "tac gia",
        views: 1351,
        img: "img/3d15ccdb72e2020e3c1de288886e0a646863aeab.jpg@200w.avif"
    },
    {
        title: "Ten chuyen",
        author: "tac gia",
        views: 1351,
        img: "img/4c4b0666f1d4dd762d0a5d580ba94ee92dfa805f.jpg@200w.avif"
    },
    {
        title: "ten chuyen",
        author: "Tac gia",
        views: 5399,
        img: "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif"
    },
    {
        title: "ten chuyen",
        author: "tac gia",
        views: 3148,
        img: "img/7b5bd977824adf39a8c62ad05f1fccfd1778bc8f.jpg@200w.avif"
    },
    {
        title: "ten chuyen",
        author: "tac gia",
        views: 3148,
        img: "img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif"
    },
    {
        title: "ten chuyen",
        author: "tac gia",
        views: 3148,
        img: "img/364e88ee2c84b7dccc1d7679ba83dc4031235e03.jpg@200w.avif"
    },
    {
        title: "ten chuyen",
        author: "tac gia",
        views: 3148,
        img: "img/929ff617e0e668ef37326ce9fccb95e384a47bf4.jpg@200w.avif"
    },
    {
        title: "ten chuyen",
        author: "tac gia",
        views: 3148,
        img: "img/57bf8b25a06c4d1f8ad80e6e9b4af39d6c336f5d.png@200w.avif"
    },
    {
        title: "ten chuyen",
        author: "usio" ,
        views: 1064,
        img: "img/0c2dfce5a4c1cea42a6021e66a03f3146ed297e9.jpg@484w.avif"
    },
    {
        title: "ten chuyen",
        author: "usio" ,
        views: 1064,
        img: "img/1ee4a1d4d8b569e167381aa48f689b979c2544ab.png@438w.avif"
    }
];



const MangaComponent = () => {
    return (
        <div className="manga-section">
            <ComicList comics={comics} title="Truyện Đề Cử" />
            <ComicList comics={comics} title="Truyện Cập Nhật" />


        </div>
    );
}; export default MangaComponent ;