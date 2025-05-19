import { ReadingLog } from "../../types";

// Giả định kiểu dữ liệu thô trả về từ backend
type RawReadingLogResponse = {
    id: string;
    userId: number;
    bookId: number;
    chapterId: number;
    duration: number;
    timestamp: string | Date;
};

// Chuẩn hóa từ backend → frontend
export function mapReadingLog(data: RawReadingLogResponse): ReadingLog {
    return {
        id: data.id,
        userId: data.userId,
        bookId: data.bookId,
        chapterId: data.chapterId,
        duration: data.duration,
        timestamp: new Date(data.timestamp).toISOString(), // Chuẩn hóa về ISO format
    };
}
