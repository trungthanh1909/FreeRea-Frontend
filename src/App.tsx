import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import ReadPage from "./pages/ReadPage";
import ChapterPage from "./pages/ChapterPage";
import CategoryPage from "./pages/CategoryPage";
import UserProfile from "./pages/UserProfile";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:userId" element={<UserProfile />} />
                <Route path="/read/:bookId" element={<ReadPage />} />
                <Route path="/read/:bookId/chapter/:chapterId" element={<ChapterPage />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default App;
