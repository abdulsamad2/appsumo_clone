"use client";
import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Stack
      py={6}
      flexDirection={{ sm: "column", md: "row" }}
      justifyContent={{ sm: "center", md: "space-around" }}
      bgcolor={"#021414"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Link href={"/"}>
          <Image
            width={150}
            height={50}
            alt="appsumo logo"
            src="/images/white-logo.svg"
          />
        </Link>
        <Typography maxWidth={"15rem"} variant="body1" color={"#fff"}>
          Part of the Sumo family with Sendfox and TidyCal
        </Typography>
        <Stack direction={"row"} color={"white"} gap={2}>
          <YouTubeIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Stack>
      </Box>
      <Box gap={1} display={"flex"} flexDirection={"column"} color={"#fff"}>
        <Typography variant="h5">Account</Typography>
        <Link sx={{ color: "#fff" }} href="#">
          Account overview
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Join Plus
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Help center
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Terms
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Privacy
        </Link>
      </Box>
      <Box gap={1} display={"flex"} flexDirection={"column"} color={"#fff"}>
        <Typography variant="h5">AppSumo</Typography>
        <Link sx={{ color: "#fff" }} href="#">
          About
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Blog
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Careers
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Affiliates
        </Link>
      </Box>
      <Box gap={1} display={"flex"} flexDirection={"column"} color={"#fff"}>
        <Typography variant="h5">Sell</Typography>
        <Link sx={{ color: "#fff" }} href="#">
          About
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Blog
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Careers
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          Affiliates
        </Link>
      </Box>
      <Box gap={1} display={"flex"} flexDirection={"column"} color={"#fff"}>
        <Typography variant="h5">Learn</Typography>
        <Link sx={{ color: "#fff" }} href="#">
          How to start an online business
        </Link>
        <Link sx={{ color: "#fff" }} href="#">
          What is the creator economy?
        </Link>
      </Box>
    </Stack>
  );
};

export default Footer;
