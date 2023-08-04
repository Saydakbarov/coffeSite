import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CompanyData } from "../../Data.jsx/AllData";

export default function Company() {
  return (
    <Box
      sx={{
        p: {
          xs: "40px 8px",
          sm: "60px 10px",
          md: "80px 40px",
          lg: "100px 100px",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          background: "#293039",
          p: 4,
          borderRadius: "10px",
          height: "400px",
        }}
      >
        <Typography
          sx={{
            color: "#FEFCF7",
            fontFamily: "Fraunces 9pt",
            fontSize: { xs: "28px", sm: "32px", md: "40px" },
            mt: 4,
          }}
        >
          Why choose us?
        </Typography>
        <Typography
          sx={{
            color: "#FEFCF7",
            fontFamily: "Barlow",
            fontSize: "16px",
            fontWeight: "400",
            mt: 2,
          }}
        >
          A large part of our role is choosing which particular coffees will be
          featured <br /> in our range. This means working closely with the best
          coffee growers to give <br /> you a more impactful experience on every
          level.
        </Typography>
      </Box>
      <Grid
        container
        justifyContent={"center"}
        gap={4}
        sx={{ marginTop: "-130px" }}
      >
        {CompanyData.map((v, i) => (
          <Grid
            key={i}
            item
            lg={2.8}
            md={8}
            sm={10}
            xs={11}
            sx={{
              background: "#0E8784",
              borderRadius: "6px",
              textAlign: "center",
              p: 4,
            }}
          >
            <img src={v.icon} alt="" />
            <Typography
              sx={{
                color: "#FEFCF7",
                fontFamily: "Fraunces 9pt",
                fontSize: "24px",
                fontWeight: "900",
              }}
            >
              {v.title}
            </Typography>
            <Typography
              sx={{
                color: "#FEFCF7",
                fontFamily: "Barlow",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              {v.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
