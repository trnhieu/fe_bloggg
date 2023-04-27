import React from "react";
import Heading from "../../layout/Heading";
import PostNewestItem from "../posts/PostNewestItem";
import PostNewestLarge from "../posts/PostNewestLarge";

const HomeNewest = ({ item }) => {
    return (
        <div>
            <div>
                <Heading titile="Latest posts" />
                <div className="grid items-start grid-cols-2 gap-10 my-10">
                    {item.slice(0, 1).map((item) => (
                        <PostNewestLarge data={item} key={item.id} />
                    ))}
                    <div className="px-5 py-5 rounded-lg  overflow-y-auto h-[490px]">
                        {item.map((item) => (
                            <PostNewestItem data={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNewest;
