import { PageRecordResponse, RecordResponse } from "../api/readingHistory-service";

/** Chuẩn hóa từng record đọc của user */
export interface ReadingHistoryItem {
    userId: string;
    bookId: string;
    chapterId: string;
    lastReadAt: string;              // ISO string gốc
    lastReadAtFormatted: string;    // ví dụ: "22/05/2025"
}

/** Chuẩn hóa trang kết quả lịch sử đọc */
export interface ReadingHistoryPage {
    totalElements: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    items: ReadingHistoryItem[];
}

/** Hàm map từng record */
export const mapRecordResponse = (record: RecordResponse): ReadingHistoryItem => {
    const dateStr = record.lastReadAt ?? "";
    return {
        userId: record.userId ?? "",
        bookId: record.bookId ?? "",
        chapterId: record.chapterId ?? "",
        lastReadAt: dateStr,
        lastReadAtFormatted: dateStr
            ? new Date(dateStr).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })
            : "",
    };
};

/** Hàm map toàn bộ trang kết quả */
export const mapPageRecordResponse = (page: PageRecordResponse): ReadingHistoryPage => {
    return {
        totalElements: page.totalElements ?? 0,
        totalPages: page.totalPages ?? 0,
        currentPage: page.number ?? 0,
        pageSize: page.size ?? 10,
        items: (page.content ?? []).map(mapRecordResponse),
    };
};
