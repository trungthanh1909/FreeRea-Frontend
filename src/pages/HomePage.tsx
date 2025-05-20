import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MangaComponent from "../components/HomePage/MangaSection";
import Movingimages from "../components/HomePage/Movingimages";
import "../styles/HomePage/HomePage.scss";

const HomePage: React.FC = () => {
    return (
        <div className="container-big">
            <Navbar />
            <div className="container-all">
                <Movingimages />
                <MangaComponent />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
