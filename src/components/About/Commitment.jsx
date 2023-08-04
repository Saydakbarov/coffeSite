import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Commitment() {
  return (
    <Box
      sx={{
        p: {
          xs: "0px 8px",
          sm: "0px 10px",
          md: "0px 30px",
          lg: "0px 100px",
        },
        mt: 12,
      }}
    >
      <Grid container justifyContent={"center"} gap={16} alignItems={"center"}>
        <Grid item lg={4} md={5} sm={10} sx={11}>
          <img
            width={"100%"}
            style={{
              maxHeight: "500px",
              borderRadius: "8px",
            }}
            height={"100%"}
            src="https://www.linkpicture.com/q/about2_2.jpg"
            alt=""
          />
        </Grid>
        <Grid item lg={3.9} md={4} sm={10} sx={11}>
          <Typography sx={{ fontSize: "32px", fontWeight: "900" }}>
            Our commitment
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "400",
              fontFamily: "Barlow",
              color: "#333D4B",
              mt: 3,
            }}
          >
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
