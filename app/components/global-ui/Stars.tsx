import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Stars() {
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
      }}
    >
      <Rating name="read-only" value={value} readOnly />
      <Typography sx={{ color: "blue", fontSize: "12px" }} component="legend">
        10 reviews
      </Typography>
    </Box>
  );
}
