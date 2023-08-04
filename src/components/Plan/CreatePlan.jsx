import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  CoffeeGram,
  DeliverData,
  DrinkData,
  GrindData,
  PlanMenu,
  TypeData,
} from "../../Data.jsx/AllData";
import "./Styles/CardStyle.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

export default function CreatePlan() {
  const [drink, setDrink] = useState("");
  const [type, setType] = useState("");
  const [gram, setGram] = useState("");
  const [grind, setGrind] = useState("");
  const [deliver, setDelievr] = useState("");
  const [active, setActive] = useState(false);

  //   Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(drink);
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
      <Grid container gap={12}>
        <Grid item lg={2}>
          {PlanMenu.map((v, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                mt: 2,
                borderBottom: "1px solid gray",
                pb: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#83888F",
                  fontFamily: "Fraunces 9pt",
                  fontSize: "20px",
                  fontWeight: "900",
                }}
              >
                {v.num}
              </Typography>
              <Typography
                sx={{
                  color: "#ACAFB2",
                  fontFamily: "Fraunces 9pt",
                  fontSize: "20px",
                  fontWeight: "900",
                }}
              >
                {v.title}
              </Typography>
            </Box>
          ))}
        </Grid>
        {/* Drink */}
        <Grid item lg={8}>
          <Grid container gap={6}>
            <Typography
              sx={{
                color: "#83888F",
                fontFamily: "Fraunces 9pt",
                fontSize: "40px",
                fontWeight: "900",
              }}
            >
              How do you drink your coffee?
            </Typography>
            {DrinkData.map((v, i) => (
              <Grid
                key={i}
                item
                lg={3.3}
                sx={{
                  p: 6,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                className={v.title === drink ? "active" : "card"}
                component={"div"}
                onClick={() => {
                  setActive(!active);
                  setDrink(v.title);
                }}
              >
                <Typography
                  sx={{
                    color: v.title === drink ? "white" : "#333D4B",
                    fontFamily: "Fraunces 9pt",
                    fontSize: "24px",
                    fontWeight: "900",
                  }}
                >
                  {v.title}
                </Typography>
                <Typography
                  sx={{
                    color: v.title === drink ? "white" : "#333D4B",
                    fontFamily: "Barlow",
                    fontSize: "16px",
                    mt: 3,
                  }}
                >
                  {v.text}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Grid container gap={6} mt={3}>
            <Typography
              sx={{
                color: "#83888F",
                fontFamily: "Fraunces 9pt",
                fontSize: "40px",
                fontWeight: "900",
                width: "100%",
              }}
            >
              What type of coffee?
            </Typography>

            {/* Type */}
            {TypeData.map((v, i) => (
              <Grid
                key={i}
                item
                lg={3.3}
                sx={{
                  p: 6,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                className={v.title === type ? "active" : "card"}
                component={"div"}
                onClick={() => {
                  setActive(!active);
                  setType(v.title);
                }}
              >
                <Typography
                  sx={{
                    color: v.title === type ? "white" : "#333D4B",
                    fontFamily: "Fraunces 9pt",
                    fontSize: "24px",
                    fontWeight: "900",
                  }}
                >
                  {v.title}
                </Typography>
                <Typography
                  sx={{
                    color: v.title === type ? "white" : "#333D4B",
                    fontFamily: "Barlow",
                    fontSize: "16px",
                    mt: 3,
                  }}
                >
                  {v.text}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Grid container gap={6} mt={3}>
            <Typography
              sx={{
                color: "#83888F",
                fontFamily: "Fraunces 9pt",
                fontSize: "40px",
                fontWeight: "900",
                width: "100%",
              }}
            >
              How much would you like?
            </Typography>

            {/* Type */}
            {CoffeeGram.map((v, i) => (
              <Grid
                key={i}
                item
                lg={3.3}
                sx={{
                  p: 6,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                className={v.title === gram ? "active" : "card"}
                component={"div"}
                onClick={() => {
                  setActive(!active);
                  setGram(v.title);
                }}
              >
                <Typography
                  sx={{
                    color: v.title === gram ? "white" : "#333D4B",
                    fontFamily: "Fraunces 9pt",
                    fontSize: "24px",
                    fontWeight: "900",
                  }}
                >
                  {v.title}
                </Typography>
                <Typography
                  sx={{
                    color: v.title === gram ? "white" : "#333D4B",
                    fontFamily: "Barlow",
                    fontSize: "16px",
                    mt: 3,
                  }}
                >
                  {v.text}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Grid container gap={6} mt={3}>
            <Typography
              sx={{
                color: "#83888F",
                fontFamily: "Fraunces 9pt",
                fontSize: "40px",
                fontWeight: "900",
                width: "100%",
              }}
            >
              Want us to grind them?
            </Typography>

            {/* Type */}
            {GrindData.map((v, i) => (
              <Grid
                key={i}
                item
                lg={3.3}
                sx={{
                  p: 6,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                className={v.title === grind ? "active" : "card"}
                component={"div"}
                onClick={() => {
                  setActive(!active);
                  setGrind(v.title);
                }}
              >
                <Typography
                  sx={{
                    color: v.title === grind ? "white" : "#333D4B",
                    fontFamily: "Fraunces 9pt",
                    fontSize: "24px",
                    fontWeight: "900",
                  }}
                >
                  {v.title}
                </Typography>
                <Typography
                  sx={{
                    color: v.title === grind ? "white" : "#333D4B",
                    fontFamily: "Barlow",
                    fontSize: "16px",
                    mt: 3,
                  }}
                >
                  {v.text}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Grid container gap={6} mt={3}>
            <Typography
              sx={{
                color: "#83888F",
                fontFamily: "Fraunces 9pt",
                fontSize: "40px",
                fontWeight: "900",
                width: "100%",
              }}
            >
              How often should we deliver?
            </Typography>

            {/* Type */}
            {DeliverData.map((v, i) => (
              <Grid
                key={i}
                item
                lg={3.3}
                sx={{
                  p: 4,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                className={v.title === deliver ? "active" : "card"}
                component={"div"}
                onClick={() => {
                  setActive(!active);
                  setDelievr(v.title);
                }}
              >
                <Typography
                  sx={{
                    color: v.title === deliver ? "white" : "#333D4B",
                    fontFamily: "Fraunces 9pt",
                    fontSize: "20px",
                    fontWeight: "900",
                  }}
                >
                  {v.title}
                </Typography>
                <Typography
                  sx={{
                    color: v.title === deliver ? "white" : "#333D4B",
                    fontFamily: "Barlow",
                    fontSize: "16px",
                    mt: 3,
                  }}
                >
                  {v.text}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Grid container gap={6} mt={3}>
            <Box
              sx={{
                width: "100%",
                background: "#282F38",
                borderRadius: "10px",
                p: 4,
              }}
            >
              <Typography
                sx={{ color: "#fff", fontFamily: "Barlow", fontSize: "16px" }}
              >
                Order Summary
              </Typography>
              <Typography
                sx={{ color: "#fff", fontFamily: "Barlow", fontSize: "24px" }}
              >
                “I drink my coffee as{" "}
                <span style={{ color: "#0E8784" }}>{drink}</span>, with a
                <span style={{ color: "#0E8784" }}>{type}</span> type of bean.{" "}
                <span style={{ color: "#0E8784" }}>{gram}</span> ground ala{" "}
                <span style={{ color: "#0E8784" }}>{grind}</span>, sent to me{" "}
                <span style={{ color: "#0E8784" }}>{deliver}</span>
                .”
              </Typography>
            </Box>
            <Box sx={{ width: "100%", textAlign: "end" }}>
              <Button
                variant="contained"
                sx={{ background: "#66D2CF" }}
                onClick={handleOpen}
              >
                Create Your Plan
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box
                    sx={{
                      borderRadius: "10px",
                      p: 3,
                    }}
                  >
                    <Box
                      sx={{
                        background: "#2E3743",
                        p: 2,
                        borderRadius: "10px 10px 0px 0px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: "Barlow",
                          fontSize: "16px",
                          width: "100%",
                        }}
                      >
                        Order Summary
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        background: "white",
                        borderRadius: "0px 0px 10px 10px",
                        p: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#83888F",
                          fontFamily: "Barlow",
                          fontSize: "24px",
                        }}
                      >
                        “I drink my coffee as{" "}
                        <span style={{ color: "#0E8784" }}>{drink}</span>, with
                        a<span style={{ color: "#0E8784" }}>{type}</span> type
                        of bean.{" "}
                        <span style={{ color: "#0E8784" }}>{gram}</span> ground
                        ala <span style={{ color: "#0E8784" }}>{grind}</span>,
                        sent to me{" "}
                        <span style={{ color: "#0E8784" }}>{deliver}</span>
                        .”
                      </Typography>
                      <Typography
                        sx={{ color: "#333D4B", fontSize: "11px", mt: 1 }}
                      >
                        Is this correct? You can proceed to checkout or go back
                        to plan selection if something is off. Subscription
                        discount codes can also be redeemed at the checkout.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Fraunces 9pt",
                            color: "#333D4B",
                            fontSize: "24px",
                            fontWeight: "900",
                          }}
                        >
                          $14.00 / mo
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{ background: "#66D2CF" }}
                          onClick={() => setOpen(!open)}
                        >
                          Checkout
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
