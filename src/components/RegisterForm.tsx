import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Login&RegisterForm.scss";
import { useNavigate } from "react-router-dom";

type RegisterFormProps = {
    switchToLogin: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ switchToLogin }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        console.log("Đăng ký với:", name, email, password);
        navigate("/");
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

                <form onSubmit={handleRegister}>
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
                    <button type="submit" className="btn">
                        Sign-Up
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
                    Already have an account? <span onClick={switchToLogin} className="switch-tab">Sign In</span>
                </p>
            </div>
        </motion.div>
    );
};

export default RegisterForm;
