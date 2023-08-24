"use client";
import { Box, Stack, css } from "@mui/system"; // Import css from @mui/system
// import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { Children, ReactNode, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CircularProgress from "@mui/material/CircularProgress";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
interface Props {
  children: ReactNode;
  slidesperpage: Number | string;
}

const MySwiper: React.FC<Props> = ({ children, slidesperpage }) => {
  const swiperRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  useEffect(() => {
    setLoading(false);
  }, []);
  const goPrev = () => {
    if (swiperRef.current) {
      swiperInstance?.current?.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperInstance?.current?.swiper?.slideNext();
    }
  };
  if (loading) {
    return (
      <Box sx={{ mx: "auto", mt: "4rem" }}>
        <CircularProgress disableShrink />;
      </Box>
    );
  }
  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesperpage}
        autoplay={{
          delay: 3000,
        }}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }} // Add navigation config
        className="customswipper"
      >
        {children}
      </Swiper>
      <Box sx={{ display: { xs: "none", md: "block" }, position: "relative" }}>
        <ChevronLeftIcon
          sx={{
            bgcolor: "#000",
            color: "white",
            bottom: "15rem",
            left: "-.6rem",
            position: "absolute",
            zIndex: "10",
            width: "2rem",
            height: "2rem",
            borderRadius: "10rem",
            ":active": { transform: "translateY(-1px)" },

            ":hover": { transform: "translateY(1px)", cursor: "pointer" },
          }}
          className="swiper-button-prev"
          onClick={goPrev}
        />
        <ChevronRightIcon
          sx={{
            ":hover": { transform: "translateY(1px)", cursor: "pointer" },
            ":active": { transform: "translateY(-1px)" },
            bgcolor: "#000",
            color: "white",
            bottom: "15rem",
            right: "-.6rem",
            position: "absolute",
            zIndex: "10",
            width: "2rem",
            height: "2rem",
            borderRadius: "10rem",
          }}
          className="swiper-button-next"
          onClick={goNext}
        />
      </Box>
    </>
  );
};

export default MySwiper;
