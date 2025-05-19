import { QueryClient, DefaultOptions } from "@tanstack/react-query";
import { showToast } from "../utils/toast";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true, // 👉 Cho phép dùng <Suspense> trong component
            retry: 2, // Tự động retry 2 lần khi gặp lỗi
            refetchOnWindowFocus: false, // Không refetch khi focus vào cửa sổ
            staleTime: 1000 * 60 * 10, // Thời gian giữ dữ liệu trước khi stale (10 phút)
            cacheTime: 1000 * 60 * 30, // Thời gian giữ dữ liệu sau khi stale (30 phút)
            keepPreviousData: true, // Giữ lại dữ liệu cũ khi refetch
            refetchInterval: false, // Không refetch định kỳ
            onError: (error: any) => {
                console.error("Có lỗi khi fetch dữ liệu:", error);
            },
            onSuccess: (data: any) => {
                console.log("Dữ liệu fetch thành công:", data);
            },
        },
        mutations: {
            suspense: false, // Suspense không áp dụng cho mutation
            retry: false, // Không retry cho các mutations
            onSuccess: (data: any) => {
                console.log("Mutation thành công:", data);
            },
            onError: (error: any) => {
                console.error("Có lỗi khi thực hiện mutation:", error);
                showToast("Thao tác thất bại. Vui lòng thử lại.", "error");
            },

        },
    } as DefaultOptions,
});
