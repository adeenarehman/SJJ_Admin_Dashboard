import React, { useState, useEffect } from 'react'
import '../Style.css'
import {
  Grid, Paper, Avatar, Typography, TextField, Breadcrumbs, Link, IconButton, CircularProgress, Alert, Snackbar,
  FormControlLabel, RadioGroup, Radio, FormControl, InputLabel, MenuItem, Select, Button, Box,
} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import * as ViewDetails from '../../../Redux/Actions/action';

export default function ViewDoctorDetails() {

  const { id } = useParams();
  let navigate = useNavigate();

  //LOCADING STATE
  const [isLoading, setIsLoading] = useState(false);
  //UPDATE MODAL STATES
  const [doctorID, setDoctorID] = useState()
  const [editPharmacyName, setEditPharmacyName] = useState('');
  const [editPharmacyContact, setEditPharmacyContact] = useState('');
  const [editPharmacyArea, setEditPharmacyArea] = useState('');
  const [editPharmacyCity, setEditPharmacyCity] = useState('');
  const [editPharmacyCountry, setEditPharmacyCountry] = useState('');
  const [editPharmacyLatitude, setEditPharmacyLatitude] = useState('');
  const [editPharmacyLongitude, setEditPharmacyLongitude] = useState('');
  const [editPharmacyUniqueId, setEditPharmacyUniqueId] = useState('');
  const [editPharmacyImageUrl, setEditPharmacyImageUrl] = useState('-');
  const [pharmacyLoginUid, setPharmacyLoginUid] = useState(localStorage.getItem('LoginID'));
  const [PublishTime, setPublishTime] = useState(Date());
  const [PublishDate, setPublishDate] = useState(Date());

  //REDUX DATA GET
  const dispatch = useDispatch();
  const { particular_pharmacy } = useSelector(state => state.particular_pharmacy);
  const { loginId } = useSelector(state => state.loginId);

  useEffect(() => {
    dispatch(ViewDetails.fetchParticularPharmacy(id));
  }, [dispatch])

  useEffect(() => {
    particular_pharmacy.map((val) => {
      let Object = {
        Name: val.medical_store_name,
        Contact: val.medical_store_contact,
        Area: val.medical_store_area,
        City: val.medical_store_city,
        Country: val.medical_store_country,
        Latitude: val.medical_store_latitude,
        Longitude: val.medical_store_longitude,
        PharmacyUniqueId: val.medical_store_unique_id
      }
      setEditPharmacyName(Object.Name);
      setEditPharmacyContact(Object.Contact);
      setEditPharmacyArea(Object.Area);
      setEditPharmacyCity(Object.City);
      setEditPharmacyCountry(Object.Country);
      setEditPharmacyLatitude(Object.Latitude);
      setEditPharmacyLongitude(Object.Longitude);
      setEditPharmacyUniqueId(Object.PharmacyUniqueId);
    })
  }, [particular_pharmacy]);

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

    dispatch(ViewDetails.updatePharmacies(id,editPharmacyName, editPharmacyContact, editPharmacyArea, 
      editPharmacyLatitude, editPharmacyLongitude, editPharmacyCity, editPharmacyCountry, 
      editPharmacyImageUrl, userId, PublishTime, PublishDate));
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
    dispatch(ViewDetails.fetchParticularPharmacy(id));
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
              <Typography variant='caption' color="text.primary">Pharmacy Details</Typography>
              <Typography variant='caption' color="text.primary">{editPharmacyName}</Typography>
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
                    <Box className='itemOneAvatarContainer'><Avatar {...stringAvatar(editPharmacyName)} variant="rounded" /></Box>
                  </Grid>
                  <Grid item xs={12} md={8} sx={{padding:'1%'}}>
                    <Box className='itemOneDataContainer'>
                      <Typography style={{ textTransform: 'capitalize', color: 'white', fontWeight: 'bold' }}>{editPharmacyName}</Typography>
                      <Typography style={{ color: 'white', fontWeight: 'bold' }}>{editPharmacyCity}{', '}{editPharmacyCountry}</Typography>
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
                        {/* NAME AND CONTACT CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Name: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPharmacyName} onChange={e => setEditPharmacyName(e.target.value)} size='small' label="Name..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Contact: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPharmacyContact} onChange={e => setEditPharmacyContact(e.target.value)} size='small' label="Contact..." variant="outlined" />
                          </Grid>
                        </Grid>
                        {/* ADDRESS & HOMESERVICE CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Area: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPharmacyArea} onChange={e => setEditPharmacyArea(e.target.value)} size='small' label="Area..." variant="outlined" />
                          </Grid>
                        </Grid>
                        {/* CITY & COUNTRY container */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>City: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPharmacyCity} onChange={e => setEditPharmacyCity(e.target.value)} size='small' label="City..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Country: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPharmacyCountry} onChange={e => editPharmacyContact(e.target.value)} size='small' label="Country..." variant="outlined" />
                          </Grid>
                        </Grid>
                         {/* LATITUDE & LONGITUDE container */}
                         <Grid container columnSpacing={1}>
                         <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Latitude: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPharmacyLatitude} onChange={e => setEditPharmacyLatitude(e.target.value)} size='small' label="Latitude..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Longitude: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={editPharmacyLongitude} onChange={e => setEditPharmacyLongitude(e.target.value)} size='small' label="Longitude..." variant="outlined" />
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
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Pharmacy Details Have Been Updated Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Pharmacy Details Have Not Been Updated Successfully!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
    </Grid>
  )
}
