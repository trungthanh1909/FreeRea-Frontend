
import '../styles/UserProfilePage/UserProfile.scss';
import React, { useEffect, useState } from 'react';
//import { getUserData } from '../services/userService';
import UserInfo from '../components/UserProfilePage/UserInfoProfile';
import UserScrollList from '../components/UserProfilePage/UserScrollListProfile';
import Navbar from "../components/Navbar";
//import Footer from "../components/Footer";

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

    const dummyUser: UserData = {
        username: "Usio",
        email: "usio@example.com",
        description: "Mình thích đọc truyện tranh.",
        favorites: Array(10).fill({
            title: "Truyện ưa thích",
            thumbnail: "/img/sample1.jpg",
        }),
        history: Array(8).fill({
            title: "Đã đọc gần đây",
            thumbnail: "/img/sample2.jpg",
        }),
    };
    setUser(dummyUser);
}, []);


    const handleScroll = (
        type: 'fav' | 'his',
        direction: 'left' | 'right'
    ) => {
        const list = type === 'fav' ? user!.favorites : user!.history;
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


    if (!user) return <div>Loading...</div>;


    return (
        <div className="user-profile-big">
            <Navbar/>
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

        </div>
    );
};

export default UserProfile;
