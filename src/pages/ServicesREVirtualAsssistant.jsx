import React from "react";
import { Container, Typography, Card, CardMedia } from "@mui/material";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import virtualAssistant from "../assets/virtual-assistant.jpg";
import ServicesAboutBanner from "../components/ServicesAboutBanner";

const ServicesREVirtualAsssistant = () => {
  return (
    <React.Fragment>
      <ServicesBanner service="Real Estate Virtual Assistant Service" />
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "100",
            lineHeight: "75px",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Time is the most valuable currency. We'd all like to see more of it.
          Work more efficiently and effectively with the help of a Virtual
          Assistant.
        </Typography>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia component="img" height="600" image={virtualAssistant} />
        </Card>
      </Container>
      <ServicesAboutBanner />
      <FooterComponent />
    </React.Fragment>
  );
};

export default ServicesREVirtualAsssistant;
