import CreateBookForm from "../pages/AdminCreateBook";
import BookDetailsPage from "../pages/CreateChaptersBookPage";
import ReviewPage from "../pages/Review";
import ReadingForm from "../pages/ReadPage";
import AdminProfile from "../pages/AdminProfile";
import UserProfile from "../pages/UserProfilePage";

export const privateRoutes = [
    { path: "/admin/create", component: CreateBookForm, roles: ["admin_system"] },
    { path: "/admin/create/createchapter", component: BookDetailsPage, roles: ["admin_system"] },
    { path: "/admin/review", component: ReviewPage, roles: ["admin_system"] },
    { path: "/admin/review/reading", component: ReadingForm, roles: ["admin_system"] },
    { path: "/admin/profile", component: AdminProfile, roles: ["admin_system"] },
    { path: "/user/profile", component: UserProfile },
];