import React, { Suspense } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import BeforeAfterCardComponent from "../components/BeforeAfterCardComponent";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import WhatWeOfferSection from "../components/WhatWeOfferSection";

const ServicesAboutBanner = React.lazy(() =>
  import("../components/ServicesAboutBanner")
);

const ServicesSketchTo2D = () => {
  const { t } = useTranslation();

  const sketchTo2DBefore1 =
    "/sketch-to-2d/sketch-first-floor-chateaux-cir-scarsdale_UIhwMET9G.jpg";
  const sketchTo2DAfter1 =
    "/sketch-to-2d/2D-first-floor-chateaux-cir-scarsdale_0rUlvXtj0.jpg";

  const sketchTo2DBefore2 =
    "/sketch-to-2d/sketch-first-floor-walkabout_7lopruQq8.jpg";
  const sketchTo2DAfter2 =
    "/sketch-to-2d/2d-first-floor-walkabout_ramrVdQzF.jpg";

  return (
    <React.Fragment>
      <ServicesBanner service={t("sketchTo2DFloorPlan")} />
      <Container sx={{ marginBottom: "130px", marginTop: "50px" }}>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 7 }}
        >
          <Typography component="p" variant="h4">
            {t("twoDFloorPlanMarketingHeader")}
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={5}
            sx={{ display: "flex", textAlign: "center" }}
          >
            <Grid item lg={6} md={12} xs={12}>
              <Typography component="p" variant="h5" sx={{ fontWeight: "100" }}>
                {t("attractBuyers")}
              </Typography>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Typography component="p" variant="h5" sx={{ fontWeight: "100" }}>
                {t("buyersVisualize")}
              </Typography>
            </Grid>

            <Grid item lg={6} md={12} xs={12}>
              <Typography component="p" variant="h5" sx={{ fontWeight: "100" }}>
                {t("hookAttention")}
              </Typography>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Typography component="p" variant="h5" sx={{ fontWeight: "100" }}>
                {t("generateLeads")}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container>
        <Typography
          component="p"
          variant="h4"
          sx={{
            fontWeight: "100",
            lineHeight: "75px",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          {t("imageEnhancementStatement")}
        </Typography>
        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              beforeImage={sketchTo2DBefore1}
              altBeforeImage="sketch-to-2D-before-1"
              afterImage={sketchTo2DAfter1}
              altAfterImage="sketch-to-2D-after-1"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              beforeImage={sketchTo2DBefore2}
              altBeforeImage="sketch-to-2D-before-2"
              afterImage={sketchTo2DAfter2}
              altAfterImage="sketch-to-2D-after-2"
            />
          </Box>
        </Suspense>
      </Container>

      <Suspense fallback={<div />}>
        <ServicesAboutBanner />
      </Suspense>
      <WhatWeOfferSection />
      <FooterComponent />
    </React.Fragment>
  );
};

export default ServicesSketchTo2D;
