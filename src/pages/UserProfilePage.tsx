import '../styles/UserProfilePage/UserProfile.scss';
import React, { useEffect, useState } from 'react';

import UserInfo from '../components/UserProfilePage/UserInfoProfile';
import UserScrollList from '../components/UserProfilePage/UserScrollListProfile';

interface MangaItem {
    title: string;
    thumbnail: string;
}

interface UserData {
    username: string;
    email: string;
    description: string;
    favorites: MangaItem[];
    history: MangaItem[];
}

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<UserData | null>(null);
    const [favIndex, setFavIndex] = useState(0);
    const [hisIndex, setHisIndex] = useState(0);
    const visibleCount = 6;

    useEffect(() => {
       // getUserData().then((data) => setUser(data));
    }, []);

    const handleScroll = (
        type: 'fav' | 'his',
        direction: 'left' | 'right'
    ) => {
        if (!user) return;
        const list = type === 'fav' ? user.favorites : user.history;
        const index = type === 'fav' ? favIndex : hisIndex;
        const max = list.length - visibleCount;
        const newIndex =
            direction === 'right'
                ? Math.min(index + 1, max)
                : Math.max(index - 1, 0);

        type === 'fav' ? setFavIndex(newIndex) : setHisIndex(newIndex);
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className="user-profile">
            <UserInfo user={user} />

            <UserScrollList
                title="⭐ Favourite:"
                items={user.favorites}
                index={favIndex}
                onScroll={(dir) => handleScroll('fav', dir)}
            />

            <UserScrollList
                title="📖 History:"
                items={user.history}
                index={hisIndex}
                onScroll={(dir) => handleScroll('his', dir)}
            />
        </div>
    );
};

export default UserProfile;