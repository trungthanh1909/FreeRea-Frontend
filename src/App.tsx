import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReadPage from "./pages/ReadPage";
import ChapterPage from "./pages/ChapterPage";
import CategoryPage from "./pages/CategoryPage"; // ✅ Thêm trang thể loại

const App: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/read/:bookId" element={<ReadPage />} />
            <Route path="/read/:bookId/chapter/:chapterId" element={<ChapterPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* ✅ Route mới */}
        </Routes>
    );
};

export default App;
