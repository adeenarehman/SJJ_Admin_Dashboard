import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Tabs, Tab, Typography, Box, Breadcrumbs, Link } from '@mui/material'
import AddDoctorModal from '../../Modals/AddDoctorModal/AddDoctorModal'
import AddDoctorScheduleModal from '../../Modals/AddDoctorScheduleModal/AddDoctorScheduleModal'
// import AddDataHospitalModal from '../../Modals/AddDataHospitalModal/AddDataHospitalModal'
import AddDataHospitalModal from '../../Modals/AddDataHospitalModel/AddDataHospitalModal';
import AddDataStoreModal from '../../Modals/AddDataStoreModal/AddDataStoreModal'
import AddDataServiceModal from '../../Modals/AddDataServiceModal/AddDataServiceModal'
import AddDataSpecializationModal from '../../Modals/AddDataSpecializationModal/AddDataSpecializationModal'
import AddDataPanelUserModal from '../../Modals/AddDataPanelUserModal/AddDataPanelUserModal'

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

export default function AddDataTab() {
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
              <Typography variant='caption' color="text.primary">Add Data</Typography>
            </Breadcrumbs>
          </div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Add Doctor" {...a11yProps(0)} />
                <Tab label="Add Doctor Schedule" {...a11yProps(1)} />
                <Tab label="Add Hospital" {...a11yProps(2)} />
                <Tab label="Add Pharmacy" {...a11yProps(3)} />
                <Tab label="Add Panel Users" {...a11yProps(4)} />
                <Tab label="Add Specialization" {...a11yProps(5)} />
                <Tab label="Add Services" {...a11yProps(6)} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <AddDoctorModal/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AddDoctorScheduleModal/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <AddDataHospitalModal/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <AddDataStoreModal/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <AddDataPanelUserModal/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <AddDataSpecializationModal/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <AddDataServiceModal/>
            </TabPanel>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
