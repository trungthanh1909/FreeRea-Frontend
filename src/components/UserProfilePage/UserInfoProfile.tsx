
import { FaCog } from 'react-icons/fa';
import React, { useState } from 'react';
import "../../styles/UserProfilePage/UserInfoProfile.scss";
import UserSettingsPopup from './UserSettingsPopup';


interface UserData {
    username: string;
    email: string;
    description: string;
    avatarUrl?: string;
}

const UserInfo: React.FC<{ user: UserData }> = ({ user }) => {
    const [showSettings, setShowSettings] = useState(false);
    const [userData, setUserData] = useState({
        ...user,
        avatarUrl: user.avatarUrl || "/avatar.png",
    });
    const IconCog = FaCog as React.FC;

    const handleSave = (updatedUser: any) => {
        setUserData(updatedUser);
        // Gọi API ở đây nếu cần
    };

    return (
        <>
            <div className="banner">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
                    alt="Banner"
                    className="banner-img"
                />
                <div className="avatar-info">
                    <img src={userData.avatarUrl || "/avatar.png"} alt="Avatar" className="profile-avatar"/>

                    <div className="profile-text">
                        <p>{userData.username}</p>
                    </div>
                    <button className="settings-btn" onClick={() => setShowSettings(true)}>
                        <IconCog/>
                    </button>
                </div>
            </div>

            <div className="content">
                <div className="left-actions">
                    <button className="follow">🍓 Follow</button>
                    <button>💬 Message</button>
                    <button>⚠️ Report</button>
                    <button>🔗 Linked</button>
                </div>

                <div className="right-info">
                    <h3 className="info-title">Information</h3>
                    <div className="info-box">
                        <p><strong>User name:</strong></p>
                        <p>{userData.username}</p>
                        <p><strong>Email:</strong></p>
                        <p>{userData.email}</p>
                        <p><strong>Description:</strong></p>
                        <p>{userData.description}</p>
                    </div>
                </div>
            </div>

            {showSettings && (
                <UserSettingsPopup
                    user={userData}
                    onClose={() => setShowSettings(false)}
                    onSave={handleSave}
                />
            )}
        </>
    );
};

export default UserInfo;
