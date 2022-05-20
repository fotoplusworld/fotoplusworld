import React from "react";
import { IKImage } from "imagekitio-react";
import { Box, Card, CardHeader, Grid, Typography } from "@mui/material";

const BeforeAfterCardComponent = (props) => {
  return (
    <Box>
      <Typography component="p" variant="h4" gutterBottom>
        {props.title}
      </Typography>

      <Typography
        component="p"
        variant="h6"
        sx={{ fontWeight: "100", marginBottom: "20px" }}
      >
        {props.description}
      </Typography>

      <Grid container spacing={5}>
        <Grid item lg={6}>
          <Card>
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
        <Grid item lg={6}>
          <Card>
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
    </Box>
  );
};

export default BeforeAfterCardComponent;
