import React, { useState, useEffect } from "react";
import "../styles/SearchBar.scss";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const [showSearchBar, setShowSearchBar] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest(".search-container")) {
                setShowSearchBar(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Tìm kiếm sách..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    onSearch(e.target.value);
                }}
                onFocus={() => setShowSearchBar(true)}
            />
            <span className="search-icon">🔍</span>

            {showSearchBar && (
                <div className="search-bar-dropdown">
                    <p>Gợi ý tìm kiếm...</p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
