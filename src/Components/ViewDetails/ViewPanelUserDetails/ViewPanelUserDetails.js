import React, { useState, useEffect } from 'react'
import '../Style.css'
import {
  Grid, Paper, Avatar, Typography, TextField, Breadcrumbs, Link, IconButton, CircularProgress,
  FormControl, InputLabel, MenuItem, Select, Button, Box, Alert, Snackbar
} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import * as ViewDetails from '../../../Redux/Actions/action';

export default function ViewPanelUserDetails() {

  const { id } = useParams();
  let navigate = useNavigate();

  //LOCADING STATE
  const [isLoading, setIsLoading] = useState(false);
  //UPDATE MODAL STATES
  // const [ID, setID] = useState()
  const [editPanelUserFirstName, setEditPanelUserFirstName] = useState('');
  const [editPanelUserLastName, setEditPanelUserLastName] = useState('');
  const [editPanelUserEmail, setEditPanelUserEmail] = useState('');
  const [editPanelUserPassword, setEditPanelUserPassword] = useState('');
  const [editPanelUserCity, setEditPanelUserCity] = useState('');
  const [editPanelUserCountry, setEditPanelUserCountry] = useState('');
  const [editPanelUserDesignationId, setEditPanelUserDesignationId] = useState('');
  const [editPanelUserDesignationName, setEditPanelUserDesignationName] = useState('');
  const [editPanelUserHospitalId, setEditPanelUserHospitalId] = useState('');
  const [editPanelUserHospitalName, setEditPanelUserHospitalName] = useState('');
  const [editPanelUserUniqueId, setEditPanelUserUniqueId] = useState('');
  const [editPanelUserImageUrl, setEditPanelUserImageUrl] = useState('-');
  const [panelUserLoginUid, setPanelUserLoginUid] = useState(localStorage.getItem('LoginID'));
  const [PublishTime, setPublishTime] = useState(Date());
  const [PublishDate, setPublishDate] = useState(Date());

  //REDUX DATA GET
  const dispatch = useDispatch();
  const { particular_panel_user } = useSelector(state => state.particular_panel_user);
  const { hospital } = useSelector(state => state.hospital);
  const { loginId } = useSelector(state => state.loginId);

  useEffect(() => {
    dispatch(ViewDetails.fetchParticularPanelUser(id));
    dispatch(ViewDetails.fetchHospitals());
  }, [dispatch])

  useEffect(() => {
    particular_panel_user.map((val) => {
      let Object = {
        FirstName: val.panel_user_first_name,
        LastName: val.panel_user_last_name,
        City: val.panel_user_city,
        Country: val.panel_user_country,
        DesigId: val.designation_uid,
        // DesigName: val.designation_name,
        HospName: val.hospital_name,
        HospId: val.hospital_uid,
        Email: val.panel_user_email,
        Password: val.panel_user_password,
        PanelUserUniqueId: val.panel_user_unique_id
      }
      setEditPanelUserFirstName(Object.FirstName);
      setEditPanelUserLastName(Object.LastName);
      setEditPanelUserCity(Object.City);
      setEditPanelUserCountry(Object.Country);
      setEditPanelUserEmail(Object.Email);
      setEditPanelUserPassword(Object.Password);
      setEditPanelUserDesignationId(Object.DesigId);
      // setEditPanelUserDesignationName(Object.DesigName);
      setEditPanelUserHospitalId(Object.HospId);
      setEditPanelUserHospitalName(Object.HospName);
      setEditPanelUserUniqueId(Object.PanelUserUniqueId)
    })
  }, [particular_panel_user]);

   // SNACKBAR STATES
   const [openSuccess, setOpenSuccess] = React.useState(false);
   const [openError, setOpenError] = React.useState(false);
   const [state, setState] = React.useState({ open: false, vertical: 'top', horizontal: 'center', });
   const { vertical, horizontal, open } = state;

   // SNACKBAR FUNCTIONS
   const handleSuccessClick = () => {
       // dispatch(doctorAction.deleteSingleDoctor(uid));
       setOpenSuccess(true);
       // dispatch(doctorAction.fetchDoctors());
   };
   const handleSuccessClose = (event, reason) => {
       if (reason === 'clickaway') {
           return;
       }
       setState({ ...state, open: false });
       setOpenSuccess(false);
   };

   const handleErrorClick = () => {
       // setTransition(() => Transition);
       setOpenError(true);
   };
   const handleErrorClose = (event, reason) => {
       if (reason === 'clickaway') {
           return;
       }
       setState({ ...state, open: false });
       setOpenError(false);
   };
 
  const handleDesignationChange = (event) => {
    setEditPanelUserDesignationId(event.target.value)
  }

  const handleHospitalChange = (event) => {
    setEditPanelUserHospitalId(event.target.value)
  };

 
  // AVATAR COLOR FUNCTIONS
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 80, height: 80,
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  // FORM SUBMIT DATA FUNCTION 
  const handleSubmit = (event) => {
    // console.log('jbadbjad', editPanelUserDesignationId, editPanelUserHospitalId)
    setIsLoading(true)
    let userId = loginId
    event.preventDefault();

    dispatch(ViewDetails.updatePanelUsers(id,editPanelUserFirstName, editPanelUserLastName, editPanelUserEmail, 
      editPanelUserPassword, editPanelUserCity, editPanelUserCountry, editPanelUserDesignationId, editPanelUserHospitalId, 
      editPanelUserImageUrl, userId, PublishTime, PublishDate));
    // setDoctorData()
    // setEditHospName('')
    // setEditHospContact('')
    // setEditHospAddress('')
    // setEditHospHomeService('')
    // setEditHospCity('')
    // setEditHospCountry('')
    // setEditHospLatitude('')
    // setEditHospLongitude('')

    setIsLoading(false)
    handleSuccessClick()
    dispatch(ViewDetails.fetchParticularPanelUser(id))
  };

  return (
    // console.log('doctor details: ', editDocSpecialization),
    <Grid container rowSpacing={1} columnSpacing={1} style={{ height: '100%' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={0} className='viewDetailsPaperContainer'>

          {/* BREADCRUMBS DIV */}
          <div role="presentation" style={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            {/* <IconButton size='small' color='inherit' onClick={() => { navigate('doctors') }}>
              <ArrowBackIcon />
            </IconButton> */}
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" variant='caption' color="inherit" href="http://localhost:3000/dashboard">
                Dashboard
              </Link>
              <Typography variant='caption' color="text.primary">Panel User Details</Typography>
              <Typography variant='caption' color="text.primary">{editPanelUserFirstName}{' '}{editPanelUserLastName}</Typography>
            </Breadcrumbs>
          </div>

          <Box className='viewDetailsBoxContainer'>

            <Grid container columnSpacing={2} rowSpacing={2}>
             
              {/* ITEM 1 */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper elevation={10} className='itemOnePaperContainer'
                  style={{ background: 'linear-gradient(90deg, rgba(88,167,185,1) 43%, rgba(204,234,241,1) 100%)' }}
                >
                  <Grid container >
                  <Grid item xs={12} md={1}>
                    <Box className='itemOneAvatarContainer'><Avatar {...stringAvatar(editPanelUserFirstName)} variant="rounded"/></Box>
                  </Grid>
                  <Grid item xs={12} md={8} sx={{padding:'1%'}}>
                    <Box className='itemOneDataContainer'>
                      <Typography style={{ textTransform: 'capitalize', color: 'white', fontWeight: 'bold' }}>{editPanelUserFirstName}{' '}{editPanelUserLastName}</Typography>
                      <Typography style={{ color: 'white', fontWeight: 'bold' }}>{'Unique ID: '}{editPanelUserUniqueId}</Typography>
                    </Box>
                  </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* ITEM 2 */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper elevation={10} style={{ padding: '2%' }}>
                  <form onSubmit={handleSubmit} autoComplete="off" style={{ width: '100%' }}>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        {/* FIRST & LAST NAME CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>First Name: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPanelUserFirstName} onChange={e => setEditPanelUserFirstName(e.target.value)} size='small' label="First Name..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Last Name: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPanelUserLastName} onChange={e => setEditPanelUserLastName(e.target.value)} size='small' label="Last Name..." variant="outlined" />
                          </Grid>
                        </Grid>
                        {/* EMAIL & PASSWORD CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Email: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPanelUserEmail} onChange={e => setEditPanelUserEmail(e.target.value)} size='small' label="Email..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Password: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPanelUserPassword} onChange={e => setEditPanelUserPassword(e.target.value)} size='small' label="Password..." variant="outlined" />
                          </Grid>
                        </Grid>
                        {/* CITY & COUNTRY container */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>City: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPanelUserCity} onChange={e => setEditPanelUserCity(e.target.value)} size='small' label="City..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Country: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPanelUserCountry} onChange={e => setEditPanelUserCountry(e.target.value)} size='small' label="Country..." variant="outlined" />
                          </Grid>
                        </Grid>
                         {/* LATITUDE & LONGITUDE container */}
                         <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Designation: </Typography>
                            <FormControl fullWidth size='small' variant="outlined" style={{marginTop:'1%'}}>
                              <InputLabel id="demo-simple-select-outlined-label">Designation....</InputLabel>
                              <Select size='small' value={editPanelUserDesignationId} onChange={handleDesignationChange}
                                label="Designation....."> 
                                <MenuItem value={1}>{'Admin'}</MenuItem>
                                <MenuItem value={2}>{'Sub-Admin'}</MenuItem>
                                <MenuItem value={3}>{'Hospital-Admin'}</MenuItem>
                                <MenuItem value={4}>{'Hospital-Sub-Admin'}</MenuItem>
                                <MenuItem value={5}>{'Doctor'}</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Hospital: </Typography>
                            <FormControl fullWidth size='small' variant="outlined" style={{marginTop:'1%'}}>
                              <InputLabel id="demo-simple-select-outlined-label">Hospital....</InputLabel>
                              <Select size='small' value={editPanelUserHospitalId} onChange={handleHospitalChange}
                                label="Hospital....."> 
                                {hospital.map((val) => {
                                  return (
                                    <MenuItem value={val.hospital_id}>
                                      {val.hospital_name}
                                    </MenuItem>
                                  )
                                })}
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* Button Container */}
                    <Grid container style={{ padding: '2%', display: 'flex', justifyContent: 'center' }}>
                      <Button type='submit' variant='contained'>
                        Edit
                        {isLoading ?
                          <CircularProgress color="inherit" size={14} style={{
                            marginLeft: 10
                          }} /> : null
                        }
                      </Button>
                    </Grid>

                  </form>
                </Paper>
              </Grid>

            </Grid>

          </Box>

        </Paper>
      </Grid>
       {/* -------------------------------------------------------------------------------------------------------------- */}
       <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Panel Users Details Have Been Updated Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Panel Users Details Have Not Been Updated Successfully!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
    </Grid>
  )
}
