import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Welcome.scss";
// @ts-ignore
import bookImage from "../assets/pngtree-books-logo-png-image_4135439.jpg"; // Thay thế bằng ảnh minh họa phù hợp

const Welcome: React.FC = () => {
    return (
        <motion.div
            className="welcome-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div className="welcome-content">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    📖 Chào mừng đến với <span>BookWorld</span> 📚
                </motion.h1>
                <p>Khám phá hàng ngàn cuốn sách hấp dẫn ngay hôm nay!</p>
                <div className="buttons">
                    <Link to="/Login" className="btn-primary">Đăng nhập</Link>
                    <Link to="/Register" className="btn-secondary">Đăng ký</Link>
                </div>
            </div>
            <motion.div
                className="welcome-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <img src={bookImage} alt="Reading" />
            </motion.div>
        </motion.div>
    );
};

export default Welcome;
