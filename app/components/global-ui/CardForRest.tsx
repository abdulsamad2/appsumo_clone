import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box, ButtonGroup, Stack } from "@mui/material";
import MyButtonGroup from "./MyButtonGroup";
import Stars from "./Stars";

export default function CardForRest({}) {
  return (
    <Card
      sx={{
        paddingBottom: ".8rem",
        maxWidth: "290px",
        boxShadow: "10px 6px 17px -20px rgba(0,0,0,0.15)",
        border: ".1rem solid #f0efef",
      }}
    >
      <CardMedia
        sx={{ height: 160 }}
        image="https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-Activepieces-_16_9.png?width=850"
        title="green iguana"
      />
      <CardContent
        sx={{ textAlign: "cetner", p: "0px", paddingBottom: ".3rem" }}
      >
        <MyButtonGroup />
        <Link href="#">
          <Typography fontWeight={600}>Air Deck</Typography>
        </Link>
        <Link href="#">
          <Typography
            fontWeight={500}
            sx={{ textDecoration: "underline" }}
            variant="body1"
          >
            Development tools
          </Typography>
        </Link>
        <Typography fontSize="16px" variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all .
        </Typography>
      </CardContent>
      <Stack
        gap={2}
        sx={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stars />

        <Link href={"#"}>$95/lifetime</Link>
      </Stack>
    </Card>
  );
}
