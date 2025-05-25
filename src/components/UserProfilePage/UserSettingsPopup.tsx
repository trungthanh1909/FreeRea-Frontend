import React, { useState } from "react";
import "../../styles/UserProfilePage/UserSettingsPopup.scss";
import { useUploadAvatar } from "../../hooks";
import { useChangePassword } from "../../hooks";

import { showToast } from "../../utils/toast";

interface Props {
    userId: string;
    user: {
        name: string;
        avatarUrl: string;
    };
    onClose: () => void;
    onSave: (updatedUser: { name: string; avatarUrl: string }) => void;
}

const UserSettingsPopup: React.FC<Props> = ({ user, userId, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        avatarPreview: user.avatarUrl || "",
    });

    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [passwordError, setPasswordError] = useState("");
    const changePasswordMutation = useChangePassword(userId);
    const handleChangePasswordSuccess = () => {
        showToast("Đổi mật khẩu thành công", "success");
        setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
        setShowPasswordFields(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name in passwords) {
            setPasswords((prev) => ({ ...prev, [name]: value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const { mutateAsync: uploadAvatar } = useUploadAvatar();
    const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !userId) return;

        try {
            const res = await uploadAvatar({ userId, file });
            const uploadedUrl = res.data?.url;

            if (uploadedUrl) {
                setFormData((prev) => ({
                    ...prev,
                    avatarUrl: uploadedUrl,
                }));
                showToast("Tải ảnh thành công!", "success");
            }
        } catch {
            showToast("Tải ảnh thất bại", "error");
        }
    };

    const handleSubmit = () => {
        if (!formData.name.trim()) {
            showToast("Tên hiển thị không được để trống", "error");
            return;
        }

        if (showPasswordFields) {
            if (passwords.newPassword.length < 8) {
                setPasswordError("Mật khẩu mới phải có ít nhất 8 ký tự.");
                return;
            }

            if (passwords.newPassword !== passwords.confirmPassword) {
                setPasswordError("Mật khẩu xác nhận không khớp.");
                return;
            }
        }

        const saveProfile = () => {
            onSave({
                name: formData.name,
                avatarUrl: formData.avatarPreview,
            });
            onClose();
        };

        if (showPasswordFields) {
            changePasswordMutation.mutate(
                {
                    currentPassword: passwords.currentPassword,
                    newPassword: passwords.newPassword,
                },
                {
                    onSuccess: () => {
                        handleChangePasswordSuccess();
                        saveProfile();
                    },
                    onError: () => showToast("Đổi mật khẩu thất bại", "error"),
                }
            );
        } else {
            saveProfile();
        }
    };




    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <h3>Edit Profile</h3>

                <div className="avatar-wrapper">
                    <label htmlFor="avatar-upload">
                        <img
                            src={formData.avatarPreview || "/default-avatar.png"}
                            alt="Avatar"
                            className="avatar-image"
                        />
                    </label>
                    <input
                        type="file"
                        id="avatar-upload"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        style={{ display: "none" }}
                    />
                </div>

                <input
                    type="text"
                    name="name"
                    placeholder="Display Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                {!showPasswordFields ? (
                    <button
                        type="button"
                        onClick={() => setShowPasswordFields(true)}
                        className="change-password-btn"
                    >
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
                        {passwordError && (
                            <p className="error-message">{passwordError}</p>
                        )}
                    </>
                )}

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button onClick={handleSubmit} className="confirm-btn">
                        Confirm
                    </button>
                    <button onClick={onClose} className="cancel-btn">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserSettingsPopup;