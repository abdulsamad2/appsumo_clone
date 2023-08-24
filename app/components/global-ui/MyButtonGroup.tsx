import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function MyButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 1,
        "& > *": {
          m: 1,
        },
      }}
    >
      <Button
        disableRipple={true}
        sx={{
          boxShadow: "none",
          py: ".8px",
          px: "2px",

          ":hover": { boxShadow: "none", backgroundColor: "#dcf7e5" },
          color: "green",
          backgroundColor: "#dcf7e5",
        }}
        variant="contained"
      >
        <Typography sx={{ fontSize: "13px", fontWeight: "600", px: "4px" }}>
          {" "}
          APPSUMO
        </Typography>{" "}
        <Box color="#000">|</Box>
        <Typography sx={{ fontSize: "13px", fontWeight: "100", px: "4px" }}>
          {" "}
          SELECT
        </Typography>
      </Button>
    </Box>
  );
}
