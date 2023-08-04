import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { WorksData } from "../../Data.jsx/AllData";

export default function Stepper() {
  return (
    <Box sx={{ background: "#293039", p: 5, borderRadius: "10px", mt: 8 }}>
      <Box
        sx={{
          width: "70%",
          height: "3px",
          background: "#FDD6BA",
          position: "relative",
          display: { xs: "none", sm: "none", md: "flex" },

          mt: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            justifyContent: "space-between",
            display: "flex",
            top: "-30px",
          }}
        >
          <p
            style={{
              width: "31px",
              height: "31px",
              borderRadius: "100%",
              border: "2px solid #0E8784",
            }}
          ></p>
          <p
            style={{
              width: "31px",
              height: "31px",
              borderRadius: "100%",
              border: "2px solid #0E8784",
            }}
          ></p>
          <p
            style={{
              width: "31px",
              height: "31px",
              borderRadius: "100%",
              border: "2px solid #0E8784",
            }}
          ></p>
        </Box>
      </Box>

      <Grid container justifyContent={"start"} gap={20} mt={5}>
        {WorksData.map((v, i) => (
          <Grid
            key={i}
            item
            lg={2.6}
            md={8}
            sm={10}
            xs={11}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography
              sx={{
                color: "#FDD6BA",
                fontFamily: "Fraunces 9pt",
                fontWeight: "900",
                fontSize: { xs: "72px" },
              }}
            >
              {v.num}
            </Typography>
            <Typography
              sx={{
                color: "#FEFCF7",
                fontFamily: "Fraunces 9pt",
                fontSize: { xs: "28px", sm: "28px", md: "32px" },
                fontWeight: "900",
                mt: 1,
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
                mt: 3,
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
