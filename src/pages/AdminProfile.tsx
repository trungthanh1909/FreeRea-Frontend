import '../styles/AdminProfile/AdminProfile.scss';
import React, { useEffect, useState } from 'react';
import { getUserData } from '../services/userService';
import ChangePassword from"../components/AdminProfile/ChangePassword";


interface UserData {
    username: string;
    email: string;
    description: string;

}
const AdminProfile: React.FC = () => {
    const [user, setUser] = useState<UserData | null>(null);
    const [showChangePassword, setShowChangePassword] = useState(false);
    useEffect(() => {
        getUserData().then((data) => setUser(data));
    }, []);

    if (!user) return <div>Loading...</div>;
    return (
        <div className="admin-profile">

            <div className="banner-admin">
                <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'
                     alt="Banner" className="banner-img"/>
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
    );
};

export default AdminProfile;
