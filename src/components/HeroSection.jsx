import React from "react";
import {
  Box,
  Button,
  Paper,
  Grid,
  Container,
  Typography,
  CardMedia,
} from "@mui/material";

import { useTranslation } from "react-i18next";

const HeroSection = (props) => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        height: `${props.height}`,
        background: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 0,
      }}
    >
      <Container maxWidth="md" sx={{ height: "100%" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          <Grid item>
            <Typography
              component={props.component}
              variant={props.variant}
              sx={{ fontWeight: "100", textAlign: "center" }}
            >
              {props.headerText}
            </Typography>
            <Typography
              component={props.componentTagline}
              variant={props.variantTagline}
              sx={{ fontWeight: "300", marginBottom: 3, textAlign: "center" }}
            >
              {props.tagline}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="common"
                name="hero-button"
                sx={{
                  display: `${props.display}`,
                  backgroundColor: "grey.50",
                  padding: "15px",
                }}
                component={props.buttonComponent}
                href={props.buttonHref}
                disableFocusRipple
                disableRipple
              >
                <Typography color="grey.900" sx={{ fontWeight: "bold" }}>
                  {props.buttonText}
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* <CardMedia component="img" image={headerImage} height="100%" /> */}
    </Paper>
  );
};

export default HeroSection;
