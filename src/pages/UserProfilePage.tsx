import "../styles/UserProfilePage/UserProfile.scss";
import React, { useState } from "react";
import UserInfo from "../components/UserProfilePage/UserInfoProfile";
import UserScrollList from "../components/UserProfilePage/UserScrollListProfile";
import Navbar from "../components/Navbar";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useReadingHistoryBooks } from "../hooks";
import defaultAvatar from "../assets/default_avatar.jpg";
import { useFavouriteBooks } from "../hooks/favouriteService/useFavouriteBooks";
import { setFavoritePage } from "../store/slices/paginationSlice";
import { setReadingHistoryPage } from "../store/slices/paginationSlice";

const UserProfile: React.FC = () => {
    const [favIndex, setFavIndex] = useState(0);
    const [hisIndex, setHisIndex] = useState(0);
    const visibleCount = 6;

    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);
    const userId = user?.userId;

    const { mangaItems: historyItems, isLoading: isLoadingHistory } = useReadingHistoryBooks(userId ?? "");
    const { mangaItems: favouriteItems, isLoading: isLoadingFav } = useFavouriteBooks();

    const handleScroll = (
        type: "fav" | "his",
        direction: "left" | "right"
    ) => {
        const list = type === "fav" ? favouriteItems : historyItems;
        const index = type === "fav" ? favIndex : hisIndex;
        const max = Math.max(0, list.length - visibleCount);

        const newIndex =
            direction === "right"
                ? Math.min(index + 1, max)
                : Math.max(index - 1, 0);

        if (type === "fav") {
            setFavIndex(newIndex);
            dispatch(setFavoritePage(newIndex));
        } else {
            setHisIndex(newIndex);
            dispatch(setReadingHistoryPage(newIndex));
        }
    };

    if (!user) return <div>Loading user...</div>;

    return (
        <div className="user-profile-big">
            <Navbar />
            <div className="user-profile">
                <UserInfo
                    user={{
                        id: user.userId ?? "unknown",
                        username: user.username ?? "Unknown",
                        avatarUrl: user.avatarUrl ?? defaultAvatar,
                    }}
                />


                <UserScrollList
                    title="⭐ Favourite:"
                    items={favouriteItems}
                    index={favIndex}
                    onScroll={(dir) => handleScroll("fav", dir)}
                />

                {isLoadingHistory ? (
                    <div>Đang tải lịch sử đọc...</div>
                ) : (
                    <UserScrollList
                        title="📖 History:"
                        items={historyItems}
                        index={hisIndex}
                        onScroll={(dir) => handleScroll("his", dir)}
                    />
                )}
            </div>
        </div>
    );
};

export default UserProfile;
