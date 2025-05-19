import { Link } from "react-router-dom";

const Unauthorized = () => (
    <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2 style={{ color: "red", fontSize: "1.8rem" }}>🚫 Bạn không có quyền truy cập trang này.</h2>
        <p>Vui lòng kiểm tra lại quyền truy cập hoặc quay về trang chủ.</p>
        <Link to="/" style={{ textDecoration: "underline", color: "blue" }}>← Quay về trang chủ</Link>
    </div>
);
export default Unauthorized;