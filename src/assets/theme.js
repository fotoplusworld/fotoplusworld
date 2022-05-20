import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

darkTheme.typography.h4 = {
  "@media (min-width:300px)": {
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
  },
  [darkTheme.breakpoints.up("md")]: {
    fontSize: "34px",
    lineHeight: "55px",
  },
};

darkTheme.typography.h3 = {
  "@media (min-width:300px)": {
    fontSize: "2rem",
    lineHeight: "3rem",
  },
  [darkTheme.breakpoints.up("md")]: {
    fontSize: "48px",
    lineHeight: "75px",
  },
};

// console.log(darkTheme);

export default darkTheme;
