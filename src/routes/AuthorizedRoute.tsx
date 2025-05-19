import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface AuthorizedRouteProps {
    roles?: string[];
    permissions?: string[];
}

const AuthorizedRoute = ({ roles = [], permissions = [] }: AuthorizedRouteProps) => {
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    const hasRequiredRole = roles.length === 0 || roles.some(role => user?.roles?.includes(role));
    const hasRequiredPermission =
        permissions.length === 0 || permissions.some(p => user?.permissions?.includes(p));

    if (!hasRequiredRole || !hasRequiredPermission) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default AuthorizedRoute;
