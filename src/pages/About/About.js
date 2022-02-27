import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./About.scss";
import Project from "../../components/AboutSections/Project";
import Technologies from "../../components/AboutSections/Technologies";
import Apis from "../../components/AboutSections/Apis";
import Deployment from "../../components/AboutSections/Deployment";

const theme = createTheme({
  palette: {
    primary: {
      main: "#834040",
    },
  },
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const About = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="about">
        <div className="about__content">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              variant="scrollable"
              textColor="primary"
              indicatorColor="primary"
              scrollButtons
              allowScrollButtonsMobile
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
              }}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="projects" {...a11yProps(0)} />
              <Tab label="tech stack" {...a11yProps(1)} />
              <Tab label="api's" {...a11yProps(2)} />
              <Tab label="deployment" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Project />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Technologies />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Apis />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Deployment />
          </TabPanel>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default About;
