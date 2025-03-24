import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import "../styles/RegisterForm.scss";

const RegisterForm: React.FC = () => {
    const { register } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(name, email, password);
            alert("Đăng ký thành công!");
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <motion.div
            className="register-box"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Đăng Ký</h2>
            <form onSubmit={handleRegister}>
                <div className="input-group">
                    <span className="input-icon">👤</span>
                    <input type="text" placeholder="Tên" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input-group">
                    <span className="input-icon">📧</span>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <span className="input-icon">🔒</span>
                    <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn-register">Đăng Ký</button>
            </form>
        </motion.div>
    );
};

export default RegisterForm;
