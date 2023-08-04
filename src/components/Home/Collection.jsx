import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CollectionData } from "../../Data.jsx/AllData";

export default function Collection() {
  return (
    <Box
      sx={{
        p: {
          xs: "40px 8px",
          sm: "60px 10px",
          md: "80px 30px",
          lg: "100px 100px",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "300px", sm: "400px", md: "689px", lg: "1100px" },
          margin: "0 auto",
        }}
      >
        <img
          width={"100%"}
          src="https://www.linkpicture.com/q/collectionText.jpg"
          alt=""
        />
      </Box>

      <Grid container justifyContent={"center"} gap={9}>
        {CollectionData.map((v, i) => (
          <Grid
            item
            lg={2}
            md={8}
            sm={10}
            xs={11}
            sx={{
              textAlign: "center",
              display: { xs: "inline", sm: "flex", md: "flex", lg: "inline" },
            }}
          >
            <Box>
              <img src={v.img} alt="" />
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: 2,
                  color: "#333D4B",
                  textAlign: "center",
                  fontFamily: " Fraunces 9pt",
                  fontWeight: "900",
                  fontSize: "24px",
                }}
              >
                {v.title}
              </Typography>
              <Typography
                sx={{
                  color: "#333D4B",
                  textAlign: "center",
                  fontFamily: "Barlow",
                  fontWeight: "400",
                  fontSize: "16px",
                  fontStyle: "normal",
                }}
              >
                {v.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
