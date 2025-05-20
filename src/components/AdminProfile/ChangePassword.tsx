import React, { useState } from 'react';
import '../type/ChangePassword.scss';

const ChangePassword: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match.');
            return;
        }

        try {
            // Giả lập API call
            await fakeChangePasswordAPI(currentPassword, newPassword);
            setMessage('Password updated successfully.');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (err: any) {
            setError(err.message || 'Failed to update password.');
        }
    };

    const fakeChangePasswordAPI = (current: string, newPass: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (current === 'admin123') {
                    resolve('Success');
                } else {
                    reject(new Error('Current password is incorrect.'));
                }
            }, 1000);
        });
    };

    return (
        <div className="change-password-container">
            <h2>🔐 Change Admin Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Current Password:
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </label>

                <label>
                    New Password:
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </label>

                <label>
                    Confirm New Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>

                <button type="submit">Update Password</button>

                {error && <p className="error">{error}</p>}
                {message && <p className="success">{message}</p>}
            </form>
        </div>
    );
};

export default ChangePassword;
