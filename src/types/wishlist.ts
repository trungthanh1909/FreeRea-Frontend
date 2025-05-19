// types/wishlist.ts

export interface WishlistRequest {
    userId: number;
    bookId: number;
}

export interface WishlistResponse {
    id: string;
    userId: number;
    bookId: number;
    addedAt: string; // ISO date string
}

// Optional: if you want to display addedAt in a Date object or different format, define a FE model
export interface WishlistItem {
    id: string;
    userId: number;
    bookId: number;
    addedAt: Date;
}
