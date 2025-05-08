import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReadPage from "./pages/ReadPage";
import ChapterPage from "./pages/ChapterPage";
import CategoryPage from "./pages/CategoryPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read/:bookId" element={<ReadPage />} />
            <Route path="/read/:bookId/chapter/:chapterId" element={<ChapterPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
    );
};

export default App;
