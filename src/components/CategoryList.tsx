import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../mocks/categoryMocks";
import "../styles/CategoryList.scss";

const CategoryList: React.FC = () => {
    const categories = getCategories();
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate(); // ✅ Dùng navigate để điều hướng

    return (
        <div className="category-list">
            <div className="categories">
                {categories.slice(0, 6).map((category) => (
                    <button key={category.id} className="category-item" onClick={() => navigate(`/category/${category.name}`)}>
                        {category.name}
                    </button>
                ))}
                <button className="category-item more-btn" onClick={() => setShowMore(!showMore)}>
                    Xem thêm
                </button>
            </div>

            {showMore && (
                <div className="category-dropdown">
                    {categories.slice(6).map((category) => (
                        <button key={category.id} className="category-item" onClick={() => navigate(`/category/${category.name}`)}>
                            {category.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryList;
 