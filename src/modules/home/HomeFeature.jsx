import React from "react";
import Heading from "../../layout/Heading";
import PostFeatureItem from "../posts/PostFeatureItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper";
const HomeFeature = ({ item }) => {
    return (
        <>
            <Heading titile="Feature" />
            <div className="my-10">
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
                    {item.map((item) => (
                        <SwiperSlide key={item.id}>
                            <PostFeatureItem data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default HomeFeature;
