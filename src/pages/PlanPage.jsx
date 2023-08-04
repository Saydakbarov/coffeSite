import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import PlanMain from "../components/Plan/PlanMain";
import CreatePlan from "../components/Plan/CreatePlan";
import Footer from "../components/Footer";

export default function PlanPage() {
  return (
    <Box>
      <HeaderMenu />
      <PlanMain />
      <CreatePlan />
      <Footer />
    </Box>
  );
}
