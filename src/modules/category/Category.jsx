import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BarLoading from "../../components/loading/BarLoading";
import { postActionSelector } from "../../selector/selector";
import PostItem from "../posts/PostItem";

const Category = () => {
    const { categoryName } = useParams();
    const postActions = useSelector(postActionSelector);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        try {
            const filter = postActions.data.filter(
                (item) => item.category.name === categoryName,
            );
            setLoading(false);
            setCategories(filter);
        } catch (error) {
            setLoading(false);
        }
    }, [categoryName, postActions]);

    return (
        <>
            {loading && <BarLoading />}
            <div className="my-10">
                <div className="grid-layout">
                    {categories.map((item) => (
                        <PostItem data={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Category;
