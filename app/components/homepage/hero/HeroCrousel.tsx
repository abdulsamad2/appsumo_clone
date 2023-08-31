"use client";
import { Box, Stack, css } from "@mui/system"; // Import css from @mui/system
// import React, { useEffect, useRef, useState } from "react";
import MyCard from "../../global-ui/MyCard";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Pagination from "swiper";
import CircularProgress from "@mui/material/CircularProgress";
import Navigation from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

export default function App() {
  const [slidesPerRow, setSlidesPerRow] = useState(3);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      setSlidesPerRow(1);
    } else if (screenWidth < 960) {
      setSlidesPerRow(2);
    } else {
      setSlidesPerRow(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const swiperRef = useRef(null);
  const [loading, setLoading] = useState(true);

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
        slidesPerView={slidesPerRow}
        spaceBetween={0}
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
        className="mySwiper"
      >
        <SwiperSlide>
          <MyCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyCard />
        </SwiperSlide>
      </Swiper>
      <Box sx={{ display: { xs: "none", md: "none" } }}>
        <Button
          className="swiper-button-prev"
          variant="contained"
          onClick={goPrev}
          startIcon={<ChevronLeftIcon />}
        >
          Prev
        </Button>
        <Button
          className="swiper-button-next"
          variant="contained"
          onClick={goNext}
          endIcon={<ChevronRightIcon />}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
