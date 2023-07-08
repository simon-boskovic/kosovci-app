"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import styles from "@/styles/ImageSwiper.module.scss";
import { SyntheticEvent, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import { ICompressedImages } from "@/app/page";

export default function ImageSwiper(props: {
  swiperImagePaths: ICompressedImages[];
}) {
  const { swiperImagePaths } = props;
  const imageRef = useRef<HTMLImageElement>(null);
  const swiperRef = useRef<SwiperRef>(null);
  let autoplayAlreadySet = false;

  const onImageLoad = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.classList.add(styles["c-band-logo--loaded"]);
  };

  const onFirstImageLoad = () => {
    if (!autoplayAlreadySet) {
      // swiperRef.current!.swiper.autoplay.start();
      autoplayAlreadySet = true;
    }
  };

  return (
    <div className={styles["c-swiper-wrapper"]}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {swiperImagePaths.map((imgObj, index: number) => (
          <SwiperSlide key={index}>
            <div
              className={styles["c-image-wrapper"]}
              style={{ backgroundImage: `url(${imgObj.smallImage})` }}
            >
              <Image
                ref={imageRef}
                loading="lazy"
                className={styles["c-band-logo"]}
                style={{
                  objectFit: "cover",
                }}
                src={imgObj.image}
                alt="Band Image"
                fill
                onLoad={(ev) => {
                  onImageLoad(ev);
                  onFirstImageLoad();
                }}
              />
            </div>
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
