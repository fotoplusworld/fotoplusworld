import React, { Suspense } from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import GradeIcon from "@mui/icons-material/Grade";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

// Internationalization
import { useTranslation } from "react-i18next";

const ServicesAboutBanner = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div />}>
      <Box
        sx={{
          backgroundColor: "grey.900",
          marginTop: "150px",

          height: "40%",
          textAlign: "center",
          padding: "60px 0 100px 0",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            color="common.white"
            sx={{ fontWeight: "bolder", marginBottom: 15 }}
          >
            {t("serviceAboutBannerStatement")}
          </Typography>
          <Grid
            container
            spacing={10}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item lg={4}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  sx={{
                    padding: "16px",
                    backgroundColor: "#ab47bc",
                    borderRadius: "100px",
                    marginBottom: "20px",
                    height: "36px",
                    width: "36px",
                  }}
                >
                  <AccessTimeFilledIcon
                    sx={{ color: "black" }}
                    fontSize="large"
                  />
                </Paper>
              </Box>
              <Typography
                variant="h4"
                color="common.white"
                sx={{ fontWeight: "100" }}
              >
                {t("fastDelivery")}
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  sx={{
                    padding: "16px",
                    backgroundColor: "#ab47bc",
                    borderRadius: "100px",
                    marginBottom: "20px",
                    height: "36px",
                    width: "36px",
                  }}
                >
                  <GradeIcon sx={{ color: "black" }} fontSize="large" />
                </Paper>
              </Box>

              <Typography
                variant="h4"
                color="common.white"
                sx={{ fontWeight: "100" }}
              >
                {t("highQuality")}
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  sx={{
                    padding: "16px",
                    backgroundColor: "#ab47bc",
                    borderRadius: "100px",
                    marginBottom: "20px",
                    height: "36px",
                    width: "36px",
                  }}
                >
                  <HeadsetMicIcon sx={{ color: "black" }} fontSize="large" />
                </Paper>
              </Box>
              <Typography
                variant="h4"
                color="common.white"
                sx={{ fontWeight: "100" }}
              >
                {t("greatCustomerService")}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
};

export default ServicesAboutBanner;
