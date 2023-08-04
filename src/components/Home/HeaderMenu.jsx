import {
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DrawerComp from "./DrawerComp";
import { PAGES } from "../../Data.jsx/AllData";


export default function HeaderMenu() {
  const navigate = useNavigate();

  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          p: {
            xs: "20px 8px",
            sm: "20px 10px",
            md: "20px 30px",
            lg: "20px 100px",
          },
        }}
      >
        <Toolbar
          sx={{
            borderBottom: "1px solid white",
            padding: "0px !important",
            zIndex: "999",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              pb: 1,
              zIndex: "9999",
            }}
          >
            <img
              style={{ width: "200px", cursor: "pointer" }}
              src="https://www.linkpicture.com/q/logo-removebg-preview-2_1.png"
              alt=""
            />
          </Box>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {PAGES.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#83888F",
                      fontFamily: "Barlow",
                      fontWeight: "700",
                      ml: 2,
                    }}
                    onClick={() => navigate(item.path)}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </Box>
    </Box>
  );
}
