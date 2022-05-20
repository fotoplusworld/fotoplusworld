import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IKImage } from "imagekitio-react";
import { useTranslation } from "react-i18next";

const OfferComponent = (props) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Button
        color="inherit"
        sx={{ textAlign: "left" }}
        component={Link}
        to={props.url}
      >
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <IKImage
              urlEndpoint="https://ik.imagekit.io/jylqkautf"
              path={props.path}
              width="100%"
              height="100%"
              alt={props.alt}
            />
          </Grid>
          <Grid item lg={6}>
            <Typography
              component="p"
              variant="h5"
              sx={{ fontWeight: "700", textTransform: "uppercase" }}
            >
              {props.title}
            </Typography>
            <Typography component="p" variant="h6">
              {props.price} {t("perImage")}
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </Box>
  );
};

export default OfferComponent;
