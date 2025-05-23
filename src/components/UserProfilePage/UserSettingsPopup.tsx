
import React, { useState } from 'react';
import'../../styles/UserProfilePage/UserSettingsPopup.scss';
interface Props {
    user: {
        username: string;
        email: string;
        description: string;
    };
    onClose: () => void;
    onSave: (updatedUser: any) => void;
}

const UserSettingsPopup: React.FC<Props> = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        description: user.description,
        password: '',
        avatar: null as File | null,
        avatarPreview: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setFormData((prev) => ({ ...prev, avatar: file, avatarPreview: preview }));
        }
    };

    const handleSubmit = () => {
        const updated = {
            ...user,
            username: formData.username,
            email: formData.email,
            description: formData.description,
            // avatar would be uploaded separately
        };
        onSave(updated);
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <h3>Edit Profile</h3>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <input type="file" accept="image/*" onChange={handleAvatarChange} />
                {formData.avatarPreview && (
                    <img src={formData.avatarPreview} alt="Preview" style={{ width: '100px', borderRadius: '8px' }} />
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={handleSubmit} className="confirm-btn">Confirm</button>
                    <button onClick={onClose} className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default UserSettingsPopup;