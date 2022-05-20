import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Link as MUILink,
  Paper,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComponent from "./DrawerComponent.jsx";

// Internationalization
import { useTranslation } from "react-i18next";

const NavigationBar = (props) => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const openMenu = Boolean(anchorEl);

  const dropDownClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t } = useTranslation();

  const fotoplusLogo =
    "https://ik.imagekit.io/jylqkautf/foto-plus-logo-white_-eCAaqLue.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652512123987";

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMatch ? (
            <>
              <Paper
                component="img"
                elevation={0}
                src={fotoplusLogo}
                alt="fotoplus-logo"
                sx={{
                  backgroundColor: "transparent",
                  height: "50px",
                  margin: "10px 10px 10px 20px",
                }}
              />
              <DrawerComponent />
            </>
          ) : (
            <>
              <Paper
                component="img"
                elevation={0}
                src={fotoplusLogo}
                sx={{
                  backgroundColor: "transparent",
                  height: "50px",
                  margin: "10px 10px 10px 20px",
                }}
              />

              <Tabs
                textColor="inherit"
                sx={{ marginLeft: "auto" }}
                value={value}
                onChange={(event, value) => setValue(value)}
                indicatorColor="inherit"
              >
                <Tab
                  label={t("home")}
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to="/"
                  aria-label="home"
                />

                <Tab
                  label={t("about")}
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to="/about"
                  aria-label="about"
                />

                <Tab
                  label={t("contact")}
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to="/contact"
                  aria-label="contact"
                />
              </Tabs>
              <Typography
                color="grey.400"
                sx={{
                  marginLeft: "28px",
                  marginRight: 10,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={dropDownClick}
              >
                {t("services")}
              </Typography>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
              >
                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/image-enhancement"
                >
                  {t("imageEnhancement")}
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/sketch-to-2d-floor-plan"
                >
                  {t("sketchTo2DFloorPlan")}
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/virtual-staging"
                >
                  {t("virtualStaging")}
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/2D-floor-plan-to-3D-floor-plan"
                >
                  {t("twoDToThreeDFloorPlan")}
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/item-removal"
                >
                  {t("itemRemoval")}
                </MenuItem>

                <MenuItem
                  onClose={handleClose}
                  component={Link}
                  to="/services/day-to-dusk"
                >
                  {t("dayToDusk")}
                </MenuItem>
              </Menu>

              <Button
                variant="contained"
                color="common"
                sx={{ textTransform: "none", backgroundColor: "grey.50" }}
                component={MUILink}
                href="https://fotoplusworld.app/"
              >
                <Typography color="grey.900"> {t("signIn")} </Typography>
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
