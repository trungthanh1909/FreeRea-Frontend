import HomePage from "../pages/HomePage";
import GenrePage from "../pages/GenrePage";
import RankingsPage from "../pages/RankingsPage";
import BookDetailPage from "../pages/BookDetailPage";
import Unauthorized from "./Unauthorized";

export const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/book/:bookId", component: BookDetailPage },
    { path: "/genre/:genreName", component: GenrePage },
    { path: "/rankings", component: RankingsPage },
    { path: "/unauthorized", component: Unauthorized },
];
