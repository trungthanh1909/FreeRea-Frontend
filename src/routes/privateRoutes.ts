import UserProfilePage from "../pages/UserProfilePage";
import AdminPage from "../pages/AdminCreateBook";
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
];
