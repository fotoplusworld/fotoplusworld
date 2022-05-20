import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import FooterLinksComponent from "./FooterLinksComponent";
import BoxContactComponent from "../components/BoxContactComponent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

// Internationalization
import { useTranslation } from "react-i18next";

const FooterComponent = (props) => {
  const { t } = useTranslation();

  const fotoplusLogo =
    "https://ik.imagekit.io/jylqkautf/foto-plus-logo-white_-eCAaqLue.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652512123987";

  return (
    <Box
      sx={{
        backgroundColor: "grey.800",
        marginTop: `${props.marginTop}`,
        height: "50%",
        padding: "70px 0px 80px 0px",
      }}
    >
      <Container>
        <Grid container spacing={20} justifyContent="center">
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h4"
              color="white"
              sx={{ marginBottom: "10px" }}
            >
              {t("links")}
            </Typography>
            <FooterLinksComponent
              name="home-route"
              component={Link}
              route="/"
              page={t("home")}
            />
            <FooterLinksComponent
              name="about-route"
              component={Link}
              route="/about"
              page={t("about")}
            />
            <FooterLinksComponent
              component={Link}
              route="/contact"
              page={t("contact")}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h4"
              color="white"
              sx={{ marginBottom: "10px" }}
            >
              {t("services")}
            </Typography>

            <FooterLinksComponent
              component={Link}
              name="sketch-to-2d"
              route="/services/sketch-to-2d-floor-plan"
              page={t("sketchTo2DFloorPlan")}
            />
            <FooterLinksComponent
              component={Link}
              name="2D-to-3D"
              route="/services/2D-floor-plan-to-3D-floor-plan"
              page={t("twoDToThreeDFloorPlan")}
            />
            <FooterLinksComponent
              component={Link}
              name="image-enhancement"
              route="/services/image-enhancement"
              page={t("imageEnhancement")}
            />
            <FooterLinksComponent
              component={Link}
              name="virtual-staging"
              route="/services/virtual-staging"
              page={t("virtualStaging")}
            />
            <FooterLinksComponent
              component={Link}
              name="item-removal"
              route="/services/item-removal"
              page={t("itemRemoval")}
            />
            <FooterLinksComponent
              component={Link}
              name="day-to-dusk"
              route="/services/day-to-dusk"
              page={t("dayToDusk")}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Paper
              component="img"
              elevation={0}
              src={fotoplusLogo}
              sx={{
                backgroundColor: "transparent",
                height: "50px",
                marginBottom: "10px",
              }}
              alt="fotoplus-logo"
            />
            <BoxContactComponent
              icon={<LocationOnIcon sx={{ fontSize: 30, color: "#fff" }} />}
              value={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "20px", marginLeft: 3, fontWeight: "100" }}
                  color="common.white"
                >
                  Unit 4b-24, 4th Floor City Avenue Building Port Saeed Deira,
                  Dubai UAE
                </Typography>
              }
            />
            <BoxContactComponent
              icon={<PhoneIphoneIcon sx={{ fontSize: 30, color: "#fff" }} />}
              value={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "20px", marginLeft: 3, fontWeight: "100" }}
                  color="common.white"
                >
                  +971 4 557 1107
                </Typography>
              }
            />
            <BoxContactComponent
              icon={<EmailIcon sx={{ fontSize: 30, color: "#fff" }} />}
              value={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "20px", marginLeft: 3, fontWeight: "100" }}
                  color="common.white"
                >
                  fotoplus971@gmail.com
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "150px" }}
        >
          <Typography variant="body1" color="white" sx={{ fontWeight: 700 }}>
            FOTO+ 2022
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterComponent;
