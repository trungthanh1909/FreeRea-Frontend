export interface ApiResponse<T> {
    code: number;
    message: string;
    result: T;
}

export interface PaginatedResponse<T> {
    data: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
    message: string;
    status: "success" | "error";
}
