import React, { Suspense } from "react";
import {
  Card,
  CardHeader,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { IKImage } from "imagekitio-react";

// Internationalization
import { useTranslation } from "react-i18next";

const ServicesSummaryComponent = (props) => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Container sx={{ marginBottom: 10 }}>
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ marginRight: "20px" }}>
            {props.serviceName}
          </Typography>
          <Typography variant="h6" color="grey.700">
            Price: {props.description} {props.perImageOrFloor}
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <Card elevation={12}>
              <CardHeader title="Before" />
              <IKImage
                urlEndpoint="https://ik.imagekit.io/jylqkautf"
                path={props.beforeImage}
                alt={props.altBeforeImage}
                width="100%"
                height="100%"
              />
            </Card>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Card elevation={12}>
              <CardHeader title="After" />
              <IKImage
                urlEndpoint="https://ik.imagekit.io/jylqkautf"
                path={props.afterImage}
                alt={props.altAfterImage}
                width="100%"
                height="100%"
              />
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="common"
            sx={{
              marginTop: 5,
              backgroundColor: "grey.900",
              padding: "50px, 25px",
            }}
            component={props.component}
            to={props.url}
          >
            <Typography color="text.primary" sx={{ fontWeight: "bold" }}>
              {t("seeMore")}
            </Typography>
          </Button>
        </Box>
      </Container>
    </Suspense>
  );
};

export default ServicesSummaryComponent;
