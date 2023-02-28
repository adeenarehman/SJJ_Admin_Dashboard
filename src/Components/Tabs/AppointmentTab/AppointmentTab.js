import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Tabs, Tab, Typography, Box, Breadcrumbs, Link } from '@mui/material'
import OnlineAppointmentTable from '../../Tables/AppointmentTable/OnlineAppointmentTable';
import PhysicalAppointmentTable from '../../Tables/AppointmentTable/PhysicalAppointmentTable';


function TabPanel(props) {
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AppointmentTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={10} style={{ padding: '1%' }}>
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" variant='caption' color="inherit" href="http://localhost:3000/dashboard">
                Dashboard
              </Link>        
              <Typography variant='caption' color="text.primary">Appointments</Typography>
            </Breadcrumbs>
          </div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Online Appointments" {...a11yProps(0)} />
                <Tab label="Physical Appointments" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <OnlineAppointmentTable/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <PhysicalAppointmentTable/>
            </TabPanel>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}