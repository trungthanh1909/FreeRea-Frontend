import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center mt-5">
            <h1>Chào mừng đến với BookWorld 📚</h1>
            <p>Vui lòng đăng nhập hoặc đăng ký để tiếp tục.</p>
            <button className="btn btn-primary m-2" onClick={() => navigate("/login")}>Đăng nhập</button>
            <button className="btn btn-warning m-2" onClick={() => navigate("/register")}>Đăng ký</button>
        </div>
    );
};

export default Welcome;
