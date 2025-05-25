import HomePage from "../pages/HomePage";
import GenrePage from "../pages/GenresPage";
import ResultsPage from "../pages/ResultsPage";
import BookReview from "../pages/Bookreview";
import Unauthorized from "../routes/Unauthorized";

export const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/genres", component: GenrePage },
    { path: "/results/category", component: ResultsPage },
    { path: "/book/review/:bookId", component: BookReview },
    { path: "/unauthorized", component: Unauthorized },
];