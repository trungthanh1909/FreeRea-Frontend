export interface User {
    id: number;
    name: string;
    email: string;
    password?: string; // 👈 Thêm trường password, nhưng không bắt buộc
}
