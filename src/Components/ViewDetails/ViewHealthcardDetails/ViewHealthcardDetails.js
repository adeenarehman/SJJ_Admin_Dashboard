import React, { useState, useEffect } from 'react'
import '../Style.css'
import {
  Grid, Paper, Avatar, Typography, TextField, Breadcrumbs, Link, IconButton, CircularProgress, Alert, Snackbar,
  FormControlLabel, RadioGroup, Radio, FormControl, InputLabel, MenuItem, Select, Button, Box,
} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import * as ViewDetails from '../../../Redux/Actions/action';

export default function ViewHealthcardDetails() {

  const { id } = useParams();
  let navigate = useNavigate();

  //LOCADING STATE
  const [isLoading, setIsLoading] = useState(false);
  //UPDATE MODAL STATEuseParamsS
  const [cardNumber, setCardNumber] = useState('');
  const [hospitalId, setHospitalId] = useState('');
  const [HospitalName, setHospitalName] = useState('');
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userCity, setUserCity] = useState('');
  const [issue, setIssue] = useState();
  const [expiry, setExpiry] = useState();
  const [status, setStatus] = useState();
  const [fees, setFees] = useState('');
  const [activity, setActivity] = useState('')
  // const [hospLoginUid, sethospLoginUid] = useState(localStorage.getItem('LoginID'));
  const [PublishTime, setPublishTime] = useState(Date());
  const [PublishDate, setPublishDate] = useState(Date());

  //REDUX DATA GET
  const dispatch = useDispatch();
  const { hospital } = useSelector(state => state.hospital);
  const { particular_healthcard } = useSelector(state => state.particular_healthcard);
  const { healthcardData } = useSelector(state => state.healthcardData);

  useEffect(() => {
    // console.log('Ciew details page',id)
    dispatch(ViewDetails.fetchParticularHealthcard(id));
  }, [dispatch])

  useEffect(() => {
    particular_healthcard.map((val) => {
      let Object = {
        CardNumber: val.healthcard_number,
        UserName: val.healthcard_user_name,
        UserContact: val.healthcard_user_contact,
        UserAddress: val.healthcard_user_address,
        UserCity: val.healthcard_user_city,
        HospitalId: val.hospital_uid,
        HospitalName: val.hospital_name,
        Fees: val.healthcard_fees,
        Status: val.healthcard_status,
        Activity: val.healthcard_activity,
        Issue: val.healthcard_date_of_issue,
        Expiry: val.healthcard_date_of_expiry,
        // hospitalUniqueId: val.hospital_unique_id
      }
      setCardNumber(Object.CardNumber)
      setUserName(Object.UserName);
      setUserContact(Object.UserContact);
      setUserAddress(Object.UserAddress);
      setUserCity(Object.UserCity);
      setHospitalId(Object.HospitalId);
      setHospitalName(Object.HospitalName);
      setFees(Object.Fees);
      setStatus(Object.Status);
      setActivity(Object.Activity)
      setIssue(Object.Issue);
      setExpiry(Object.Expiry);
    })
  }, [particular_healthcard]);

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
 
  const handleHospitalChange = (event) => {
    setHospitalId(event.target.value)
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  };
  const handleIssueChange = (newValue) => {
    setIssue(newValue);
  };
  const handleExpiryChange = (newValue) => {
    setExpiry(newValue);
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
    console.log('jbadbjad', cardNumber)
    setIsLoading(true)
    // let userId = loginId
    event.preventDefault();

    dispatch(ViewDetails.updateHealthcard(id,cardNumber, userName, userContact, userAddress, userCity, fees, expiry, issue, status, activity, hospitalId, 
      PublishTime, PublishDate));

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
    // dispatch(ViewDetails.fetchParticularHospital(id));
  };

  return (
    // console.log('doctor details: ', particular_healthcard),
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
              <Typography variant='caption' color="text.primary">Healthcard Details</Typography>
              <Typography variant='caption' color="text.primary">{userName}</Typography>
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
                    <Box className='itemOneAvatarContainer'><Avatar {...stringAvatar(userName)} variant="rounded"/></Box>
                  </Grid>
                  <Grid item xs={12} md={8} sx={{padding:'1%'}}>
                    <Box className='itemOneDataContainer'>
                      <Typography style={{ textTransform: 'capitalize', color: 'white', fontWeight: 'bold' }}>{userName}</Typography>
                      {/* <Typography style={{ color: 'white', fontWeight: 'bold' }}>{editHospCity}{', '}{}</Typography> */}
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
                  <form onSubmit={handleSubmit} autoComplete="off" style={{ width: '100%' }} required>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        {/* CARD NUM & HOSPITAL CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Card Number: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={cardNumber} onChange={e => setCardNumber(e.target.value)} size='small' label="Card Num..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Hospital </Typography>
                            <FormControl fullWidth size='small' variant="outlined" style={{marginTop:'1%'}}>
                              <InputLabel id="demo-simple-select-outlined-label">Select Hospital....</InputLabel>
                              <Select size='small' value={hospitalId} onChange={handleHospitalChange} label="Home Service"> 
                                {hospital.map((val)=>{
                                  return(
                                    <MenuItem value={val.hospital_id}>{val.hospital_name}</MenuItem>
                                  )
                                })}
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        {/* NAME AND CONTACT CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Name: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={userName} onChange={e => setUserName(e.target.value)} size='small' label="Name..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Contact: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={userContact} onChange={e => setUserContact(e.target.value)} size='small' label="Contact..." variant="outlined" />
                          </Grid>
                        </Grid>
                        {/* CITY & ADDRESS container */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Address: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={userAddress} onChange={e => setUserAddress(e.target.value)} size='small' label="Address..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>City: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={userCity} onChange={e => setUserCity(e.target.value)} size='small' label="City..." variant="outlined" />
                          </Grid>
                        </Grid>
                        {/* DATE OF EXPIRY & ISSUE container */}
                        <Grid container columnSpacing={1}>
                         <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold',marginBottom:'2%' }}>Date Of Issue: </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker fullWidth
                              // style={{marginTop:'2%'}}
                                label="Date Of Issue"
                                inputFormat="MM/DD/YYYY"
                                value={issue}
                                onChange={handleIssueChange}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </LocalizationProvider>                          
                            </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold', marginBottom:'2%' }}>Date Of Expiry: </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker fullWidth
                              // style={{marginTop:'2%'}}
                                label="Date Of Expiry"
                                inputFormat="MM/DD/YYYY"
                                value={expiry}
                                onChange={handleExpiryChange}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </LocalizationProvider>                             
                            </Grid>
                        </Grid>
                         {/* STATUS & FEES container */}
                         <Grid container columnSpacing={1}>
                         <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Status: </Typography>
                            <FormControl fullWidth size='small' variant="outlined" style={{marginTop:'1%'}}>
                              <InputLabel id="demo-simple-select-outlined-label">Select Status....</InputLabel>
                              <Select size='small' value={status} onChange={handleStatusChange}
                                label="Home Service"> 
                                <MenuItem value={1}>{'Pending'}</MenuItem>
                                <MenuItem value={2}>{'Accepted'}</MenuItem>
                                <MenuItem value={3}>{'Rejected'}</MenuItem>
                              </Select>
                            </FormControl>                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Fees: </Typography>
                            <TextField style={{ width: '100%', marginTop:'1%' }} value={fees} onChange={e => setFees(e.target.value)} size='small' label="Fees..." variant="outlined" />
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
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Healthcard Details Have Been Updated Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Healthcard Details Have Not Been Updated Successfully!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
    </Grid>
  )
}
