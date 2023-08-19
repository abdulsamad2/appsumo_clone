import { Box, Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import Search from "./Search";
import RightSideMenu from "./RightSideMenu";
import MenuItems from "./MenuItem";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Link from "next/link";

const Header = () => {
  return (
    <Container maxWidth="xl">
      <Stack
        justifyContent="space-between"
        my={2}
        flexWrap={"wrap"}
        direction="row"
        alignItems="center"
        gap={8}
      >
        <Link href={"/"}>
          <Image
            width={150}
            height={50}
            alt="appsumo logo"
            src="/images/logo.svg"
          />
        </Link>
        <Box flex={1}>
          <Search />
        </Box>
        {/* <AccountMenu /> */}
        <RightSideMenu />
      </Stack>
      <Stack
        sx={{ display: { xs: "none", md: "flex" } }}
        justifyContent="space-between"
        direction="row"
        spacing={5}
      >
        <MenuItems />
        <Button
          sx={{
            display: { sm: "none", md: "flex" },
            height: "30px",
            color: "#000",
            py: "0px",
            borderRadius: "10rem",
            width: "20rem",
            textTransform: "capitalize",
            backgroundImage:
              "linear-gradient(90deg, rgba(187,241,204,1) 0%, rgba(174,220,242,1) 100%)",
          }}
          variant="contained"
          startIcon={<ChatOutlinedIcon />}
        >
          AskSumo and get 10% off
        </Button>
      </Stack>
    </Container>
  );
};

export default Header;
