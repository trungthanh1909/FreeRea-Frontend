import { Configuration } from "../api/auth-service";
import { store } from "../store";

export const createServiceConfig = () =>
    new Configuration({
        basePath: import.meta.env.VITE_API_BASE_URL,
        accessToken: () => store.getState().auth.token || "",
        baseOptions: {
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
            },
        },
    });
