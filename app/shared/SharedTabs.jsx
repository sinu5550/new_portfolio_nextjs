import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SharedTabs({ lable1, lable2, content1, content2 }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "gray", borderColor: "divider" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={<span className="text-white">{lable1}</span>}
            {...a11yProps(0)}
          />
          <Tab
            label={<span className="text-white">{lable2}</span>}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel className={"text-gray-300"} value={value} index={0}>
        {content1}
      </CustomTabPanel>
      <CustomTabPanel className={"text-gray-300"} value={value} index={1}>
        {content2}
      </CustomTabPanel>
    </Box>
  );
}
