import HomePage from "../pages/HomePage";
import GenrePage from "../pages/GenresPage";
import BookDetailPage from "../pages/Review";
import Unauthorized from "./Unauthorized";

export const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/book/:bookId", component: BookDetailPage },
    { path: "/genre/:genreName", component: GenrePage },
    { path: "/unauthorized", component: Unauthorized },
];
