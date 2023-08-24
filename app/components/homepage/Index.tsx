import React from "react";
import Hero from "./hero/Index";
import { Box } from "@mui/material";
import Endingsoon from "./Endingsoon";
import WhatisHot from "./Whatishot/Index";

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <Endingsoon />
      <WhatisHot />
    </Box>
  );
};

export default HomePage;
