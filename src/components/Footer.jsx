import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { PAGES } from "../Data.jsx/AllData";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: {
          xs: "30px 8px",
          sm: "30px 10px",
          md: "20px 40px",
          lg: "3px 100px",
        },
        mt:3
      }}
    >
      <Grid
        container
        alignItems={"center"}
        gap={3}
        sx={{
          background: "#2C343E",
          p: {
            xs: "20px 20px",
            sm: "20px 60px",
            md: "20px 70px",
            lg: "20px 80px",
          },
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "space-between",
          },
        }}
      >
        <Grid
          item
          lg={7}
          md={5}
          sm={8}
          xs={5}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
            },
            flexWrap: { xs: "wrap", sm: "wrap", md: "wrap" },
            gap: "20px",
          }}
        >
          <Box sx={{ width: { xs: "217px", sm: "220px", md: "236px" } }}>
            <img
              width={"100%"}
              src="https://www.linkpicture.com/q/logo-removebg-preview-2_1.png"
              alt=""
            />
          </Box>
          <Box>
            {PAGES.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#83888F",
                  fontFamily: "Barlow",
                  fontWeight: "700",
                  ml: 2,
                  fontSize: "12px",
                }}
                onClick={() => navigate(item.path)}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Grid>

        <Grid item lg={3.3} md={8} sm={8} xs={8}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              color: "#ffff",
              fontSize: "20px",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "end",
              },
            }}
          >
            <Facebook />
            <Twitter />
            <Instagram />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
