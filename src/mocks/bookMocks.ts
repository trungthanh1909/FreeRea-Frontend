import { Book } from "../types";

const books: Book[] = [
    {
        id: 1,
        title: "Hành Trình Kỳ Bí",
        author: "Nguyễn Văn A",
        views: 15000,
        image: "/assets/images/hanh-trinh-ky-bi.jpg",
        description: "Một chuyến phiêu lưu đầy thử thách và nguy hiểm.",
        category: ["Phiêu lưu", "Hành động"],
        chapters: [
            { id: 1, title: "Chương 1: Cuộc gọi định mệnh", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Bước chân đầu tiên", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 2,
        title: "Thế Giới Hậu Tận Thế",
        author: "Trần B",
        views: 12000,
        image: "/assets/images/the-gioi-hau-tan-the.jpg",
        description: "Một thế giới sau tận thế, nơi con người đấu tranh để sinh tồn.",
        category: ["Viễn tưởng", "Sinh tồn"],
        chapters: [
            { id: 1, title: "Chương 1: Ngày tận thế", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Hy vọng cuối cùng", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 3,
        title: "Vua Pháp Sư",
        author: "Lê C",
        views: 18000,
        image: "/assets/images/vua-phap-su.jpg",
        description: "Một pháp sư trẻ tuổi trên con đường trở thành vị vua vĩ đại.",
        category: ["Phép thuật", "Hành động"],
        chapters: [
            { id: 1, title: "Chương 1: Khởi đầu của một pháp sư", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Đối thủ đầu tiên", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 4,
        title: "Thợ Săn Quái Vật",
        author: "Phạm D",
        views: 9500,
        image: "/assets/images/tho-san-quai-vat.jpg",
        description: "Một nhóm thợ săn dũng cảm chuyên săn lùng quái vật.",
        category: ["Hành động", "Kinh dị"],
        chapters: [
            { id: 1, title: "Chương 1: Thử thách đầu tiên", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Kẻ thù bí ẩn", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 5,
        title: "Lạc Vào Thế Giới Game",
        author: "Hoàng E",
        views: 11000,
        image: "/assets/images/lac-vao-the-gioi-game.jpg",
        description: "Một lập trình viên vô tình bị hút vào thế giới game mà chính mình tạo ra.",
        category: ["Giả tưởng", "Hài hước"],
        chapters: [
            { id: 1, title: "Chương 1: Game khởi động", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Trận chiến đầu tiên", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 6,
        title: "Hành Trình Kỳ Bí",
        author: "Nguyễn Văn A",
        views: 15000,
        image: "/assets/images/hanh-trinh-ky-bi.jpg",
        description: "Một hành trình đầy thử thách và bí ẩn ở thế giới khác.",
        category: ["Phiêu lưu", "Kỳ ảo"],
        chapters: [
            { id: 1, title: "Chương 1: Khởi đầu", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Bí mật lộ diện", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 7,
        title: "Thế Giới Hậu Tận Thế",
        author: "Trần B",
        views: 12000,
        image: "/assets/images/the-gioi-hau-tan-the.jpg",
        description: "Cuộc chiến sinh tồn trong một thế giới đầy rẫy nguy hiểm.",
        category: ["Hành động", "Khoa học viễn tưởng"],
        chapters: [
            { id: 1, title: "Chương 1: Ngày tận thế", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Hy vọng cuối cùng", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 8,
        title: "Vua Pháp Sư",
        author: "Lê C",
        views: 18000,
        image: "/assets/images/vua-phap-su.jpg",
        description: "Câu chuyện về một chàng trai trở thành pháp sư vĩ đại.",
        category: ["Phép thuật", "Hành động"],
        chapters: [
            { id: 1, title: "Chương 1: Phép thuật đầu tiên", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Thử thách đầu đời", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 9,
        title: "Thợ Săn Quái Vật",
        author: "Phạm D",
        views: 9500,
        image: "/assets/images/tho-san-quai-vat.jpg",
        description: "Một thợ săn dấn thân vào hành trình tiêu diệt quái vật để cứu thế giới.",
        category: ["Hành động", "Kinh dị"],
        chapters: [
            { id: 1, title: "Chương 1: Kẻ săn mồi", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Trận chiến đầu tiên", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 10,
        title: "Bí Mật Của Rừng Sâu",
        author: "Ngọc F",
        views: 8900,
        image: "/assets/images/bi-mat-cua-rung-sau.jpg",
        description: "Những bí mật kinh hoàng ẩn giấu trong khu rừng cổ xưa.",
        category: ["Phiêu lưu", "Kinh dị"],
        chapters: [
            { id: 1, title: "Chương 1: Lời nguyền", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Tiếng vọng từ quá khứ", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 11,
        title: "Chiến Binh Rồng",
        author: "Hoàng G",
        views: 14000,
        image: "/assets/images/chien-binh-rong.jpg",
        description: "Một chiến binh mang dòng máu rồng trên con đường tìm lại quá khứ.",
        category: ["Hành động", "Viễn tưởng"],
        chapters: [
            { id: 1, title: "Chương 1: Dòng máu rồng", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Ký ức bị đánh mất", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 12,
        title: "Lời Nguyền Cổ Đại",
        author: "Minh H",
        views: 11000,
        image: "/assets/images/loi-nguyen-co-dai.jpg",
        description: "Một lời nguyền tồn tại hàng thế kỷ đang chờ được hóa giải.",
        category: ["Kỳ ảo", "Huyền bí"],
        chapters: [
            { id: 1, title: "Chương 1: Cánh cửa bí mật", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Vòng lặp định mệnh", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 13,
        title: "Bá Tước Ma Cà Rồng",
        author: "Vũ I",
        views: 12500,
        image: "/assets/images/ba-tuoc-ma-ca-rong.jpg",
        description: "Một bá tước ma cà rồng phải đối mặt với số phận của mình.",
        category: ["Kinh dị", "Lãng mạn"],
        chapters: [
            { id: 1, title: "Chương 1: Đêm đầu tiên", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Bóng tối vĩnh hằng", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 14,
        title: "Hành Tinh Bị Lãng Quên",
        author: "Dương J",
        views: 13500,
        image: "/assets/images/hanh-tinh-bi-lang-quen.jpg",
        description: "Một hành tinh bí ẩn bị xóa khỏi lịch sử, nhưng tại sao?",
        category: ["Khoa học viễn tưởng", "Phiêu lưu"],
        chapters: [
            { id: 1, title: "Chương 1: Tín hiệu lạ", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Hành tinh chết", content: "Nội dung chương 2..." }
        ]
    },
    {
        id: 15,
        title: "Kẻ Trộm Ký Ức",
        author: "Bảo K",
        views: 10000,
        image: "/assets/images/ke-trom-ky-uc.jpg",
        description: "Một thế giới nơi ký ức có thể bị đánh cắp và mua bán.",
        category: ["Khoa học viễn tưởng", "Huyền bí"],
        chapters: [
            { id: 1, title: "Chương 1: Kẻ vô danh", content: "Nội dung chương 1..." },
            { id: 2, title: "Chương 2: Giao dịch ký ức", content: "Nội dung chương 2..." }
        ]
    }
];

// 🔹 Hàm lấy tất cả sách
export const getBookList = (): Book[] => books;

// 🔹 Hàm lấy sách theo ID
export const getBookById = (id: number): Book | undefined => {
    return books.find((book) => book.id === id);
};

// 🔹 Hàm lấy danh sách hot books (lượt xem cao nhất)
export const getHotBooks = (): Book[] => {
    return [...books].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, 3);
};

// 🔹 Hàm lấy danh sách ranking books (xếp hạng cao)
export const getRankingBooks = (): Book[] => {
    return [...books].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, 5);
};

// 🔹 Hàm lấy danh sách recent books (truyện mới)
export const getRecentBooks = (): Book[] => {
    return books.slice(-3); // Lấy 3 truyện mới nhất
};
export const getTopRatedBooks = (): Book[] => {
    return [...books]
        .sort((a, b) => (b.views ?? 0) - (a.views ?? 0)) // Sắp xếp theo lượt xem
        .slice(0, 5);
};

// 🔹 Hàm lấy chapter theo ID
export const getChapterById = (bookId: number, chapterId: number) => {
    const book = getBookById(bookId);
    return book?.chapters.find((chapter) => chapter.id === chapterId);
};
