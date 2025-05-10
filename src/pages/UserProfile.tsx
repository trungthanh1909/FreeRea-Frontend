import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./../styles/UserProfile.scss";
import { useAppSelector } from "../store/hooks";

const UserProfile: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"info" | "history" | "favourites">("info");
    const user = useAppSelector((state) => state.auth.user);
    const avatar = user?.avatarUrl || "https://i.pravatar.cc/150";

    return (
        <>
            <Navbar />
            <div className="user-profile">
                <aside className="sidebar">
                    <div className="logo">
                        <img src={avatar} alt={user?.name || "User"} className="avatar" />
                        <span>{user?.name || "User_profile"}</span>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">Manage Account</a></li>
                            <li><a href="#">Tủ sách cá nhân</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Setting</a></li>
                        </ul>
                    </nav>
                    <div className="support-img">
                        <img src={avatar} alt="Support" />
                    </div>
                </aside>

                <div className="main-content">
                    <div className="banner" />
                    <section className="profile large-profile">
                        <div className="avatar-actions-col">
                            <div className="avatar avatar-large">
                                <img src={avatar} alt="Avatar" />
                            </div>
                            <div className="profile-actions custom-actions">
                                <button className="custom-btn follow">
                                    <span className="icon">🔖</span> Follow
                                </button>
                                <button className="custom-btn report">
                                    <span className="icon">🚩</span> Report
                                </button>
                            </div>
                        </div>

                        <div className="profile-info">
                            <h2>{user?.name || "trananh512"}</h2>
                            <div className="profile-tabs">
                                <button
                                    onClick={() => setActiveTab("info")}
                                    className={activeTab === "info" ? "active" : ""}
                                >
                                    Info
                                </button>
                                <button
                                    onClick={() => setActiveTab("history")}
                                    className={activeTab === "history" ? "active" : ""}
                                >
                                    History
                                </button>
                                <button
                                    onClick={() => setActiveTab("favourites")}
                                    className={activeTab === "favourites" ? "active" : ""}
                                >
                                    Favourited List
                                </button>
                            </div>

                            {activeTab === "info" && (
                                <div className="tab-content tab-info">
                                    <div className="details">
                                        <div><strong>User ID:</strong> {user?.id || "05122004"}</div>
                                        <div><strong>Connections:</strong> No connected accounts</div>
                                        <div className="row">
                                            <div>
                                                <strong>Roles:</strong>
                                                <label>
                                                    <input type="checkbox" checked disabled /> User
                                                </label>
                                            </div>
                                            <div><a href="#">🔗 Connect to Facebook</a></div>
                                        </div>
                                        <div><strong>Uploads:</strong> 0</div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "history" && (
                                <div className="tab-content tab-history">
                                    <h3>Lịch sử truy cập</h3>
                                    <div className="manga-list-grid">
                                        {["Naruto", "One Piece", "Jujutsu Kaisen"].map((title, index) => (
                                            <div className="manga-item" key={index}>
                                                <img src={avatar} alt={title} />
                                                <div className="manga-meta">
                                                    <div className="manga-title">{title}</div>
                                                    <div className="manga-chapter">Đọc chương {100 + index * 10}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "favourites" && (
                                <div className="tab-content tab-favourites">
                                    <h3>Danh sách yêu thích</h3>
                                    <div className="manga-list-grid">
                                        {["Chainsaw Man", "Doraemon", "Spy x Family"].map((title, index) => (
                                            <div className="manga-item" key={index}>
                                                <img src={avatar} alt={title} />
                                                <div className="manga-meta">
                                                    <div className="manga-title">{title}</div>
                                                    <div className="manga-chapter">Đang đọc chương {80 + index * 20}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserProfile;
