import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../styles/HomePage/Login_RegisterForm.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

type LoginFormProps = {
    switchToRegister: () => void;
    onSubmit: (username: string, password: string) => Promise<void>;
    error?: string;
    loading: boolean;
};

const LoginForm: React.FC<LoginFormProps> = ({ switchToRegister, onSubmit, error, loading }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !password) {
            return;
        }
        if (onSubmit) {
            try {
                await onSubmit(username, password);
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
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            id="username"
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="username">User Name</label>
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
                        {loading ? "Đang xử lý..." : "Login"}
                    </button>
                </form>


                <p className="change-link">
                    Don't have an account? <span onClick={switchToRegister} className="switch-tab">Sign Up</span>
                </p>
            </div>
        </motion.div>
    );
};

export default LoginForm;
