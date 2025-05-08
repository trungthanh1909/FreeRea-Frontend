import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/Login&RegisterForm.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";


type LoginFormProps = {
    switchToRegister: () => void;
    onSubmit?: (email: string, password: string) => Promise<void>;
    error?: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ switchToRegister, onSubmit, error }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        if (onSubmit) {
            try {
                await onSubmit(email, password);
                navigate("/");
            } catch (err) {
                console.error("Đăng nhập thất bại:", err);
            }
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
                <h2>Log in to NovelNest</h2>
                {error && <p className="error-message">{error}</p>} {/* Hiển thị lỗi từ props */}

                <form onSubmit={handleSubmit}>
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

                    <button type="submit" className="btn">
                        Login
                    </button>
                </form>

                <div className="social-login">
                    <p>Hoặc đăng nhập với</p>
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
                    Don't have an account? <span onClick={switchToRegister} className="switch-tab">Sign Up</span>
                </p>
            </div>
        </motion.div>
    );
};

export default LoginForm;