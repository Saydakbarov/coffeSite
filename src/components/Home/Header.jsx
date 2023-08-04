import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderMain from "./HeaderMain";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <HeaderMenu />
      <HeaderMain />
    </Box>
  );
}
