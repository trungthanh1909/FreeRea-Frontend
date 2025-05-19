import {
    AvatarUploadResponse,
    CoverUploadResponse,
    FromUrlUploadResponse,
    UploadResponse,
} from "../../types";

export function mapAvatarUpload(data: any): AvatarUploadResponse {
    return {
        url: data.url,
        userId: data.userId,
    };
}

export function mapCoverUpload(data: any): CoverUploadResponse {
    return {
        url: data.url,
        bookId: data.bookId,
    };
}

export function mapFromUrlUpload(data: any): FromUrlUploadResponse {
    return {
        url: data.url,
        publicId: data.publicId,
        fileName: data.fileName,
        createdAt: data.createdAt,
    };
}

export function mapUpload(data: any): UploadResponse {
    return {
        url: data.url,
        publicId: data.publicId,
        category: data.category,
        uploadedAt: data.uploadedAt,
    };
}
