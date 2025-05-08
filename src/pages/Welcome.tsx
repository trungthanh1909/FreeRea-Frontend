import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/Welcome.scss";

const Welcome: React.FC = () => {
    const [showModal, setShowModal] = useState<"login" | "register" | null>(null);
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const switchToLogin = () => setShowModal("login");
    const switchToRegister = () => setShowModal("register");

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
            className="welcome-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div className="welcome-content">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Enter the world of ✨<span>FreeRe</span>🌟
                </motion.h1>
                <p>Explore a vast collection of mesmerizing stories waiting for you!</p>
                <div className="buttons">
                    <button onClick={() => setShowModal("login")} className="login-btn">Login</button>
                    <button onClick={() => setShowModal("register")} className="signup-btn">Sign up</button>
                </div>
            </div>
            o

            {/* Modal */}
            <AnimatePresence>
                {showModal && (
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
                                <LoginForm switchToRegister={switchToRegister} onSubmit={handleLogin} error={error} />
                            ) : (
                                <RegisterForm switchToLogin={switchToLogin} />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Welcome;
