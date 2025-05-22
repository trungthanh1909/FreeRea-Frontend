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
    const [user] = useState<UserData>({
        username: 'DemoUser',
        email: 'demo@example.com',
        description: 'Đây là tài khoản demo.',
        favorites: [
            { title: 'Truyện A', thumbnail: 'https://via.placeholder.com/150' },
            { title: 'Truyện B', thumbnail: 'https://via.placeholder.com/150' },
        ],
        history: [
            { title: 'Truyện X', thumbnail: 'https://via.placeholder.com/150' },
            { title: 'Truyện Y', thumbnail: 'https://via.placeholder.com/150' },
        ],
    });

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
        const list = type === 'fav' ? user.favorites : user.history;
        const index = type === 'fav' ? favIndex : hisIndex;
        const max = Math.max(0, list.length - visibleCount);

        const newIndex =
            direction === 'right'
                ? Math.min(index + 1, max)
                : Math.max(index - 1, 0);

        if (type === 'fav') {
            setFavIndex(newIndex);
        } else {
            setHisIndex(newIndex);
        }
    };

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
