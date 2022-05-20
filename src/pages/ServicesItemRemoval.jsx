import React, { Suspense } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import WhatWeOfferSection from "../components/WhatWeOfferSection";
import BeforeAfterCardComponent from "../components/BeforeAfterCardComponent";

const ServicesAboutBanner = React.lazy(() =>
  import("../components/ServicesAboutBanner")
);

// Images
const itemRemovalBefore1 = "/item-removal/item-removal-1-before_62AiUUzAO.jpg";
const itemRemovalAfter1 = "/item-removal/item-removal-1-after_3RVCLeQBh.jpg";
const itemRemovalBefore2 = "/item-removal/item-removal-2-before_GNOC83fmy.jpg";
const itemRemovalAfter2 = "/item-removal/item-removal-2-after_GgsoefQF2.jpg";
const itemRemovalBefore3 = "/item-removal/item-removal-3-before_E1lL8y8ucF.jpg";
const itemRemovalAfter3 = "/item-removal/item-removal-3-after_t_76WmVrf.jpg";
const itemRemovalBefore4 = "/item-removal/item-removal-4-before_SldMby-sp.jpg";
const itemRemovalAfter4 = "/item-removal/item-removal-4-after_ftEcklNfz.jpg";

const ServicesItemRemoval = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div />}>
      <React.Fragment>
        <ServicesBanner service={t("itemRemoval")} />
        <Container sx={{ marginBottom: "130px", marginTop: "50px" }}>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 7 }}
          >
            <Typography component="p" variant="h4">
              {t("itemRemovalMarketingHeader")}
            </Typography>
          </Box>
          <Box>
            <Grid
              container
              spacing={5}
              sx={{ display: "flex", textAlign: "center" }}
            >
              <Grid item lg={6} md={12}>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ fontWeight: "100" }}
                >
                  {t("attractBuyers")}
                </Typography>
              </Grid>
              <Grid item lg={6} md={12}>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ fontWeight: "100" }}
                >
                  {t("makePhotosPerfect")}
                </Typography>
              </Grid>

              <Grid item lg={6} md={12}>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ fontWeight: "100" }}
                >
                  {t("prepareForVirtualStaging")}
                </Typography>
              </Grid>
              <Grid item lg={6} md={12}>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ fontWeight: "100" }}
                >
                  {t("declutterPhotos")}
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
                beforeImage={itemRemovalBefore1}
                altBeforeImage="item-removal-before-1"
                afterImage={itemRemovalAfter1}
                altAfterImage="item-removal-after-1"
              />
            </Box>
          </Suspense>

          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={itemRemovalBefore2}
                altBeforeImage="item-removal-before-2"
                afterImage={itemRemovalAfter2}
                altAfterImage="item-removal-after-2"
              />
            </Box>
          </Suspense>

          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={itemRemovalBefore3}
                altBeforeImage="item-removal-before-3"
                afterImage={itemRemovalAfter3}
                altAfterImage="item-removal-after-3"
              />
            </Box>
          </Suspense>

          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={itemRemovalBefore4}
                altBeforeImage="item-removal-before-4"
                afterImage={itemRemovalAfter4}
                altAfterImage="item-removal-after-4"
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
    </Suspense>
  );
};

export default ServicesItemRemoval;
