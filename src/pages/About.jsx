import React, { Suspense } from "react";
import { Container, Box, Typography } from "@mui/material";
import FooterComponent from "../components/FooterComponent";

// Internationalization
import { useTranslation } from "react-i18next";

const HeroSection = React.lazy(() => import("../components/HeroSection"));
const ServicesAboutBanner = React.lazy(() =>
  import("../components/ServicesAboutBanner")
);

const About = () => {
  const { t } = useTranslation();

  const testimonialBanner =
    "https://ik.imagekit.io/jylqkautf/meeting_1AHMtWpRT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652515808127";

  return (
    <React.Fragment>
      <Suspense fallback={<div />}>
        <Container sx={{ marginTop: 15, marginBottom: 20 }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginBottom: "50px", fontWeight: "700" }}
          >
            {t("about")}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{ lineHeight: "75px", textAlign: "left", fontWeight: "100" }}
            >
              {t("aboutText")}
            </Typography>
          </Box>
        </Container>
        <Suspense fallback={<div />}>
          <HeroSection
            height="70vh"
            image={testimonialBanner}
            component="h2"
            variant="h3"
            headerText={t("testimonialStatement")}
            display="none"
          />
        </Suspense>
        <Container sx={{ marginTop: 15, marginBottom: 20 }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginBottom: "50px", fontWeight: "700" }}
          >
            {t("mission")}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{ lineHeight: "75px", textAlign: "left", fontWeight: "100" }}
            >
              {t("missionStatement")}
            </Typography>
          </Box>
        </Container>
        <ServicesAboutBanner />
        <FooterComponent />
      </Suspense>
    </React.Fragment>
  );
};

export default About;
