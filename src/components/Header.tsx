import React from "react";

const Header = () => {
    return (
        <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3 rounded shadow">
            <h1 className="m-0">BookWorld</h1>
            <div className="d-flex">
                <input type="text" className="form-control me-2" placeholder="Tìm kiếm truyện..." />
                <button className="btn btn-light me-2">Đăng nhập</button>
                <button className="btn btn-warning">Đăng ký</button>
            </div>
        </header>
    );
};

export default Header;
