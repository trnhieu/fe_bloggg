import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../../layout/Heading";
import PostFeatureItem from "./PostFeatureItem";
const PostRelated = ({ item }) => {
    return (
        <>
            <Heading titile="Bài viết liên quan" />
            <div className="mt-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={{ clickable: true }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {item.slice(0, 4).map((item) => (
                        <SwiperSlide key={item.id}>
                            <PostFeatureItem data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default PostRelated;
