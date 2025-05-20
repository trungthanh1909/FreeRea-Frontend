import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import AuthModal from "./HomePage/AuthModal";
import CategoryList from "./CategoryList";

import "../styles/Navbar.scss";

import logo from "../assets/logo-black.png";
import { useAuth } from "../hooks/useAuth";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, login, logout } = useAuth();

    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState<"login" | "register" | null>(null);
    const [error, setError] = useState("");
    const [hovering, setHovering] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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

    const handleLogin = async (email: string, password: string) => {
        try {
            await login({ username: email, password });
            setShowModal(null);
            setError("");
            navigate("/");
        } catch {
            setError("Sai email hoặc mật khẩu!");
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <Link to="/public">
                        <img src={logo} alt="FREEREA" className="logo" />
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
                                    <CategoryList />
                                </div>
                            </li>
                        </div>
                        <li>Mới nhất</li>
                        <li>Bảng xếp hạng</li>
                    </ul>

                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sách..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    </div>

                    <div className="user-actions">
                        {isAuthenticated && user ? (
                            <div
                                className="avatar-wrapper"
                                onMouseEnter={() => setHovering(true)}
                                onMouseLeave={() => setTimeout(() => setHovering(false), 200)}
                            >
                                <img
                                    src={user.avatarUrl || "https://i.pravatar.cc/40"}
                                    alt={user.name || user.username}
                                    className="avatar"
                                />
                                <div className={`dropdown ${hovering ? "show" : ""}`}>
                                    <span className="dropdown-item">{user.name || user.username}</span>
                                    <Link to={`/user/${user.username}`} className="dropdown-item" state={{ user }}>
                                        Tài khoản
                                    </Link>
                                    <button onClick={handleLogout} className="dropdown-item">
                                        Đăng xuất
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="buttons">
                                <button onClick={() => setShowModal("login")} className="login-btn">
                                    Login
                                </button>
                                <button onClick={() => setShowModal("register")} className="signup-btn">
                                    Sign up
                                </button>
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
