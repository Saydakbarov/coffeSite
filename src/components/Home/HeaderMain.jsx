import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderMain() {
  const navigate = useNavigate();
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
        <Grid item lg={7} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            sx={{
              color: "#FEFCF7",
              fontFamily: "Fraunces 9pt",
              fontSize: { xs: "40px", sm: "45px", md: "50px", lg: "72px" },
              fontWeight: "900",
            }}
          >
            Great coffee <br /> made simple
          </Typography>
          <Typography
            sx={{
              color: "#FEFCF7",
              fontFamily: "Barlow",
              fontSize: "16px",
              mt: 2,
            }}
          >
            Start your mornings with the world's best coffees. Try our <br />{" "}
            expertly curated artisan coffees from our best roasters <br />{" "}
            delivered directly to your door, at your schedule.
          </Typography>

          <Button
            variant="contained"
            sx={{ background: "#66D2CF", mt: 4 }}
            onClick={() => navigate("/create")}
          >
            Create Your Plan
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
