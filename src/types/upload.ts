// ===============================
// 📌 Request types
// ===============================

export interface FromUrlUploadForm {
    url: string;
    bookId: string;
    chapterId: string;
    name: string;
}

export interface UploadAvatarForm {
    file: File;
    userId: string;
}

export interface UploadCoverForm {
    file: File;
    bookId: string;
}

export interface UploadImageForm {
    file: File;
}

// ===============================
// 📌 Response types
// ===============================

export interface AvatarUploadResponse {
    url: string;
    userId: string;
}

export interface CoverUploadResponse {
    url: string;
    bookId: string;
}

export interface FromUrlUploadResponse {
    url: string;
    publicId: string;
    fileName: string;
    createdAt: string; // ISO format
}

export interface UploadResponse {
    url: string;
    publicId: string;
    category: string;
    uploadedAt: string; // ISO format
}
