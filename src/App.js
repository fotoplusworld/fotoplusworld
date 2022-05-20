import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import darkTheme from "./assets/theme.js";
import ScrollToTop from "./components/ScrollToTop";
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Services2DTo3D = React.lazy(() => import("./pages/Services2DTo3D"));
const ServicesImageEnhancement = React.lazy(() =>
  import("./pages/ServicesImageEnhancement")
);
const ServicesVirtualStaging = React.lazy(() =>
  import("./pages/ServicesVirtualStaging")
);
const ServicesItemRemoval = React.lazy(() =>
  import("./pages/ServicesItemRemoval")
);
const ServicesSketchTo2D = React.lazy(() =>
  import("./pages/ServicesSketchTo2D")
);
const ServicesDayToDusk = React.lazy(() => import("./pages/ServicesDayToDusk"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationBar />
      <ScrollToTop>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/services/2D-floor-plan-to-3D-floor-plan"
              element={<Services2DTo3D />}
            />
            <Route
              path="/services/image-enhancement"
              element={<ServicesImageEnhancement />}
            />
            <Route
              path="/services/virtual-staging"
              element={<ServicesVirtualStaging />}
            />
            <Route
              path="/services/item-removal"
              element={<ServicesItemRemoval />}
            />
            <Route
              path="/services/sketch-to-2d-floor-plan"
              element={<ServicesSketchTo2D />}
            />
            <Route
              path="/services/day-to-dusk"
              element={<ServicesDayToDusk />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </ThemeProvider>
  );
}

export default App;
