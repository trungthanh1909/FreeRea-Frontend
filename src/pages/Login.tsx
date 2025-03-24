import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LoginForm from "../components/LoginForm";
import "../styles/LoginForm.scss";

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = async (email: string, password: string) => {
        try {
            await login(email, password);
            navigate("/home");
        } catch (err: any) {
            setError("Sai email hoặc mật khẩu!");
        }
    };

    return (
        <motion.div
            className="auth-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <LoginForm onSubmit={handleLogin} error={error} />
        </motion.div>
    );
};

export default Login;
