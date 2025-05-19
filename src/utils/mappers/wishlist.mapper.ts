import { WishlistResponse, WishlistItem } from "../../types";

export const mapWishlistResponseToItem = (
    response: WishlistResponse
): WishlistItem => {
    return {
        id: response.id,
        userId: response.userId,
        bookId: response.bookId,
        addedAt: new Date(response.addedAt),
    };
};
