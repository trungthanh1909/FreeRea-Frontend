import { toast } from "react-toastify";

export const showToast = (
    message: string,
    type: "success" | "error" = "success") => {
    toast[type](message);
};
