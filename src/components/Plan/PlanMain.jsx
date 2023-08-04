import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Stepper from "./Stepper";

export default function PlanMain() {
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
          backgroundImage: "url('https://www.linkpicture.com/q/plan.jpg')",
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
        <Grid item lg={7} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            sx={{
              color: "#FEFCF7",
              fontFamily: "Fraunces 9pt",
              fontSize: { xs: "40px", sm: "45px", md: "50px", lg: "72px" },
              fontWeight: "900",
            }}
          >
            Create a plan
          </Typography>
          <Typography
            sx={{
              color: "#FEFCF7",
              fontFamily: "Barlow",
              fontSize: "16px",
              mt: 2,
            }}
          >
            Build a subscription plan that best fits your needs. We offer an{" "}
            <br />
            assortment of the best artisan coffees from around the globe <br />
            delivered fresh to your door.
          </Typography>
        </Grid>
      </Grid>

      <Stepper />
    </Box>
  );
}
