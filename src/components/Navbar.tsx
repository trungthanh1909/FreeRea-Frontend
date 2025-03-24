import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.scss";

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/welcome");
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo */}
                <div className="navbar-brand">
                    <Link to="/">📚 BookWorld</Link>
                </div>

                {/* Nút "Mạng Xã Hội" */}
                <Link to="/social" className="social-btn">Mạng Xã Hội</Link>

                {/* Thanh tìm kiếm */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sách..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowSearchBar(true)}
                    />
                    <span className="search-icon">🔍</span>

                    {/* Hộp gợi ý tìm kiếm */}
                    {showSearchBar && (
                        <div className="search-dropdown">
                            <p>Gợi ý tìm kiếm...</p>
                            <ul>
                                <li>Sách mới nhất</li>
                                <li>Sách được yêu thích</li>
                                <li>Thể loại phổ biến</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Thông tin người dùng */}
                <div className="user-actions">
                    {user ? (
                        <>
                            <span className="username">👤 {user.name}</span>
                            <button className="logout-btn" onClick={handleLogout}>
                                🚪 Đăng xuất
                            </button>
                        </>
                    ) : (
                        <Link to="/Login" className="login-btn">Đăng nhập</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
