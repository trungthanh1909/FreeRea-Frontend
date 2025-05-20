import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/HomePage/Login_RegisterForm.scss";

type RegisterFormProps = {
    switchToLogin: () => void;
    onSubmit: (username: string, name: string, email: string, password: string, createdAt: string) => Promise<void>;
    error?: string;
    loading: boolean;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ switchToLogin, onSubmit, error, loading }) => {
    const [username, setUsername] = useState("");
    const createdAt = new Date().toISOString();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password) {
            return;
        }
        try {
            await onSubmit(username, name, email, password, createdAt);
        } catch (err) {
            console.error("Đăng ký thất bại:", err);
        }
    };

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="box">
                <h2>Sign up to NovelNest</h2>
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            id="Nickname"
                            placeholder=" "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="Nickname">Nickname</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            id="Email"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="Email">Email</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            id="Password"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="Password">Password</label>
                    </div>

                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? "Đang xử lý..." : "Sign-Up"}
                    </button>
                </form>

                <div className="social-login">
                    <p>Hoặc đăng ký với</p>
                    <div className="social-buttons">
                        <button className="social-btn facebook-google">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </button>
                        <button className="social-btn facebook-google">
                            <i className="fab fa-google"></i> Google
                        </button>
                    </div>
                </div>

                <p className="change-link">
                    Already have an account?{" "}
                    <span onClick={switchToLogin} className="switch-tab">
                        Sign In
                    </span>
                </p>
            </div>
        </motion.div>
    );
};

export default RegisterForm;
