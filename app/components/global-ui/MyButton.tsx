import { Button } from "@mui/material";
import React from "react";

interface myButtonProps {
  children: React.ReactNode;
  href?: string;
  sx?: Object;
}
const MyButton: React.FC<myButtonProps> = ({ children, href, sx }) => {
  return (
    <Button
      href={href}
      disableRipple={true}
      variant="contained"
      sx={{
        ...sx,
        px: "1.4rem",
        borderRadius: "30px",
        color: "#000",
        textTransform: "capitalize",
        bgcolor: "#FFBC00",
        "&:hover": { bgcolor: "#ffee4e" }, // Make sure the color value is correct
      }}
    >
      {children}
    </Button>
  );
};

export default MyButton;
