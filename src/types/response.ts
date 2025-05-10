export interface ApiResponse<T> {
    data: T;
    message: string;
    status: "success" | "error";
}

export interface PaginatedResponse<T> {
    data: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
    message: string;
    status: "success" | "error";
}
