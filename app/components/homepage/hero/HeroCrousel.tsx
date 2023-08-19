import { Box, Stack } from "@mui/material";
import React from "react";
import MyCard from "../../global-ui/MyCard";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const HeroCrousel = () => {
  return (
    <>
      <Stack sx={{ position: "relative" }} gap={2} direction={"row"}>
        <Box display={"flex"} gap={2} sx={{ direction: "row" }}>
          <MyCard />
          <MyCard />
          <MyCard />
        </Box>
        <Box sx={{ position: "absolute", bottom: "-3rem" }}>
          <KeyboardBackspaceIcon
            sx={{
              bgcolor: "#07c03b",
              mx: "5px",
              fontSize: "2rem",
              borderRadius: "30rem",
              padding: ".5rem",
            }}
          />
          <EastIcon
            sx={{
              bgcolor: "#07c03b",
              mx: "5px",
              fontSize: "2rem",
              borderRadius: "30rem",
              padding: ".5rem",
            }}
          />
        </Box>
      </Stack>
    </>
  );
};

export default HeroCrousel;
