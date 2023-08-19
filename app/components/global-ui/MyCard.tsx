import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box, Stack } from "@mui/material";

export default function MyCard() {
  return (
    <Card
      sx={{
        p: "1rem",
        maxWidth: "300px",
        minWidth: "250px",
        bgcolor: "#09292B",
        borderTop: ".3rem solid #07C03B",
      }}
    >
      <CardContent sx={{ p: "0px", paddingBottom: "1rem" }}>
        <Typography fontSize="16px" variant="body1" color="#fff">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all .
        </Typography>
      </CardContent>
      <Stack
        gap={2}
        sx={{
          color: "#fff",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Link href={"#"}>Learn More</Link>
        <Link href={"#"}>
          $95/lifetime <span>$459</span>
        </Link>
      </Stack>
      <CardMedia
        sx={{ mt: ".6rem", height: 150 }}
        image="https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-Yaara-_16_9.png?width=850"
        title="green iguana"
      />
    </Card>
  );
}
