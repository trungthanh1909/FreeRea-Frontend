import React from 'react';
import "../type/UserInfoProfile.scss";
interface UserData {
    username: string;
    email: string;
    description: string;
}

interface Props {
    user: UserData;
}

const UserInfo: React.FC<Props> = ({ user }) => {
    return (
        <>
            <div className="banner">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
                    alt="Banner"
                    className="banner-img"
                />
                <div className="avatar-info">
                    <img src="/avatar.png" alt="Avatar" className="profile-avatar" />
                    <div className="profile-text">
                        <p>{user.username}</p>
                    </div>
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
                        <p>{user.username}</p>
                        <p><strong>Email:</strong></p>
                        <p>{user.email}</p>
                        <p><strong>Description:</strong></p>
                        <p>{user.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
