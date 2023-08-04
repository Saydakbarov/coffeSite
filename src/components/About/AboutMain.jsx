import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function AboutMain() {
  return (
    <Box
      sx={{
        p: {
          xs: "0px 8px",
          sm: "0px 10px",
          md: "0px 30px",
          lg: "0px 100px",
        },
      }}
    >
      <Grid
        container
        sx={{
          backgroundImage:
            "url('https://www.linkpicture.com/q/homeHeader.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "left",
          },
          p: {
            xs: "100px 10px",
            sm: "100px 20px",
            md: "100px 30px",
            lg: "100px 40px",
          },
          borderRadius: "10px",
          width: "100%",
          objectFit: "cover",
          backgroundSize: { lg: "100%" },
          justifyContent: { xs: "center", sm: "center", md: "start" },
        }}
      >
        <Grid
          item
          lg={7}
          sx={{ textAlign: { xs: "center", sm: "left" }, pb: 10 }}
        >
          <Typography
            sx={{
              color: "#FEFCF7",
              fontFamily: "Fraunces 9pt",
              fontSize: { xs: "20px", sm: "20px", md: "28px", lg: "32px" },
              fontWeight: "900",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              color: "#FEFCF7",
              fontFamily: "Barlow",
              fontSize: "16px",
              mt: 2,
            }}
          >
            Coffeeroasters began its journey of exotic discovery in 1999, <br />
            highlighting stories of coffee from around the world. We have <br />{" "}
            since been dedicated to bring the perfect cup - from bean to <br />{" "}
            brew - in every shipment.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
