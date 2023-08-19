import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import MyButton from "../global-ui/MyButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const RightSideMenu = () => {
  return (
    <Stack direction={"row"} gap={2} alignItems={"center"}>
      <Link href={"/"}>Sell on AppSumo</Link>
      <Link href={"/"}>Login</Link>
      <MyButton href="#">Sign up</MyButton>
      <ShoppingCartIcon />
    </Stack>
  );
};

export default RightSideMenu;
