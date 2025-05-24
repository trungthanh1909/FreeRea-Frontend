import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/HomePage/Login_RegisterForm.scss";

type RegisterFormProps = {
    switchToLogin: () => void;
    onSubmit: (data: { username: string; email: string; password: string; name?: string }) => Promise<void>
    error?: string;
    loading: boolean;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ switchToLogin, onSubmit, error, loading }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !email || !password) {
            return;
        }
        try {
            await onSubmit({ username, email, password });
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
                            id="Username"
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="Username">Username</label>

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
