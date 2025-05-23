import '../styles/AdminProfile/AdminProfile.scss';
import React, { useEffect, useState } from 'react';

//import { getUserData } from '../services/userService';
import ChangePassword from"../components/AdminProfile/ChangePassword";
import JsonUploaderModal from '../components/AdminProfile/JsonUploaderModal';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

interface UserData {
    username: string;
    email: string;
    description: string;
}

const AdminProfile: React.FC = () => {
    const [user, setUser] = useState<UserData | null>(null);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showUploader, setShowUploader] = useState(false);

    useEffect(() => {
        const dummyUser: UserData = {
            username: "AdminUsio",
            email: "admin@example.com",
            description: "Tôi là quản trị viên của trang web đọc truyện.",
        };

        setTimeout(() => {
            setUser(dummyUser);
        }, 800); // giả lập tải dữ liệu trong 800ms
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="admin-profile-big">
            <Navbar/>
            <div className="admin-profile">

                <div className="banner-admin">
                    <img
                        src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'
                        alt="Banner"
                        className="banner-img"
                    />
                    <div className="avatar-info">
                        <img src="/avatar.png" alt="Avatar" className="profile-avatar"/>
                        <div className="profile-text">
                            <p>{user.username}</p>

                        </div>
                    </div>
                </div>

                <div className="admin-content">
                    <div className="left-actions">
                        <button>Admin</button>

                        <button onClick={() => setShowUploader(true)}>📁 Upload JSON</button>


                        <Link to="/admin/create">
                            <button>📚 Admin Create Book</button>
                        </Link>
                    </div>
                    {showUploader && <JsonUploaderModal onClose={() => setShowUploader(false)} />}

                    <div className="right-info">
                        <h3 className="info-title">Information</h3>
                        <div className="info-box">
                            <p><strong>User name:</strong></p>
                            <p>{user.username}</p>
                            <p><strong>Email:</strong></p>
                            <p>{user.email}</p>
                            <p><strong>Description:</strong></p>
                            <p>{user.description}</p>
                        </div>
                    </div>

                    <div className="admin-settings">
                        <h2>⚙️ Admin Settings</h2>

                        <button onClick={() => setShowChangePassword(!showChangePassword)}>
                            {showChangePassword ? '⬅️ Back' : '🔐 Change Password'}
                        </button>

                        {showChangePassword && (
                            <div className="change-password-wrapper">
                                <ChangePassword/>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            </div>
            );
            };

            export default AdminProfile;

