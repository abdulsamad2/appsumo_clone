"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Stack } from "@mui/material";

export default function MenuItems() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab
          disableRipple={true}
          sx={{ textTransform: "capitalize" }}
          label="Software"
        />
        <Tab
          disableRipple={true}
          sx={{ textTransform: "capitalize" }}
          label="Business essentials"
        />
        <Tab
          disableRipple={true}
          sx={{ textTransform: "capitalize" }}
          label="New arrivals"
        />
        <Tab
          disableRipple={true}
          sx={{ textTransform: "capitalize" }}
          label="Ending soon"
        />
      </Tabs>
    </Stack>
  );
}
