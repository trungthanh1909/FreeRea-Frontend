
import React, { useState } from 'react';
import'../../styles/UserProfilePage/UserSettingsPopup.scss';

import { useChangeAvatar } from '../../hooks/userProfileService/useUserProfileHooks';
import { useDispatch } from 'react-redux';
import { updateProfileName } from '../../store/slices/userSlice';

interface Props {
    user: {
        username: string;
        email: string;
        description: string;
        avatarUrl?: string;
    };
    onClose: () => void;
    onSave: (updatedUser: any) => void;
}

const UserSettingsPopup: React.FC<Props> = ({ user, onClose, onSave }) => {
    const dispatch = useDispatch();
    const { mutate: changeAvatar } = useChangeAvatar();

    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        description: user.description,
        avatar: null as File | null,
        avatarPreview: user.avatarUrl || '',
    });

    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name in passwords) {
            setPasswords((prev) => ({ ...prev, [name]: value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setFormData((prev) => ({ ...prev, avatar: file, avatarPreview: preview }));
        }
    };

    const handleSubmit = () => {
        let valid = true;
        setEmailError('');
        setPasswordError('');

        if (!formData.email.includes('@')) {
            setEmailError("Email must contain '@'.");
            valid = false;
        }
        if (showPasswordFields && passwords.newPassword !== passwords.confirmPassword) {
            setPasswordError("New password and confirmation do not match.");
            valid = false;
        }
        if (!valid) return;

        // Gửi request đổi avatar nếu có file mới
        if (formData.avatar) {
            const payload = new FormData();
            payload.append('file', formData.avatar);
            changeAvatar(payload as any); // Tùy định nghĩa API có cần FormData không
        }

        // Gửi các thông tin khác như tên, email, mô tả
        dispatch(updateProfileName(formData.username)); // ví dụ

        const updated = {
            ...user,
            username: formData.username,
            email: formData.email,
            description: formData.description,
            ...(showPasswordFields ? {
                currentPassword: passwords.currentPassword,
                newPassword: passwords.newPassword
            } : {})
        };

        onSave(updated); // Nếu cần xử lý lưu tiếp tục
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <h3>Edit Profile</h3>

                <div className="avatar-wrapper">
                    <label htmlFor="avatar-upload">
                        <img
                            src={formData.avatarPreview || '/default-avatar.png'}
                            alt="Avatar"
                            className="avatar-image"
                        />
                    </label>
                    <input
                        type="file"
                        id="avatar-upload"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        style={{ display: 'none' }}
                    />
                </div>

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
                {emailError && <p className="error-message">{emailError}</p>}

                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />

                {!showPasswordFields ? (
                    <button type="button" onClick={() => setShowPasswordFields(true)} className="change-password-btn">
                        Change Password
                    </button>
                ) : (
                    <>
                        <input
                            type="password"
                            name="currentPassword"
                            placeholder="Current Password"
                            value={passwords.currentPassword}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                            value={passwords.newPassword}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm New Password"
                            value={passwords.confirmPassword}
                            onChange={handleChange}
                        />
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </>
                )}

                <div className="button-row">
                    <button onClick={handleSubmit} className="confirm-btn">Confirm</button>
                    <button onClick={onClose} className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default UserSettingsPopup;
