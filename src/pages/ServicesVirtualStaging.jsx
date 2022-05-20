import React, { Suspense } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import WhatWeOfferSection from "../components/WhatWeOfferSection";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import BeforeAfterCardComponent from "../components/BeforeAfterCardComponent";

const ServicesAboutBanner = React.lazy(() =>
  import("../components/ServicesAboutBanner")
);

const virtualStaging1Before =
  "/virtual-staging/virtual-staging-1-before_NUwTd75giz.jpg";
const virtualStaging1After =
  "/virtual-staging/virtual-staging-1-after_iG-zNhmIve.jpg";
const virtualStaging2Before =
  "/virtual-staging/virtual-staging-2-before_CPbLwwMuz.jpg";
const virtualStaging2After =
  "/virtual-staging/virtual-staging-2-after_5jWMT2DeV.jpg";
const virtualStaging3Before =
  "/virtual-staging/virtual-staging-3-before_L4dBT4v98I.jpg";
const virtualStaging3After =
  "/virtual-staging/virtual-staging-3-after_uW6auiv8v.jpg";
const virtualStaging4Before =
  "/virtual-staging/virtual-staging-4-before_lhuEs4Dl8.jpg";
const virtualStaging4After =
  "/virtual-staging/virtual-staging-4-after_RfoExuGsS.jpg";
const virtualStaging5Before =
  "/virtual-staging/virtual-staging-5-before_Hi21zysWw.jpg";
const virtualStaging5After =
  "/virtual-staging/virtual-staging-5-after_AUTf7u7Uf.jpg";

const ServicesVirtualStaging = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div />}>
      <React.Fragment>
        <ServicesBanner service={t("virtualStaging")} />
        <Container sx={{ marginBottom: "130px", marginTop: "50px" }}>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 7 }}
          >
            <Typography component="p" variant="h4">
              {t("virtualStagingMarketingHeader")}
            </Typography>
          </Box>
          <Box>
            <Grid
              container
              spacing={5}
              sx={{ display: "flex", textAlign: "center" }}
            >
              <Grid item lg={6} md={12} xs={12}>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ fontWeight: "100" }}
                >
                  {t("attractBuyers")}
                </Typography>
              </Grid>
              <Grid item lg={6} md={12} xs={12}>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ fontWeight: "100" }}
                >
                  {t("sellFaster")}
                </Typography>
              </Grid>

              <Grid item lg={6} md={12} xs={12}>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ fontWeight: "100" }}
                >
                  {t("increaseSalePrice")}
                </Typography>
              </Grid>
              <Grid item lg={6} md={12} xs={12}>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{ fontWeight: "100" }}
                >
                  {t("addAesthetics")}
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
                beforeImage={virtualStaging1Before}
                altBeforeImage="virtual-staging-before-1"
                afterImage={virtualStaging1After}
                altAfterImage="virtual-staging-after-1"
              />
            </Box>
          </Suspense>

          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={virtualStaging2Before}
                altBeforeImage="virtual-staging-before-2"
                afterImage={virtualStaging2After}
                altAfterImage="virtual-staging-after-2"
              />
            </Box>
          </Suspense>

          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={virtualStaging3Before}
                altBeforeImage="virtual-staging-before-3"
                afterImage={virtualStaging3After}
                altAfterImage="virtual-staging-after-3"
              />
            </Box>
          </Suspense>

          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={virtualStaging4Before}
                altBeforeImage="virtual-staging-before-4"
                afterImage={virtualStaging4After}
                altAfterImage="virtual-staging-after-4"
              />
            </Box>
          </Suspense>

          <Suspense fallback={<div />}>
            <Box sx={{ marginBottom: "70px" }}>
              <BeforeAfterCardComponent
                beforeImage={virtualStaging5Before}
                altBeforeImage="virtual-staging-before-5"
                afterImage={virtualStaging5After}
                altAfterImage="virtual-staging-after-5"
              />
            </Box>
          </Suspense>
        </Container>

        <ServicesAboutBanner />
        <WhatWeOfferSection />
        <FooterComponent />
      </React.Fragment>
    </Suspense>
  );
};

export default ServicesVirtualStaging;
