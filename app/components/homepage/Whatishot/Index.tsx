"use client";
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import MySwiper from "../../global-ui/MySwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MyCard from "../../global-ui/MyCard";
import CardForRest from "../../global-ui/CardForRest";
import Link from "next/link";

const WhatisHot = () => {
  const [slidesPerRow, setSlidesPerRow] = useState(5);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      setSlidesPerRow(1);
    } else if (screenWidth < 960) {
      setSlidesPerRow(3);
    } else {
      setSlidesPerRow(5);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box mx={2} py={2}>
      <Box display="flex" justifyContent={"space-between"}>
        <Typography fontWeight={600} fontSize={30} variant="h2">
          What is Hot
        </Typography>
        <Link sx={{ color: "blue" }} href="#">
          view All
        </Link>
      </Box>
      <Box py={1}>
        <MySwiper slidesperpage={slidesPerRow}>
          <SwiperSlide>
            <CardForRest />
          </SwiperSlide>
          <SwiperSlide>
            <CardForRest />
          </SwiperSlide>
          <SwiperSlide>
            <CardForRest />
          </SwiperSlide>
          <SwiperSlide>
            <CardForRest />
          </SwiperSlide>
          <SwiperSlide>
            <CardForRest />
          </SwiperSlide>
          <SwiperSlide>
            <CardForRest />
          </SwiperSlide>
        </MySwiper>
      </Box>
    </Box>
  );
};

export default WhatisHot;
