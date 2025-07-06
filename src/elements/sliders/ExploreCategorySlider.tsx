"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css/bundle";
import { ExploreCard } from "@/data/explore-card-data";

const ExploreCategorySlider = () => {
  return (
    <div className="row wow fadeInUp">
      <div className="col-lg-12">
        <div className="categories-bar pos-rel mb-30">
          <div className="swiper-container categories-bar-active">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={3} // Show 4 cards max
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              navigation={{
                nextEl: ".categories-bar-button-next",
                prevEl: ".categories-bar-button-prev",
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {ExploreCard.map((item, num) => (
                <SwiperSlide key={num}>
                  <div className="creator-single creator-single-short mb-30">
                    <div className="creator-wraper">
                      <div className="creator-inner">
                        <div className="creator-content pos-rel creator-short-content">
                          <div className="creator-info">
                            <div>
                              <h4 className="artist-name pos-rel">
                                <Link href="/creators">{item.cardTitle}</Link>
                                <span className="profile-verification verified">
                                  <i className="fas fa-check"></i>
                                </span>
                              </h4>
                              <div className="artist-id">{item.cardAmount}</div>
                              <div className="artist-meta-item">
                                <div className="artist-created">
                                  {item.cardStats}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="categories-nav">
            <div className="categories-bar-button-prev">
              <i className="fal fa-angle-left"></i>
            </div>
            <div className="categories-bar-button-next">
              <i className="fal fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategorySlider;
