import { useLogin, useLogout, useRefreshToken, useIntrospectToken } from "./useAuth";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import { UserResponse } from "../../api/auth-service";

export const useAuthHooks = () => {
    const { mutateAsync: login } = useLogin();
    const { mutateAsync: logout } = useLogout();
    const refresh = useRefreshToken();
    const introspect = useIntrospectToken();

    const token = useAppSelector((state: RootState) => state.auth.token);
    const user = useAppSelector((state: RootState) => state.auth.user) as UserResponse | null;

    const isAuthenticated = !!token;

    return {
        login,
        logout,
        refresh,
        introspect,
        user,
        isAuthenticated,
    };
};
