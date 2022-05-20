import React, { useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import FooterComponent from "../components/FooterComponent";
import BoxContactComponent from "../components/BoxContactComponent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

// Internationalization
import { useTranslation } from "react-i18next";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .email("Enter a valid email address"),
  userMessage: yup.string().required("This field is required"),
});

const Contact = () => {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_rcridx8", //EMAILJS SERVICE ID
        "template_6g3af3p", //EMAILJS TEMPLATE ID
        form.current,
        "AtdTo4dxGo3SVa05l" //EMAILJS PUBLIC KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(`${t("contactSuccessAlert")}`);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert(`${t("contactFailedAlert")}`);
          window.location.reload();
        }
      );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Suspense fallback={<div />}>
      <React.Fragment>
        <Box
          sx={{
            backgroundColor: "grey.900",
            height: "70%",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Container>
            <Typography
              variant="h2"
              color="grey.50"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "100",
              }}
            >
              {t("contactHeader")}
            </Typography>
            <Grid container spacing={10} sx={{ marginTop: "10px" }}>
              <Grid item lg={6}>
                <Box
                  component="form"
                  ref={form}
                  onSubmit={handleSubmit(sendEmail)}
                >
                  <TextField
                    label={t("formName")}
                    name="name"
                    fullWidth
                    sx={{ marginBottom: "30px" }}
                    {...register("name")}
                    error={!!errors?.name}
                    helperText={errors.name?.message}
                  />

                  <TextField
                    label={t("formEmailAddress")}
                    name="email"
                    fullWidth
                    sx={{ marginBottom: "30px" }}
                    {...register("email")}
                    error={!!errors?.email}
                    helperText={errors.email?.message}
                  />
                  <TextField
                    label={t("formMessage")}
                    name="userMessage"
                    fullWidth
                    sx={{ marginBottom: "30px" }}
                    multiline
                    rows={5}
                    maxRows={5}
                    {...register("userMessage")}
                    error={!!errors?.userMessage}
                    helperText={errors.userMessage?.message}
                  />
                  <Button
                    variant="contained"
                    color="common"
                    sx={{
                      backgroundColor: "grey.50",
                      padding: "50px, 25px",
                    }}
                    type="submit"
                  >
                    {t("submit")}
                  </Button>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Typography
                  variant="h4"
                  component="h4"
                  color="text.primary"
                  gutterBottom
                >
                  FOTO+
                </Typography>
                <BoxContactComponent
                  icon={<LocationOnIcon sx={{ fontSize: 30, color: "#fff" }} />}
                  value={
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "20px", marginLeft: 3 }}
                      color="common.white"
                    >
                      Unit 4b-24, 4th Floor City Avenue Building Port Saeed
                      Deira, Dubai UAE
                    </Typography>
                  }
                />
                <BoxContactComponent
                  icon={
                    <PhoneIphoneIcon sx={{ fontSize: 30, color: "#fff" }} />
                  }
                  value={
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "20px", marginLeft: 3 }}
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
                      sx={{ fontSize: "20px", marginLeft: 3 }}
                      color="common.white"
                    >
                      fotoplus971@gmail.com
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ marginTop: "75px" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginBottom: "50px", fontWeight: "700" }}
          >
            {t("about")}
          </Typography>
          <Box sx={{ width: "100%", marginBottom: "30px" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{ lineHeight: "75px", textAlign: "left", fontWeight: "100" }}
            >
              {t("aboutText")}
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/about"
            sx={{
              textTransform: "none",
              "&:hover": { backgroundColor: "transparent" },
            }}
            disableRipple
            disableFocusRipple
          >
            <Typography color="grey.700" variant="h5">
              {t("learnMore")}
            </Typography>
          </Button>
        </Container>
        <FooterComponent marginTop="200px" />
      </React.Fragment>
    </Suspense>
  );
};

export default Contact;
