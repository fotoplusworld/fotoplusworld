import React, { Suspense } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import BeforeAfterCardComponent from "../components/BeforeAfterCardComponent";

import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import WhatWeOfferSection from "../components/WhatWeOfferSection";

const ServicesAboutBanner = React.lazy(() =>
  import("../components/ServicesAboutBanner")
);

// Images
const dayToDusk1Before =
  "/day-to-dusk/day-to-dusk-1-before-min-min_F-90Bs8nO.jpg";
const dayToDusk1After =
  "/day-to-dusk/day-to-dusk-1-after-min-min_5d_A_6feO.jpg";
const dayToDusk2Before =
  "/day-to-dusk/day-to-dusk-2-before-min-min_5k9CVi6yc.jpg";
const dayToDusk2After =
  "/day-to-dusk/day-to-dusk-2-after-min-min_GZjD-UL9W.jpg";

const ServicesDayToDusk = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ServicesBanner service={t("dayToDusk")} />
      <Container sx={{ marginBottom: "130px", marginTop: "50px" }}>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 7 }}
        >
          <Typography component="p" variant="h4">
            {t("dayToDuskMarketingHeader")}
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
                {t("saveTimeDusk")}
              </Typography>
            </Grid>

            <Grid item lg={6} md={12} xs={12}>
              <Typography component="p" variant="h5" sx={{ fontWeight: "100" }}>
                {t("perfectHeroShot")}
              </Typography>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Typography component="p" variant="h5" sx={{ fontWeight: "100" }}>
                {t("standOutCompetition")}
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
              title={t("duskSkyReplacement")}
              description={t("duskSkyReplacementDesc")}
              beforeImage={dayToDusk1Before}
              altBeforeImage="day-to-dusk-before-1"
              afterImage={dayToDusk1After}
              altAfterImage="day-to-dusk-after-1"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              title={t("hdrProcessing")}
              description={t("hdrProcessingDesc")}
              beforeImage={dayToDusk2Before}
              altBeforeImage="day-to-dusk-before-2"
              afterImage={dayToDusk2After}
              altAfterImage="day-to-dusk-after-2"
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

export default ServicesDayToDusk;
