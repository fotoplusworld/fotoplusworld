import React, { Suspense } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import BeforeAfterCardComponent from "../components/BeforeAfterCardComponent";

// Internationalization
import { useTranslation } from "react-i18next";

import WhatWeOfferSection from "../components/WhatWeOfferSection";

const ServicesAboutBanner = React.lazy(() =>
  import("../components/ServicesAboutBanner")
);

// Images
const twoDThreeD1Before = "/2D-to-3D/twod-threed-1-before_yb1JFyADM.jpg";
const twoDThreeD1After = "/2D-to-3D/twod-threed-1-after_hVHd-_4gm.jpg";
const twoDThreeD2Before = "/2D-to-3D/twod-threed-2-before_o9EEntwlY.jpg";
const twoDThreeD2After = "/2D-to-3D/twod-threed-2-after_HCrbbj1oC.jpg";
const twoDThreeD3Before = "/2D-to-3D/twod-threed-3-before_wGMEtQ58T.jpg";
const twoDThreeD3After = "/2D-to-3D/twod-threed-3-after_WPvPwBhGx.jpg";
const twoDThreeD4Before = "/2D-to-3D/twod-threed-4-before_mOICoqftd.jpg";
const twoDThreeD4After = "/2D-to-3D/twod-threed-4-after_JyEZRkv4k.jpg";
const twoDThreeD5Before = "/2D-to-3D/twod-threed-5-before_3ErRgFo-ra.jpg";
const twoDThreeD5After = "/2D-to-3D/twod-threed-5-after_dw7BOlXQy.jpg";
const twoDThreeD6Before = "/2D-to-3D/2d-winton-farm-first-floor_hWVD9H6LJx.jpg";
const twoDThreeD6After = "/2D-to-3D/3d-winton-farm-first-floor_7ymMO1BvQU.jpg";
const twoDThreeD7Before = "/2D-to-3D/2d-winton-farm-second-floor_tXbdjEms6.jpg";
const twoDThreeD7After = "/2D-to-3D/3d-winton-farm-second-floor_QDe8JwJ0tE.jpg";
const twoDThreeD8Before = "/2D-to-3D/2d-winton-farm-lower-level_bIwqlLvS1.jpg";
const twoDThreeD8After = "/2D-to-3D/3d-winton-farm-lower-level_fM8CE5ZAgg.jpg";

const threeDFloorPlan1Unfurnished =
  "/3d-floor-plans/3d-floor-plan-1-skewed-unfurnished_q1rIt7__v.jpg";
const threeDFloorPlan1Furnished =
  "/3d-floor-plans/3d-floor-plan-1-skewed-furnished__kChWvDNW.jpg";
const threeDFloorPlan2Unfurnished =
  "/3d-floor-plans/3d-floor-plan-2-skewed-unfurnished_zYGuVjnB3.jpg";
const threeDFloorPlan2Furnished =
  "/3d-floor-plans/3d-floor-plan-2-skewed-furnished_cRFTGPhLk.jpg";
const threeDFloorPlan3Unfurnished =
  "/3d-floor-plans/3d-floor-plan-3-skewed-unfurnished_92nNBqQnG.jpg";
const threeDFloorPlan3Furnished =
  "/3d-floor-plans/3d-floor-plan-3-skewed-furnished_JK0liL1_m.jpg";

const Services2DTo3D = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ServicesBanner service={t("twoDToThreeDFloorPlan")} />
      <Container sx={{ marginBottom: "130px", marginTop: "50px" }}>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 7 }}
        >
          <Typography component="p" variant="h4">
            {t("threeDFloorPlanMarketingHeader")}
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
              beforeImage={twoDThreeD1Before}
              altBeforeImage="2D-to-3D-before-1"
              afterImage={twoDThreeD1After}
              altAfterImage="2D-to-3D-after-1"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              beforeImage={twoDThreeD2Before}
              altBeforeImage="2D-to-3D-before-2"
              afterImage={twoDThreeD2After}
              altAfterImage="2D-to-3D-after-2"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              beforeImage={twoDThreeD3Before}
              altBeforeImage="2D-to-3D-before-3"
              afterImage={twoDThreeD3After}
              altAfterImage="2D-to-3D-after-3"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              beforeImage={twoDThreeD4Before}
              altBeforeImage="2D-to-3D-before-4"
              afterImage={twoDThreeD4After}
              altAfterImage="2D-to-3D-after-4"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              beforeImage={twoDThreeD5Before}
              altBeforeImage="2D-to-3D-before-5"
              afterImage={twoDThreeD5After}
              altAfterImage="2D-to-3D-after-5"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              beforeImage={twoDThreeD6Before}
              altBeforeImage="2D-to-3D-before-6"
              afterImage={twoDThreeD6After}
              altAfterImage="2D-to-3D-after-6"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              beforeImage={twoDThreeD7Before}
              altBeforeImage="2D-to-3D-before-7"
              afterImage={twoDThreeD7After}
              altAfterImage="2D-to-3D-after-7"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              beforeImage={twoDThreeD8Before}
              altBeforeImage="2D-to-3D-before-8"
              afterImage={twoDThreeD8After}
              altAfterImage="2D-to-3D-after-8"
            />
          </Box>
        </Suspense>
      </Container>

      <Container>
        <Box sx={{ marginTop: "100px" }}>
          <Typography
            component="p"
            variant="h4"
            sx={{
              fontWeight: "700",
              lineHeight: "75px",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            {t("unfurnishedFurnished")}
          </Typography>
          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={threeDFloorPlan1Unfurnished}
                altBeforeImage="3D-floor-plan-unfurnished-1"
                afterImage={threeDFloorPlan1Furnished}
                altAfterImage="3D-floor-plan-furnished-1"
              />
            </Box>
          </Suspense>
          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={threeDFloorPlan2Unfurnished}
                altBeforeImage="3D-floor-plan-unfurnished-2"
                afterImage={threeDFloorPlan2Furnished}
                altAfterImage="3D-floor-plan-furnished-2"
              />
            </Box>
          </Suspense>
          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={threeDFloorPlan3Unfurnished}
                altBeforeImage="3D-floor-plan-unfurnished-3"
                afterImage={threeDFloorPlan3Furnished}
                altAfterImage="3D-floor-plan-furnished-3"
              />
            </Box>
          </Suspense>
        </Box>
      </Container>

      <Suspense fallback={<div />}>
        <ServicesAboutBanner />
      </Suspense>
      <WhatWeOfferSection />
      <FooterComponent />
    </React.Fragment>
  );
};

export default Services2DTo3D;
