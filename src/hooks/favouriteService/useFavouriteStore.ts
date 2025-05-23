import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const useFavouriteStore = () => {
    const bookIds = useSelector((state: RootState) => state.favourite.bookIds);

    const isFavourite = (bookId: string) => bookIds.includes(bookId);

    return {
        bookIds,
        isFavourite,
    };
};
