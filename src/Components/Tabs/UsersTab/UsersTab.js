import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  Typography,
  Box,
  Breadcrumbs,
  Link
} from '@mui/material'
import UserTable from '../../Tables/UserTable/UserTable';
import PanelUserTable from '../../Tables/PanelUserTable/PanelUserTable';
import { useDispatch, useSelector } from 'react-redux';
import * as userTab from '../../../Redux/Actions/action';


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

export default function UsersTab() {

  const { loginDesignation } = useSelector(state => state.loginDesignation);


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
              <Typography variant='caption' color="text.primary">Users</Typography>
            </Breadcrumbs>
          </div>
          {localStorage.getItem('loginDesignation') == 1 ?
              (
                <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Application Users" {...a11yProps(0)} />
                <Tab label="Panel Users" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserTable/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <PanelUserTable/>
             </TabPanel>
          </Box>
              )
                : localStorage.getItem('loginDesignation') == 2 ?
              (
                <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Application Users" {...a11yProps(0)} />
                  <Tab label="Panel Users" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserTable/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PanelUserTable/>
              </TabPanel>
            </Box>
              )
            : null
          }
        </Paper>
      </Grid>
    </Grid>
  );
}