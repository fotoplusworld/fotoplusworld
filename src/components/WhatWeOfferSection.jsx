import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import OfferComponent from "./OfferComponent";
import { useTranslation } from "react-i18next";

const imageEnhancement =
  "/image-enhancement/image-enhancement-2-after_o3YHXp90B.jpg";
const dayToDusk = "/day-to-dusk/day-to-dusk-1-after-min-min_5d_A_6feO.jpg";
const twoDThreeD = "/2D-to-3D/3d-winton-farm-lower-level_fM8CE5ZAgg.jpg";
const itemRemoval = "/item-removal/item-removal-2-after_GgsoefQF2.jpg";
const sketchTo2D =
  "/sketch-to-2d/2D-first-floor-chateaux-cir-scarsdale_0rUlvXtj0.jpg";
const virtualStaging =
  "/virtual-staging/virtual-staging-1-after_iG-zNhmIve.jpg";

const WhatWeOfferSection = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Box sx={{ marginTop: "100px", marginBottom: "200px" }}>
        <Box sx={{ textAlign: "center", marginBottom: "70px" }}>
          <Typography component="p" variant="h3" sx={{ fontWeight: "700" }}>
            {t("whatWeOffer")}
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6}>
            <OfferComponent
              title={t("imageEnhancement")}
              path={imageEnhancement}
              alt="image-enhancement"
              price="$3.00"
              url="/services/image-enhancement"
            />
          </Grid>
          <Grid item lg={6}>
            <OfferComponent
              title={t("twoDFloorPlan")}
              path={sketchTo2D}
              alt="2D-floor-plan"
              price="$10.00"
              url="/services/sketch-to-2d-floor-plan"
            />
          </Grid>
          <Grid item lg={6}>
            <OfferComponent
              title={t("virtualStaging")}
              path={virtualStaging}
              alt="virtual-staging"
              price="$35.00"
              url="/services/virtual-staging"
            />
          </Grid>
          <Grid item lg={6}>
            <OfferComponent
              title={t("threeDFloorPlan")}
              path={twoDThreeD}
              alt="3D-floor-plan"
              price="$15.00"
              url="/services/2D-floor-plan-to-3D-floor-plan"
            />
          </Grid>
          <Grid item lg={6}>
            <OfferComponent
              title={t("itemRemoval")}
              path={itemRemoval}
              alt="item-removal"
              price="$7.00"
              url="/services/item-removal"
            />
          </Grid>
          <Grid item lg={6}>
            <OfferComponent
              title={t("dayToDusk")}
              path={dayToDusk}
              alt="day-to-dusk"
              price="$3.00"
              url="/services/day-to-dusk"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhatWeOfferSection;
