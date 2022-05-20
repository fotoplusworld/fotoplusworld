import React, { Suspense } from "react";
import { Box, Container, Typography } from "@mui/material";

// Internationalization
import { useTranslation } from "react-i18next";

const ServicesBanner = (props) => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div />}>
      <Box
        sx={{
          backgroundColor: "grey.900",
          marginBottom: "100px",
          height: "40%",
          textAlign: "center",
          padding: "60px 0 100px 0",
        }}
      >
        <Container>
          <Typography
            variant="h5"
            color="common.white"
            sx={{ marginBottom: "50px" }}
          >
            {t("services")}
          </Typography>
          <Typography
            variant="h3"
            color="common.white"
            sx={{ marginBottom: "50px", fontWeight: "100" }}
          >
            {props.service}
          </Typography>
        </Container>
      </Box>
    </Suspense>
  );
};

export default ServicesBanner;
