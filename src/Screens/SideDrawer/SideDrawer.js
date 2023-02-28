import React, { useState, useEffect } from 'react';
import './SideDrawer.css'
import { styled, useTheme } from '@mui/material/styles';
import {
  Box, Toolbar, List, CssBaseline, IconButton, ListItem, ListItemText, Tooltip, Container,
  Avatar, Typography, Menu, MenuItem, Alert, Snackbar
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import AdbIcon from '@mui/icons-material/Adb';
import { FaStoreAlt, FaStethoscope, FaHospital, FaUserMd, FaUserFriends, FaBookMedical, FaIdCard } from 'react-icons/fa';
import { MdDashboard, MdLogout } from 'react-icons/md';
import { RiHomeSmileFill } from 'react-icons/ri';
import { HiOutlineFolderAdd } from 'react-icons/hi';
import { BsInfoCircleFill, BsFillBookmarkCheckFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import * as AuthLoginAction from '../../Redux/Actions/action';
import Logo from '../../Assets/logo.png';

const drawerWidth = 245;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {

  // const dispatch = useDispatch();
  // const { loginDesignation } = useSelector(state => state.loginDesignation)
  // const { loginFirstName } = useSelector(state => state.loginFirstName)
  // const { loginLastName } = useSelector(state => state.loginLastName)

  const [designation, setDesignation] = useState();
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  // SNACKBAR STATES
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [state, setState] = React.useState({ openAlert: false, vertical: 'top', horizontal: 'center',});
  const { vertical, horizontal, openAlert } = state;
  
  // SNACKBAR FUNCTIONS
   const handleSuccessClick = () => {
    console.log('aya')
    setOpenSuccess(true);
  };
  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
    setOpenSuccess(false);
  };

  const handleErrorClick = () => {
    console.log('error aya')
    setOpenError(true);
  };
  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
    setOpenError(false);
  };

  let navigate = useNavigate();
  const { children } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [UserDesignation, setUserDesignation] = useState(0);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () =>{
    localStorage.removeItem('persistantState')

    if (localStorage.getItem('persistantState')) {
      // console.log('Something Went Wrong')
      handleErrorClick()
    } else {
      navigate('/login')
      handleSuccessClick()
    }
   };

  return (
    // console.log('loginDesignation: ', loginDesignation),
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <ThemeProvider> */}
      <AppBar position="fixed" open={open} style={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl" style={{width:'100%'}}>
          <Toolbar disableGutters>

            {/* MEnu Icon for Big Screen */}
            <IconButton
              color="error"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 4,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box style={{ display: 'flex', flexDirection:'row', width:'100%' }}>
              
              {/* <AdbIcon color='primary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <Box sx={{ display: { xs: 'none', md: 'flex' },  }}><img src={Logo} style={{ height: '7vh', width: '100%' }} /></Box>

              {/* For Small Screen */}
              {/* <AdbIcon color='info' sx={{ display: { xs: 'flex', md: 'none', flexGrow: 1 } }} /> */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}><img src={Logo} style={{ height: '6vh', width: '100%' }} /></Box>

              {/* AVATAR */}
              <Box sx={{ display: 'flex', flexDirection: 'row', width:'85%', justifyContent:'flex-end'}}>
                <Box style={{ display: 'flex', flexDirection: 'column', marginRight:'2%', justifyContent:'center', alignItems:'center'}}>
                  <Typography sx={{display: { xs: 'none', md: 'flex' }}} variant='caption' color='textSecondary'>ADMIN USER</Typography>
                  {localStorage.getItem('loginDesignation') == 1 ?
                    (<Typography sx={{display: { xs: 'none', md: 'flex' }}} variant='caption' color='textSecondary'>Admin</Typography>)
                    : localStorage.getItem('loginDesignation') == 2 ?
                    (<Typography sx={{display: { xs: 'none', md: 'flex' }}} variant='caption' color='textSecondary'>Sub-Admin</Typography>)
                    : 
                    (<Typography sx={{display: { xs: 'none', md: 'flex' }}} variant='caption' color='textSecondary'>-</Typography>)
                  }
                </Box>
                {/* AVATAR */}
                {/* <Tooltip title=""> */}
                  <IconButton edge='start'
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, }}>
                    <Avatar alt="Admin" sx={{backgroundColor:'#bb1e1d'}} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                {/* </Tooltip> */}
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem> */}
                  <MenuItem onClick={() => { logout() }}>Sign Out</MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* </ThemeProvider> */}
      <Drawer variant="permanent" open={open} >
        <DrawerHeader style={{ backgroundColor: '#b11e1d' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon color='inherit' /> : <ChevronLeftIcon color='inherit' />}
          </IconButton>
        </DrawerHeader>

        {localStorage.getItem('loginDesignation') == 1 ?
          (
            <List style={{ backgroundColor: '#b11e1d', height: '100%' }}>
              <ListItem className='drawerListButton' component={Link} to='/dashboard'>
                <Tooltip title='Dashboard' arrow>
                  <ListItemIcon><MdDashboard size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Dashboard' arrow>
                  <ListItemText primary="Dashboard"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='doctors'>
                <Tooltip title='Doctors' arrow>
                  <ListItemIcon><FaUserMd size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Doctors' arrow>
                  <ListItemText primary="Doctors"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='hospitals'>
                <Tooltip title='Hospitals' arrow>
                  <ListItemIcon><FaHospital size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Hospitals' arrow>
                  <ListItemText primary="Hospitals"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='pharmacies'>
                <Tooltip title='Pharmacies' arrow>
                  <ListItemIcon><FaStoreAlt size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Pharmacies' arrow>
                  <ListItemText primary="Pharmacies"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              {/* <ListItem className='drawerListButton' component={Link} to='book-appointment'>
                <Tooltip title='Book Appointment' arrow>
                  <ListItemIcon><BsFillBookmarkCheckFill size='2.7vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Book Appointment' arrow>
                  <ListItemText primary="Book Appointment"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem> */}

              <ListItem className='drawerListButton' component={Link} to='healthcard'>
                <Tooltip title='HealthCard Registration' arrow>
                  <ListItemIcon><FaIdCard size='2.7vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='HealthCard Registration' arrow>
                  <ListItemText primary="HealthCard Registration"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='appointment-records'>
                <Tooltip title='Appointment Records' arrow>
                  <ListItemIcon><FaStethoscope size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Appointment Records' arrow>
                  <ListItemText primary="Appointment Records"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='user-records'>
                <Tooltip title='User Records' arrow>
                  <ListItemIcon><FaUserFriends size='2.7vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='User Records' arrow>
                  <ListItemText primary="User Records"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='medicine-booking-records'>
                <Tooltip title='Medicine Booking Records' arrow>
                  <ListItemIcon><FaBookMedical size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Medicine Booking Records' arrow>
                  <ListItemText primary="Medicine Booking Records"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='home-service-records'>
                <Tooltip title='Home Service Records' arrow>
                  <ListItemIcon><RiHomeSmileFill size='2.7vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Home Service Records' arrow>
                  <ListItemText primary="Home Service Records"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='information'>
                <Tooltip title='Information Records' arrow>
                  <ListItemIcon><BsInfoCircleFill size='2.7vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Information Records' arrow>
                  <ListItemText primary="Information Records"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='add-data'>
                <Tooltip title='Add Data' arrow>
                  <ListItemIcon><HiOutlineFolderAdd size='3vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Add Data' arrow>
                  <ListItemText primary="Add Data"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              {/* <ListItem className='drawerListButton' component={Link} to='/login'>
              <Tooltip title='Sign Out' arrow>
                <ListItemIcon><MdLogout size='3vh' color='white' /></ListItemIcon>
              </Tooltip>
              <Tooltip title='Sign Out' arrow>
                <ListItemText primary="Sign Out"
                  primaryTypographyProps={{
                    color: 'white',
                    fontWeight: 'medium',
                    variant: 'subtitle2',
                  }} />
              </Tooltip>
            </ListItem> */}

            </List>
          ) : localStorage.getItem('loginDesignation') == 2 ?
          (
            <List style={{ backgroundColor: '#b11e1d', height: '100%' }}>
              <ListItem className='drawerListButton' component={Link} to='/dashboard'>
                <Tooltip title='Dashboard' arrow>
                  <ListItemIcon><MdDashboard size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Dashboard' arrow>
                  <ListItemText primary="Dashboard"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='doctors'>
                <Tooltip title='Doctors' arrow>
                  <ListItemIcon><FaUserMd size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Doctors' arrow>
                  <ListItemText primary="Doctors"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='hospitals'>
                <Tooltip title='Hospitals' arrow>
                  <ListItemIcon><FaHospital size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Hospitals' arrow>
                  <ListItemText primary="Hospitals"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='pharmacies'>
                <Tooltip title='Pharmacies' arrow>
                  <ListItemIcon><FaStoreAlt size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Pharmacies' arrow>
                  <ListItemText primary="Pharmacies"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='appointment-records'>
                <Tooltip title='Appointment Records' arrow>
                  <ListItemIcon><FaStethoscope size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Appointment Records' arrow>
                  <ListItemText primary="Appointment Records"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='user-records'>
                <Tooltip title='User Records' arrow>
                  <ListItemIcon><FaUserFriends size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='User Records' arrow>
                  <ListItemText primary="User Records"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='home-service-records'>
                <Tooltip title='Home Service Records' arrow>
                  <ListItemIcon><RiHomeSmileFill size='2.5vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Home Service Records' arrow>
                  <ListItemText primary="Home Service Records"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              <ListItem className='drawerListButton' component={Link} to='add-data'>
                <Tooltip title='Add Data' arrow>
                  <ListItemIcon><HiOutlineFolderAdd size='3vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Add Data' arrow>
                  <ListItemText primary="Add Data"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem>

              {/* <ListItem className='drawerListButton' component={Link} to='/login'>
                <Tooltip title='Sign Out' arrow>
                  <ListItemIcon><MdLogout size='3vh' color='white' /></ListItemIcon>
                </Tooltip>
                <Tooltip title='Sign Out' arrow>
                  <ListItemText primary="Sign Out"
                    primaryTypographyProps={{
                      color: 'white',
                      fontWeight: 'medium',
                      variant: 'subtitle2',
                    }} />
                </Tooltip>
              </ListItem> */}
            </List>
          )
        : null
        }

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '5vh' }}>
        {/* <Toolbar /> */}
        <DrawerHeader />
        {children}
      </Box>
      {/* -------------------------------------------------------------------------------------------------------------- */}
      <Snackbar openAlert={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
          <Alert severity="success" variant='filled' onClose={handleSuccessClose}>LogOut Successful!</Alert>
        </Snackbar>

        <Snackbar openAlert={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
          <Alert severity="error" variant='filled' onClose={handleErrorClose}>Error! Something Went Wrong</Alert>
        </Snackbar>
        {/* -------------------------------------------------------------------------------------------------------------- */}
    </Box>

  );
}
