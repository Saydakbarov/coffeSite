import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import AboutMain from "../components/About/AboutMain";
import Commitment from "../components/About/Commitment";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <Box>
      <HeaderMenu />
      <AboutMain />
      <Commitment />
      <Footer/>
    </Box>
  );
}
