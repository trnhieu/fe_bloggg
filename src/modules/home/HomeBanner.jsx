import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "../../components/banner_meta/Link";
import Meta from "../../components/banner_meta/Meta";
import BarLoading from "../../components/loading/BarLoading";
import { postAction } from "../../redux/post.slice";
import { categoryAllSelector } from "../../selector/selector";

const HomeBanner = () => {
    const categoryAll = useSelector(categoryAllSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postAction.getCategoryAll());
    }, [dispatch]);

    if (categoryAll.loading) return <BarLoading />;
    return (
        <>
            <div className="py-10">
                <div className="flex flex-col items-center justify-center gap-5">
                    <Meta
                        name="blog"
                        title="news and insights"
                        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eligendi recusandae incidunt repellendus consequuntur in veniam rerum alias molestiae delectus voluptas praesentium consequatur suscipit, animi, eum debitis nihil quibusdam error."
                    />
                    <div className="flex gap-5 px-8 py-4 transition-all shadow-lg">
                        {categoryAll.map((item) => (
                            <Link
                                key={item.id}
                                linkName={item.name}
                                to={`${item.name}`}
                                className="px-6 py-3"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeBanner;
