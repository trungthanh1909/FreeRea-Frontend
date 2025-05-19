import UserProfilePage from "../pages/UserProfilePage";
import AdminPage from "../pages/AdminPage";
import BookManagement from "../pages/BookManagement";

export const privateRoutes = [
    {
        path: "/user/:userId",
        component: UserProfilePage,
    },
    {
        path: "/admin",
        component: AdminPage,
        roles: ["admin"],
    },
    {
        path: "/books/manage",
        component: BookManagement,
        permissions: ["BOOK_MANAGE"],
    },
];
