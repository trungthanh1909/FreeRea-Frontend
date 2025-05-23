import HomePage from "../pages/HomePage";
import GenrePage from "../pages/GenresPage";
import BookDetailPage from "../pages/Review";
import Unauthorized from "./Unauthorized";
import ReviewPage from "../pages/Review";
import CreateBookForm from "../pages/AdminCreateBook";
import BookDetailsPage from "../pages/CreateChaptersBookPage";
import ReadingForm from "../pages/ReadPage";
import ResultsPage from "../pages/ResultsPage";
import UserProfile from "../pages/UserProfilePage";
import BookReview from "../pages/Bookreview";
import AdminProfile from "../pages/AdminProfile";

export const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/book/:bookId", component: BookDetailPage },
    { path: "/genres", component: GenrePage },
    { path: "/unauthorized", component: Unauthorized },
    {path: "/admin/create",component:CreateBookForm},
    { path: "/admin/create/createchapter",component:BookDetailsPage},
    { path: "/admin/review",component:ReviewPage},
    { path:"/admin/review/reading",component:ReadingForm},
    { path:"/results/category",component:ResultsPage},
    { path: "/user/profile",component:UserProfile},
    { path:"/book/review",component:BookReview},
    { path:"/admin/profile",component:AdminProfile}

];
