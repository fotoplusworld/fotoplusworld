import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link as MUILink,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Internationalization
import { useTranslation } from "react-i18next";

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue = 0;
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText> {t("home")} </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 1}
          >
            <ListItemText> {t("about")} </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 2}
          >
            <ListItemText> {t("contact")} </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={MUILink}
            href="https://fotoplusworld.app/"
            selected={value === 3}
          >
            <ListItemText> {t("signIn")} </ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText> {t("services")} </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/services/image-enhancement"
            selected={value === 4}
          >
            <ListItemText> {t("imageEnhancement")} </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/services/sketch-to-2d-floor-plan"
            selected={value === 5}
          >
            <ListItemText> {t("sketchTo2DFloorPlan")} </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(6);
            }}
            divider
            button
            component={Link}
            to="/services/2D-floor-plan-to-3D-floor-plan"
            selected={value === 6}
          >
            <ListItemText> {t("twoDToThreeDFloorPlan")} </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(7);
            }}
            divider
            button
            component={Link}
            to="/services/virtual-staging"
            selected={value === 7}
          >
            <ListItemText> {t("virtualStaging")} </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(8);
            }}
            divider
            button
            component={Link}
            to="/services/item-removal"
            selected={value === 8}
          >
            <ListItemText> {t("itemRemoval")} </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/services/day-to-dusk"
            selected={value === 5}
          >
            <ListItemText> {t("dayToDusk")} </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        name="menu-button"
        aria-label="menu-button"
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComponent;
