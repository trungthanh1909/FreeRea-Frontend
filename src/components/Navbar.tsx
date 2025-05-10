import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AuthModal from "./AuthModal";
import "../styles/Navbar.scss";
import CategoryList from "./CategoryList";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginSuccess, logout } from "../store/slices/authSlice";
import { login as loginService } from "../services/authService";
import { AuthResponse } from "../types";

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const user = useAppSelector((state) => state.auth.user);
    const [hovering, setHovering] = useState(false);
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState<"login" | "register" | null>(null);
    const [error, setError] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    const handleLogin = async (email: string, password: string) => {


        //test

        if (email === "test@example.com" && password === "123456") {
            const fakeUser = {
                id: 1,
                name: "Test User",
                email: "test@example.com",
                avatarUrl: "https://i.pravatar.cc/40",
            };

            dispatch(loginSuccess({ user: fakeUser, token: "fake-token-123" }));
            setShowModal(null);
            navigate("/");
            return;
        }




        try {
            const response = await loginService({ email, password });
            const { token, user } = response.data as AuthResponse;
            dispatch(loginSuccess({ token, user }));
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
                    <Link to="/">
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
                                        <Link to={`/user/${user.name}`} className="dropdown-item" state={{ user }}>Tài khoản</Link>
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
