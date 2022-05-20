import React, { Suspense } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";

// Internationalization
import { useTranslation } from "react-i18next";

import WhatWeOfferSection from "../components/WhatWeOfferSection";
import BeforeAfterCardComponent from "../components/BeforeAfterCardComponent";

const ServicesAboutBanner = React.lazy(() =>
  import("../components/ServicesAboutBanner")
);

const imageEnhancementBefore1 =
  "/image-enhancement/image-enhancement-6-before_xcddrR55K.jpeg";
const imageEnhancementAfter1 =
  "/image-enhancement/image-enhancement-6-after_hTaEEUV3i.jpeg";
const imageEnhancementBefore2 =
  "/image-enhancement/image-enhancement-7-before_02KqwuSpT.jpeg";
const imageEnhancementAfter2 =
  "/image-enhancement/image-enhancement-7-after_gkCrmO5uX.jpeg";
const imageEnhancementBefore3 =
  "/image-enhancement/image-enhancement-8-before_nAxW0Ys-I.jpeg";
const imageEnhancementAfter3 =
  "/image-enhancement/image-enhancement-8-after_tFjeztsZP.jpeg";
const imageEnhancementBefore4 =
  "/image-enhancement/image-enhancement-9-before_-cV8uPVUI.jpeg";
const imageEnhancementAfter4 =
  "/image-enhancement/image-enhancement-9-after_wrrbc1IF8.jpeg";
const imageEnhancementBefore5 =
  "/image-enhancement/image-enhancement-before-11_7GEI0rXAa.jpeg";
const imageEnhancementAfter5 =
  "/image-enhancement/image-enhancement-after-11_miAuKz_p8.jpeg";

const ServicesImageEnhancement = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ServicesBanner service={t("imageEnhancement")} />
      <Container sx={{ marginBottom: "130px", marginTop: "50px" }}>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 7 }}
        >
          <Typography component="p" variant="h4">
            {t("imageEnhancementMarketingSectionHeader")}
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
                {t("sellFaster")}
              </Typography>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Typography component="p" variant="h5" sx={{ fontWeight: "100" }}>
                {t("increaseMarketPrice")}
              </Typography>
            </Grid>

            <Grid item lg={6} md={12} xs={12}>
              <Typography component="p" variant="h5" sx={{ fontWeight: "100" }}>
                {t("increaseBuyers")}
              </Typography>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Typography component="p" variant="h5" sx={{ fontWeight: "100" }}>
                {t("homeBuyersDesire")}
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
              title={t("whiteBalancing")}
              description={t("whiteBalancingDesc")}
              beforeImage={imageEnhancementBefore1}
              altBeforeImage="image-enhancement-before-1"
              afterImage={imageEnhancementAfter1}
              altAfterImage="image-enhancement-after-1"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              title={t("imageSharpening")}
              description={t("imageSharpeningDesc")}
              beforeImage={imageEnhancementBefore2}
              altBeforeImage="image-enhancement-before-2"
              afterImage={imageEnhancementAfter2}
              altAfterImage="image-enhancement-after-2"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              title={t("lensDistortionRemoval")}
              description={t("lensDistortionRemovalDesc")}
              beforeImage={imageEnhancementBefore3}
              altBeforeImage="image-enhancement-before-3"
              afterImage={imageEnhancementAfter3}
              altAfterImage="image-enhancement-after-3"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              title={t("brightnessContrastAdjustment")}
              description={t("brightnessContrastAdjustmentDesc")}
              beforeImage={imageEnhancementBefore4}
              altBeforeImage="image-enhancement-before-4"
              afterImage={imageEnhancementAfter4}
              altAfterImage="image-enhancement-after-4"
            />
          </Box>
        </Suspense>

        <Suspense fallback={<div />}>
          <Box sx={{ marginBottom: "70px" }}>
            <BeforeAfterCardComponent
              title={t("removeMinorBlemishes")}
              description={t("removeMinorBlemishesDesc")}
              beforeImage={imageEnhancementBefore5}
              altBeforeImage="image-enhancement-before-5"
              afterImage={imageEnhancementAfter5}
              altAfterImage="image-enhancement-after-5"
            />
          </Box>
        </Suspense>
      </Container>
      <ServicesAboutBanner />
      <WhatWeOfferSection />
      <FooterComponent />
    </React.Fragment>
  );
};

export default ServicesImageEnhancement;
