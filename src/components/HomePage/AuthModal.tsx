import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { authService } from "../../services/authService";
import "../../styles/HomePage/AuthModal.scss";

type Props = {
    showModal: "login" | "register" | null;
    setShowModal: (type: "login" | "register" | null) => void;
    handleLogin: (email: string, password: string) => Promise<void>;
    error: string;
};

const AuthModal: React.FC<Props> = ({ showModal, setShowModal, handleLogin }) => {
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState("");

    const switchToLogin = () => {
        setAuthError("");
        setShowModal("login");
    };

    const switchToRegister = () => {
        setAuthError("");
        setShowModal("register");
    };

    const handleRegister = async (username: string, name: string, email: string, password: string) => {
        setLoading(true);
        setAuthError("");
        try {
            const createdAt = new Date().toISOString();
            await authService.register({ username, name, email, password, createdAt });
            setLoading(false);
            setShowModal(null);
        } catch (error) {
            setLoading(false);
            setAuthError("Đăng ký không thành công. Vui lòng thử lại.");
        }
    };


    if (!showModal) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowModal(null)}
            >
                <motion.div
                    className="modal-content"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    tabIndex={-1}
                >
                    <button className="close-btn" onClick={() => setShowModal(null)}>
                        <IoCloseCircle className="close-icon" size={30} />
                    </button>

                    {showModal === "login" ? (
                        <LoginForm
                            switchToRegister={switchToRegister}
                            onSubmit={handleLogin}
                            error={authError}
                            loading={loading}
                        />
                    ) : (
                        <RegisterForm
                            switchToLogin={switchToLogin}
                            onSubmit={handleRegister}
                            error={authError}
                            loading={loading}
                        />
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AuthModal;
