import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AuthModal from "./AuthModal";
import "../styles/Navbar.scss";
import CategoryList from "./CategoryList";

const Navbar: React.FC = () => {
    const { user, logout, login } = useAuth();
    const navigate = useNavigate();
    const [hovering, setHovering] = useState(false);
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState<"login" | "register" | null>(null);
    const [error, setError] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleLogin = async (email: string, password: string) => {
        try {
            console.log('đăng nhập');
            await login(email, password);
            setShowModal(null);
            navigate("/");
        } catch (err) {
            setError("Sai email hoặc mật khẩu!");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <Link to="/Home">
                        <img
                            src="src/assets/logo-black.png"
                            alt="FREEREA"
                            className="logo"
                        />
                    </Link>

                    <ul className="navbar_menu">
                        <div
                            className="category-wrapper"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                            ref={dropdownRef}
                        >
                            <li className="menu-item">
                                Thể loại
                                <div className={`category_menu ${showDropdown ? "show" : ""}`}>
                                    <CategoryList/>
                                </div>
                            </li>
                        </div>
                        <li>Mới nhất</li>
                        <li>Bảng xếp hạng</li>
                        <li>Xem thêm</li>
                    </ul>


                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sách..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                    </div>

                    <div className="user-actions">
                        {user ? (
                            <div className="user-menu">
                                <div
                                    className="avatar-wrapper"
                                    onMouseEnter={() => setHovering(true)}
                                    onMouseLeave={() => setTimeout(() => setHovering(false), 200)}
                                >
                                    <img
                                        src={user.avatarUrl || "https://i.pravatar.cc/40"}
                                        alt={user.name}
                                        className="avatar"
                                    />
                                    <div className={`dropdown ${hovering ? "show" : ""}`}>
                                        <span className="dropdown-item">{user.name}</span>
                                        <Link to="/profile" className="dropdown-item">Tài khoản</Link>
                                        <button onClick={handleLogout} className="dropdown-item">Đăng xuất</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="buttons">
                                <button onClick={() => setShowModal("login")} className="login-btn">Login</button>
                                <button onClick={() => setShowModal("register")} className="signup-btn">Sign up</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <AuthModal
                showModal={showModal}
                setShowModal={setShowModal}
                handleLogin={handleLogin}
                error={error}
            />
        </>
    );
};

export default Navbar;
