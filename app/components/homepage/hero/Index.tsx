import { Box, Stack } from "@mui/material";
import React from "react";
import Emailsignup from "./Emailsignup";
import HeroCrousel from "./HeroCrousel";

const Hero = () => {
  return (
    <Box paddingY={10} bgcolor={"#021414"}>
      <Stack gap={10} direction={{ sm: "column", md: "row" }}>
        <Emailsignup />
        <HeroCrousel />
      </Stack>
    </Box>
  );
};

export default Hero;
