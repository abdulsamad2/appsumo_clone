import { Box, Typography } from "@mui/material";
import React from "react";
import { Barlow } from "next/font/google";
import EmailInput from "./EmailInput";
const barlow = Barlow({
  subsets: ["latin"],
  weight: "600",
});

const Emailsignup = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      sx={{
        px: { xs: "2rem", md: "0rem" },
        marginLeft: { xs: "0", md: "10rem" },
        maxWidth: { xs: "90%", md: "450px" },
      }}
    >
      <Typography
        className={barlow.className}
        fontSize="42px"
        variant="h2"
        color={"#fff"}
      >
        Never pay full price for software again
      </Typography>
      <Typography variant="body1" color={"#fff"}>
        Sign up to get the hottest software deals sent straight to your inbox
        and get 10% off your first order!
      </Typography>
      <EmailInput />
    </Box>
  );
};

export default Emailsignup;
