import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchDropdown from "../components/TitleSearchWithImage";

import AuthModal from "./HomePage/AuthModal";
import CategoryList from "./CategoryList";

import "../styles/Navbar.scss";

import logo from "../assets/logo-black.png";
import { useAuthHooks } from "../hooks/authService/useAuth";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, login, logout } = useAuthHooks();

    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState<"login" | "register" | null>(null);
    const [error, setError] = useState("");
    const [hovering, setHovering] = useState(false);
    const books = [
        { id: 1, title: "Truyện Kiếm Hiệp", image: "src/assets/pngtree-books-logo-png-image_4135439.jpg" },
        { id: 2, title: "Truyện Tiên Hiệp", image: "src/assets/pngtree-books-logo-png-image_4135439.jpg" },
        { id: 3, title: "Truyện Ngôn Tình", image: "src/assets/pngtree-books-logo-png-image_4135439.jpg" },
        { id: 4, title: "Truyện Tiên Hiệp", image: "src/assets/c8dfb2f0-fa7d-4d74-b21f-65d1732dd967.jpg" },
        { id: 5, title: "Truyện Tiên Hiệp", image: "src/assets/c8dfb2f0-fa7d-4d74-b21f-65d1732dd967.jpg" },
        { id: 6, title: "Truyện Tiên Hiệp", image: "src/assets/c8dfb2f0-fa7d-4d74-b21f-65d1732dd967.jpg" },
    ];

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
                    <Link to="/">
                        <img src={logo} alt="FREEREA" className="logo"/>
                    </Link>

                    <ul className="navbar_menu">
                        <div
                            className="category-wrapper-navbar"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                            ref={dropdownRef}
                        >
                            <li>
                                <Link to="/genres" className="menu-item">Genres</Link>
                                <div className={`category_menu ${showDropdown ? "show" : ""}`}>
                                    <CategoryList scrolled={scrolled}/>
                                </div>
                            </li>
                        </div>
                        <li><Link to="/admin/create">Genreus</Link></li>
                        <li><Link to="/user/profile">Genreus</Link></li>
                        <li><Link to="/book/review">Genreus</Link></li>
                    </ul>

                    <div className="search-container" style={{position: "relative"}}>
                        <input
                            type="text"
                            placeholder="Search....."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                        <SearchDropdown
                            books={books.filter((b) =>
                                b.title.toLowerCase().includes(search.toLowerCase())
                            )}
                            search={search}
                            onSelect={() => setSearch("")}
                        />
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
