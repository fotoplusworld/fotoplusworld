import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Link as MUILink,
} from "@mui/material";
import FooterComponent from "../components/FooterComponent";
import HeroSection from "../components/HeroSection";

// Icons
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import GradeIcon from "@mui/icons-material/Grade";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

// Internationalization
import { useTranslation } from "react-i18next";

const ServicesSummaryComponent = lazy(() =>
  import("../components/ServicesSummaryComponent")
);

const Home = () => {
  const { t } = useTranslation();
  const imageEnhancementBefore =
    "/image-enhancement/image-enhancement-6-before_xcddrR55K.jpeg";
  const imageEnhancementAfter =
    "/image-enhancement/image-enhancement-6-after_hTaEEUV3i.jpeg";

  const virtualStagingBefore =
    "/virtual-staging/virtual-staging-3-before_L4dBT4v98I.jpg";
  const virtualStagingAfter =
    "/virtual-staging/virtual-staging-3-after_uW6auiv8v.jpg";

  const itemRemovalBefore = "/item-removal/item-removal-4-before_SldMby-sp.jpg";
  const itemRemovalAfter = "/item-removal/item-removal-4-after_ftEcklNfz.jpg";

  const twoDThreeDBefore = "/2D-to-3D/twod-threed-1-before_yb1JFyADM.jpg";
  const twoDThreeDAfter = "/2D-to-3D/twod-threed-1-after_hVHd-_4gm.jpg";

  const dayToDuskBefore =
    "/day-to-dusk/day-to-dusk-1-before-min-min_F-90Bs8nO.jpg";
  const dayToDuskAfter =
    "/day-to-dusk/day-to-dusk-1-after-min-min_5d_A_6feO.jpg";

  const sketchTo2DBefore =
    "/sketch-to-2d/sketch-first-floor-chateaux-cir-scarsdale_UIhwMET9G.jpg";
  const sketchTo2DAfter =
    "/sketch-to-2d/2D-first-floor-chateaux-cir-scarsdale_0rUlvXtj0.jpg";

  const headerImage =
    "https://ik.imagekit.io/jylqkautf/header8_zDEf1a2iC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652963391348";

  return (
    <React.Fragment>
      <div>
        <HeroSection
          height="100vh"
          headerText={t("headerText")}
          component="h2"
          variant="h2"
          tagline={t("tagline")}
          componentTagline="h4"
          variantTagline="h4"
          image={headerImage}
          buttonText={t("tryItForFree")}
          buttonComponent={MUILink}
          buttonHref="https://fotoplusworld.app/"
        />
      </div>
      <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <Typography variant="h3" gutterBottom>
          {t("services")}
        </Typography>

        <Typography
          variant="h4"
          component="div"
          sx={{
            marginBottom: "50px",
            fontWeight: "100",
          }}
        >
          {t("servicesText")}
        </Typography>
      </Container>

      {/* IMAGE ENHANCEMENT */}

      <ServicesSummaryComponent
        serviceName={t("imageEnhancement")}
        description="$3.00"
        perImageOrFloor={t("perImage")}
        beforeImage={imageEnhancementBefore}
        altBeforeImage="image-enhancement-before"
        afterImage={imageEnhancementAfter}
        altAfterImage="image-enhancement-after"
        component={Link}
        url="/services/image-enhancement"
      />

      {/* SKETCH PLANS TO 2D FLOOR PLAN */}

      <ServicesSummaryComponent
        serviceName={t("twoDFloorPlan")}
        description="$10.00"
        perImageOrFloor={t("perFloor")}
        beforeImage={sketchTo2DBefore}
        altBeforeImage="sketch-to-2d-before"
        afterImage={sketchTo2DAfter}
        altAfterImage="sketch-to-2d-after"
        component={Link}
        url="/services/sketch-to-2d-floor-plan"
      />

      {/* VIRTUAL STAGING */}
      <ServicesSummaryComponent
        serviceName={t("virtualStaging")}
        description="$35.00"
        perImageOrFloor={t("perImage")}
        beforeImage={virtualStagingBefore}
        altBeforeImage="virtual-staging-before"
        afterImage={virtualStagingAfter}
        altAfterImage="virtual-staging-after"
        component={Link}
        url="/services/virtual-staging"
      />

      {/* 2D FLOOR PLAN TO 3D FLOOR PLAN */}
      <ServicesSummaryComponent
        serviceName={t("threeDFloorPlan")}
        description="$15.00"
        perImageOrFloor={t("perFloor")}
        beforeImage={twoDThreeDBefore}
        altBeforeImage="2D-to-3D-before"
        afterImage={twoDThreeDAfter}
        altAfterImage="2D-to-3D-after"
        component={Link}
        url="/services/2D-floor-plan-to-3D-floor-plan"
      />

      {/* ITEM REMOVAL */}
      <ServicesSummaryComponent
        serviceName={t("itemRemoval")}
        description="$7.00"
        perImageOrFloor={t("perImage")}
        beforeImage={itemRemovalBefore}
        altBeforeImage="item-removal-before"
        afterImage={itemRemovalAfter}
        altAfterImage="item-removal-after"
        component={Link}
        url="/services/item-removal"
      />

      {/* DAY TO DUSK */}
      <ServicesSummaryComponent
        serviceName={t("dayToDusk")}
        description="$3.00"
        perImageOrFloor={t("perImage")}
        beforeImage={dayToDuskBefore}
        altBeforeImage="day-to-dusk-before"
        afterImage={dayToDuskAfter}
        altAfterImage="day-to-dusk-after"
        component={Link}
        url="/services/day-to-dusk"
      />

      <Suspense fallback={<div />}>
        <Box
          sx={{
            backgroundColor: "grey.900",
            marginTop: 30,
            marginBottom: "100px",
            height: "40%",
            textAlign: "center",
            padding: "60px 0 60px 0",
          }}
        >
          <Typography
            variant="h4"
            color="common.white"
            sx={{ marginBottom: 15 }}
          >
            {t("benefits")}
          </Typography>
          <Container sx={{ marginBottom: 10 }}>
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
            <Typography
              variant="h4"
              component="h4"
              color="common.white"
              sx={{ textAlign: "center", marginTop: 15, fontWeight: "100" }}
            >
              {t("tagline")}
            </Typography>
          </Container>
        </Box>
      </Suspense>

      <Suspense fallback={<div />}>
        <Container
          sx={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
        >
          <Typography variant="h4" sx={{ marginBottom: 15 }}>
            {t("ourClients")}
          </Typography>
          <Grid container spacing={5}>
            <Grid item lg={3} xs={12}>
              <Typography variant="h4" sx={{ fontWeight: "100" }}>
                {t("photographers")}
              </Typography>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Typography variant="h4" sx={{ fontWeight: "100" }}>
                {t("socialMediaAgencies")}
              </Typography>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Typography variant="h4" sx={{ fontWeight: "100" }}>
                {t("eventsOrganizers")}
              </Typography>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Typography variant="h4" sx={{ fontWeight: "100" }}>
                {t("retailCompanies")}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Suspense>

      <Suspense fallback={<div />}>
        <FooterComponent marginTop="200px" />
      </Suspense>
    </React.Fragment>
  );
};

export default Home;
