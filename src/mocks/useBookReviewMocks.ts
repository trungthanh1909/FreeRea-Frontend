// src/mocks/useBookReviewMocks.ts

export const useGetBookById = (bookId: string) => ({
    data: {
        data: {
            id: Number(bookId),
            title: "Giấc mơ đêm hè",
            author: "William Shakespeare",
            description: "Một vở hài kịch tình yêu đầy phép thuật và những hiểu lầm lãng mạn.",
            coverUrl: "/img/sample-cover.jpg",
            categories: ["Drama", "Romance", "Fantasy"]
        }
    },
    isLoading: false,
    error: null
});

export const useGetChaptersByBookId = (bookId: string) => ({
    data: {
        data: [
            { id: 1, title: "Chương 1: Khởi đầu" },
            { id: 2, title: "Chương 2: Gặp gỡ định mệnh" },
            { id: 3, title: "Chương 3: Cuộc phiêu lưu" }
        ]
    },
    isLoading: false
});

export const useCheckIsFavourite = (username: string, bookId: string) => ({
    data: false
});

export const useAddBookToFavourite = () => ({
    mutate: (payload: any) => alert(`✅ Đã thêm vào yêu thích cho ${payload.username}`),
});

export const useRemoveBookFromFavourite = () => ({
    mutate: (payload: any) => alert(`❌ Đã gỡ khỏi yêu thích cho ${payload.username}`),
});

export const useCheckBookmarkExists = (userId: number, bookId: number) => ({
    data: true
});

export const useCreateBookmark = () => ({
    mutate: (payload: any) => alert(`🔖 Đã bookmark sách ${payload.bookId}`),
});

export const useDeleteBookmark = () => ({
    mutate: (payload: any) => alert(`🗑️ Đã xóa bookmark sách ${payload.bookId}`),
});

export const useAuth = () => ({
    user: {
        username: "mockuser",
        userId: "123"
    }
});
