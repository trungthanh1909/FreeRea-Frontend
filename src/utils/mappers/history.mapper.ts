import { Record } from "../../types";

// Dữ liệu từ backend (Java LocalDate) → FE (ISO string)
export function mapRecordResponse(data: any): Record {
    return {
        userId: data.userId,
        chapterId: data.chapterId,
        bookId: data.bookId,
        lastReadAt: data.lastReadAt, // assumed to be ISO string (yyyy-MM-dd)
    };
}
