import React, { useState, useEffect } from 'react'
import '../Style.css'
import {
  Grid, Paper, Avatar, Typography, TextField, Breadcrumbs, Link, IconButton, CircularProgress,
  FormControlLabel, RadioGroup, Radio, FormControl, InputLabel, MenuItem, Select, Button, Box, Alert, Snackbar
} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import * as ViewDetails from '../../../Redux/Actions/action';

export default function ViewHospitalDetails() {

  const { id } = useParams();
  let navigate = useNavigate();

  //LOCADING STATE
  const [isLoading, setIsLoading] = useState(false);
  //UPDATE MODAL STATES
  const [doctorID, setDoctorID] = useState()
  const [editHospName, setEditHospName] = useState('');
  const [editHospContact, setEditHospContact] = useState('');
  const [editHospHomeService, setEditHospHomeService] = useState('');
  const [editHospAddress, setEditHospAddress] = useState('');
  const [editHospCity, setEditHospCity] = useState('');
  const [editHospCountry, setEditHospCountry] = useState('');
  const [editHospLatitude, setEditHospLatitude] = useState('');
  const [editHospLongitude, setEditHospLongitude] = useState('');
  const [editHospUniqueId, setEditHospUniqueId] = useState('');
  const [editHospImageUrl, setEditHospImageUrl] = useState('-');
  const [hospLoginUid, sethospLoginUid] = useState(localStorage.getItem('LoginID'));
  const [PublishTime, setPublishTime] = useState(Date());
  const [PublishDate, setPublishDate] = useState(Date());

  //REDUX DATA GET
  const dispatch = useDispatch();
  const { loginId } = useSelector(state => state.loginId);
  const { particular_hospital } = useSelector(state => state.particular_hospital);

  useEffect(() => {
    dispatch(ViewDetails.fetchParticularHospital(id));
  }, [dispatch])

  useEffect(() => {
    particular_hospital.map((val) => {
      let Object = {
        Name: val.hospital_name,
        Contact: val.hospital_contact,
        Address: val.hospital_address,
        HomeService: val.home_service,
        City: val.hospital_city,
        Country: val.hospital_country,
        Latitude: val.hospital_latitude,
        Longitude: val.hospital_longitude,
        hospitalUniqueId: val.hospital_unique_id
      }
      setEditHospName(Object.Name);
      setEditHospContact(Object.Contact);
      setEditHospAddress(Object.Address);
      setEditHospHomeService(Object.HomeService);
      setEditHospCity(Object.City);
      setEditHospCountry(Object.Country);
      setEditHospLatitude(Object.Latitude);
      setEditHospLongitude(Object.Longitude);
      setEditHospUniqueId(Object.hospitalUniqueId);
    })
  }, [particular_hospital]);

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

 
  const handleHomeServiceChange = (event) => {
    setEditHospHomeService(event.target.value)
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
    // console.log('jbadbjad')
    setIsLoading(true)
    let userId = loginId
    event.preventDefault();

    dispatch(ViewDetails.updateHospitals(id,editHospName, editHospContact, editHospAddress, editHospCity, editHospCountry,
      editHospHomeService, editHospLatitude, editHospLongitude, editHospImageUrl, userId, PublishTime, 
      PublishDate));

    setEditHospName('')
    setEditHospContact('')
    setEditHospAddress('')
    setEditHospHomeService('')
    setEditHospCity('')
    setEditHospCountry('')
    setEditHospLatitude('')
    setEditHospLongitude('')

    setIsLoading(false)
    handleSuccessClick()
    dispatch(ViewDetails.fetchParticularHospital(id));
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
              <Typography variant='caption' color="text.primary">Hopital Details</Typography>
              <Typography variant='caption' color="text.primary">{editHospName}</Typography>
            </Breadcrumbs>
          </div>

          <Box className='viewDetailsBoxContainer'>

            <Grid container columnSpacing={2} rowSpacing={2}>
             
              {/* ITEM 1
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper elevation={10} className='itemOnePaperContainer' 
                style={{background:'linear-gradient(90deg, rgba(88,167,185,1) 43%, rgba(204,234,241,1) 100%)'}}
                >
                  
                  <div className='itemOneInfoContainer'>
                    <div className='itemOneAvatarContainer'><Avatar style={{height:'15vh', width:'80%'}} {...stringAvatar(editHospName)}/></div>
                  <div className='itemOneDataContainer'>
                    <Typography style={{ textTransform: 'capitalize', color:'white', fontWeight:'bold' }}>{editHospName}</Typography>
                    <Typography style={{ color:'white', fontWeight:'bold' }}>{'User ID: '}{editHospUniqueId}</Typography>
                  </div>
                  </div>
                </Paper>
              </Grid> */}

               {/* ITEM 1 */}
               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper elevation={10} className='itemOnePaperContainer'
                  style={{ background: 'linear-gradient(90deg, rgba(88,167,185,1) 43%, rgba(204,234,241,1) 100%)' }}
                >
                  <Grid container >
                  <Grid item xs={12} md={1}>
                    <Box className='itemOneAvatarContainer'><Avatar {...stringAvatar(editHospName)} variant="rounded"/></Box>
                  </Grid>
                  <Grid item xs={12} md={8} sx={{padding:'1%'}}>
                    <Box className='itemOneDataContainer'>
                      <Typography style={{ textTransform: 'capitalize', color: 'white', fontWeight: 'bold' }}>{editHospName}</Typography>
                      <Typography style={{ color: 'white', fontWeight: 'bold' }}>{editHospCity}{', '}{editHospCountry}</Typography>
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} md={3}>
                    <Box className='itemOneSwitchContainer'>
                      <Box className='itemOneTagContainer'>
                        {editDocAvailabilityUid == 0 ? (<Tag color='error'>Unavailable</Tag>) : (<Tag color='success'>Available</Tag>)}
                      </Box>
                      <Box className='itemOneSwitch'>
                        <Typography variant='body2' style={{ color: 'white' }}>Is Doctor Available?</Typography>
                        <Switch
                          // value="1"
                          checked={editDocAvailabilityUid == 1}
                          onChange={handleAvailabilityChange}
                          inputProps={{ 'aria-label': 'controlled' }}
                        />
                      </Box>
                      <Typography variant='caption' color='error'>*This is only for a week.</Typography>
                    </Box>
                  </Grid> */}
                  </Grid>
                </Paper>
              </Grid>

              {/* ITEM 2 */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper elevation={10} style={{ padding: '2%' }}>
                  <form onSubmit={handleSubmit} autoComplete="off" style={{ width: '100%' }}>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        {/* NAME AND CONTACT CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Name: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editHospName} onChange={e => setEditHospName(e.target.value)} size='small' label="Name..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Contact: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editHospContact} onChange={e => setEditHospContact(e.target.value)} size='small' label="Contact..." variant="outlined" />
                          </Grid>
                        </Grid>
                        {/* ADDRESS & HOMESERVICE CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Address: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editHospAddress} onChange={e => setEditHospAddress(e.target.value)} size='small' label="Address..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Home Service: </Typography>
                            <FormControl fullWidth size='small' variant="outlined" style={{marginTop:'1%'}}>
                              <InputLabel id="demo-simple-select-outlined-label">Provice Home Service....</InputLabel>
                              <Select size='small' value={editHospHomeService} onChange={handleHomeServiceChange}
                                label="Home Service"> 
                                <MenuItem value={1}>{'Yes'}</MenuItem>
                                <MenuItem value={0}>{'No'}</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        {/* CITY & COUNTRY container */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>City: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editHospCity} onChange={e => setEditHospCity(e.target.value)} size='small' label="City..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Country: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editHospCountry} onChange={e => setEditHospCountry(e.target.value)} size='small' label="Country..." variant="outlined" />
                          </Grid>
                        </Grid>
                         {/* LATITUDE & LONGITUDE container */}
                         <Grid container columnSpacing={1}>
                         <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Latitude: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editHospLatitude} onChange={e => setEditHospLatitude(e.target.value)} size='small' label="Latitude..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Longitude: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editHospLongitude} onChange={e => setEditHospLongitude(e.target.value)} size='small' label="Longitude..." variant="outlined" />
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
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Hospital Details Have Been Updated Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Hospital Details Have Not Been Updated Successfully!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
    </Grid>
  )
}
