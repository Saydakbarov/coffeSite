import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { WorksData } from "../../Data.jsx/AllData";
import { useNavigate } from "react-router-dom";

export default function Works() {
  const navigate = useNavigate()
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
      <Typography
        sx={{
          color: "#83888F",
          fontFamily: "Fraunces 9pt",
          fontSize: "24px",
          fontWeight: "900",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        How it works
      </Typography>
      <Box
        sx={{
          width: "70%",
          height: "3px",
          background: "#FDD6BA",
          position: "relative",
          mt: 8,
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
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
                color: "#333D4B",
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
                color: "#333D4B",
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
      <Button variant="contained" sx={{ background: "#66D2CF", mt: 6 }} onClick={() => navigate("/create")}>
        Create your plan
      </Button>
    </Box>
  );
}
