
import '../styles/UserProfilePage/UserProfile.scss';
import React, { useMemo, useState } from 'react';
import UserInfo from '../components/UserProfilePage/UserInfoProfile';
import UserScrollList from '../components/UserProfilePage/UserScrollListProfile';
import Navbar from "../components/Navbar";


import { useGetFavouriteListByUser } from '../hooks/favouriteService/useFavourite';

import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetUserReadingHistory, useGetUserProfileById } from '../hooks/userProfileService/useUserProfileHooks';

import { useAuth } from '../hooks/authService/useAuth';


import { useGetBookById } from '../hooks/bookService/useBook';

interface BookSummary {
    id: string;
    title: string;
    thumbnail: string;
}

// Custom hook để lấy thông tin sách
const useBookDetails = (bookIds: string[]): BookSummary[] => {
    return bookIds.map(id => {
        const { data } = useGetBookById(id);
        return {
            id,
            title: data?.data?.title || 'Không rõ',
            thumbnail: data?.data?.coverUrl || '/default-thumbnail.jpg',
        };
    });
};

const UserProfile: React.FC = () => {
    const [favIndex, setFavIndex] = useState(0);
    const [hisIndex, setHisIndex] = useState(0);
    const visibleCount = 6;

    const { user } = useAuth();
    const userId = user?.userId;
    const username = user?.username;

    const shouldFetch = !!userId && !!username;

    const { data: userProfile } = useGetUserProfileById(userId || "", shouldFetch);
    const { data: favorites = [] } = useGetFavouriteListByUser(username || "");
    const { data: history = [] } = useGetUserReadingHistory(userId || "");

    if (!userId || !username) {
        return <div>⚠️ Vui lòng <a href="/login">đăng nhập</a> để xem hồ sơ.</div>;
    }


    const profileData = {
        username: userProfile?.username ?? username,

        avatarUrl: userProfile?.avatarUrl ?? '/avatar.png',
    };


    const favBooks = useBookDetails(
        favorites.map(f => f.bookId).filter((id): id is string => !!id)
    );

    const hisBooks = useBookDetails(
        history.map(h => h.bookId).filter((id): id is string => !!id)
    );


    const handleScroll = (
        type: 'fav' | 'his',
        direction: 'left' | 'right'
    ) => {
        const list = type === 'fav' ? favBooks : hisBooks;
        const index = type === 'fav' ? favIndex : hisIndex;
        const max = Math.max(0, list.length - visibleCount);
        const newIndex =
            direction === 'right'
                ? Math.min(index + 1, max)
                : Math.max(index - 1, 0);

        type === 'fav' ? setFavIndex(newIndex) : setHisIndex(newIndex);
    };

    return (
        <div className="user-profile-big">
            <Navbar />
            <div className="user-profile">
                <UserInfo user={profileData} />

                <UserScrollList
                    title="⭐ Favourite:"
                    items={favBooks}
                    index={favIndex}
                    onScroll={(dir) => handleScroll('fav', dir)}
                />

                <UserScrollList
                    title="📖 History:"
                    items={hisBooks}
                    index={hisIndex}
                    onScroll={(dir) => handleScroll('his', dir)}
                />
            </div>
        </div>
    );
};

export default UserProfile;
