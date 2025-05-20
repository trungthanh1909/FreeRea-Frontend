import React from 'react';

interface SidebarProps {
    categories: string[];
    selectedCategories: string[];
    onToggleCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategories, onToggleCategory }) => {
    return (
        <aside className="sidebar-genres">
            <div className="category-wrapper">
                <div className="category-title">Genres</div>
                <ul className="category-list" id="categoryList">
                    {categories.map((cat, index) => (
                        <li
                            key={index}
                            className={`category-item ${selectedCategories.includes(cat) ? 'active' : ''}`}
                            onClick={() => onToggleCategory(cat)}
                            style={{ cursor: 'pointer' }}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
