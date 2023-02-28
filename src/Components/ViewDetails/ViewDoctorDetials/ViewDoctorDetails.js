import React, { useState, useEffect } from 'react'
import '../Style.css'
import {
  Grid, Paper, Avatar, Typography, TextField, Breadcrumbs, Link, IconButton, Card, CardHeader, CircularProgress,
  FormControlLabel, RadioGroup, Radio, FormControl, InputLabel, MenuItem, Select, Button, Box, CardContent, Alert, Snackbar
} from '@mui/material'
import { Tag, Popconfirm, Switch } from 'antd';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import * as ViewDetails from '../../../Redux/Actions/action';
import { isValidElement } from 'react';
import EditDoctorScheduleModal from '../../Modals/EditDoctorScheduleModal/EditDoctorScheduleModal';

export default function ViewDoctorDetails() {

  const { id } = useParams();
  let navigate = useNavigate();

  //LOCADING STATE
  const [isLoading, setIsLoading] = useState(false);
  // //MENU STATES
  const [openModal, setOpenModal] = React.useState(false);
  //UPDATE MODAL STATES
  // const [doctorID, setDoctorID] = useState()
  const [editDocFirstName, setEditDocFirstName] = useState('');
  const [editDocLastName, setEditDocLastName] = useState('');
  const [editDocGender, setEditDocGender] = useState('');
  const [editDocAvailabilityUid, setEditDocAvailabilityUid] = useState();
  const [editDocExperience, setEditDocExperience] = useState('');
  const [editDocPmcNumber, setEditDocPmcNumber] = useState('');
  const [editDocSpecialization, setEditDocSpecialization] = useState('');
  const [editDocDegree, setEditDocDegree] = useState('');
  const [editDocUniqueId, setEditDocUniqueId] = useState('');
  const [editDocImageUrl, setEditDocImageUrl] = useState('-');
  // const [docLoginUid, setDocLoginUid] = useState(localStorage.getItem('LoginID'));
  const [docPublishTime, setDocPublishTime] = useState(Date());
  const [docPublishDate, setDocPublishDate] = useState(Date());

  //REDUX DATA GET
  const dispatch = useDispatch();
  const { specialization } = useSelector(state => state.specialization);
  const { loginId } = useSelector(state => state.loginId);
  const { particular_doctor } = useSelector(state => state.particular_doctor);
  const { single_doctor_schedule } = useSelector(state => state.single_doctor_schedule);
  const { post_doctor } = useSelector(state => state.post_doctor);
  const { post_doctor_availability } = useSelector(state => state.post_doctor_availability);

  useEffect(() => {
    dispatch(ViewDetails.fetchParticularDoctor(id));
    dispatch(ViewDetails.fetchSpecializations());
    dispatch(ViewDetails.fetchSingleDoctorSchedule(id))
    // setStates()
  }, [dispatch])

  useEffect(() => {
    particular_doctor.map((val) => {
      let Object = {
        doctorFirstName: val.doctor_first_name,
        doctorLastName: val.doctor_last_name,
        doctorDeg: val.doctor_degree,
        doctorExp: val.doctor_experience,
        doctorPmc: val.doctor_pmc,
        doctorAvailability: val.availability_status_uid,
        doctorGender: val.doctor_gender_uid,
        doctorSpec: val.specialization_uid,
        doctorUniqueId: val.doctor_unique_id,
        // hospName: val.ho/spital
      }
      setEditDocFirstName(Object.doctorFirstName);
      setEditDocLastName(Object.doctorLastName);
      setEditDocDegree(Object.doctorDeg);
      setEditDocExperience(Object.doctorExp);
      setEditDocPmcNumber(Object.doctorPmc);
      setEditDocUniqueId(Object.doctorUniqueId);
      setEditDocAvailabilityUid(Object.doctorAvailability);
      setEditDocGender(Object.doctorGender);
      setEditDocSpecialization(Object.doctorSpec);
      // setEditDocHospital()
    })
  }, [particular_doctor]);

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
  

  // AVATAR COLORS FUNCTIONS  
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
  function stringDoctorAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 80, height: 80,
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }
  function stringScheduleAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  // 
  const handleDocSpecializationChange = (event) => {
    {/** Specialization DropDown Value Set function */ }
    setEditDocSpecialization(event.target.value)
  };

  const onAvailabilityChange = (checked) => {
    setEditDocAvailabilityUid(checked);
    updateDocAvailability()

  };

  // useEffect(() => {
  //   updateDocAvailability()
  // }, [editDocAvailabilityUid])
  

  const updateDocAvailability = () => {
    let userId = loginId;

    dispatch(ViewDetails.updateDoctorsAvailability(id, editDocAvailabilityUid, userId, docPublishTime, docPublishDate));
  }

  const printTime = (startTime, endTime) => {
    {/** TIME PRINT FUNCTION **/ }
    let start = new Date(startTime)
    let end = new Date(endTime)
    return (
      <Typography variant="subtitle2">{start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}{' - '}{end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Typography>
    )
  }

  const printDay = (day) => {  {/** DAY PRINT FUNCTION **/ }
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][day] || '';
  }

  const handleSubmit = (event) => {
    console.log('jbadbjad', id, loginId)
    setIsLoading(true)
    event.preventDefault();

    dispatch(ViewDetails.updateDoctors(id, editDocFirstName, editDocLastName, editDocDegree, editDocExperience, editDocGender,
      editDocPmcNumber, editDocSpecialization, editDocAvailabilityUid, editDocImageUrl, loginId, docPublishTime, docPublishDate));


    setEditDocDegree('')
    setEditDocExperience()
    setEditDocFirstName('')
    setEditDocGender()
    // setDoctorID()
    setEditDocLastName('')
    setEditDocPmcNumber()

    setIsLoading(false)
    handleSuccessClick()
    dispatch(ViewDetails.fetchParticularDoctor(id))
  };

  return (
    // console.log('doctor details: ', particular_doctor.doctor_first_name),
    // console.log('panel user id ye hai: ', id),
    <Grid container rowSpacing={1} columnSpacing={1} style={{ height: '100%' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={0} className='viewDetailsPaperContainer'>

          {/* BREADCRUMBS DIV */}
          <div role="presentation" style={{ width: '90%', display: 'flex',  alignItems: 'center', justifyContent: 'flex-start', marginBottom:'2%' }}>
            {/* <IconButton size='small' color='inherit' onClick={() => { navigate('doctors') }}>
              <ArrowBackIcon />
            </IconButton> */}
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" variant='caption' color="inherit" href="http://localhost:3000/dashboard">
                Dashboard
              </Link>
              <Typography variant='caption' color="text.primary">Doctor Details</Typography>
              <Typography variant='caption' color="text.primary">{editDocFirstName}{' '}{editDocLastName}</Typography>
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
                    <Box className='itemOneAvatarContainer'><Avatar {...stringDoctorAvatar(editDocFirstName)} variant="rounded"/></Box>
                  </Grid>
                  <Grid item xs={12} md={8} sx={{padding:'1%'}}>
                    <Box className='itemOneDataContainer'>
                      <Typography style={{ textTransform: 'capitalize', color: 'white', fontWeight: 'bold' }}>{'Dr. '} {editDocFirstName} {editDocLastName}</Typography>
                      <Typography style={{ color: 'white', fontWeight: 'bold' }}>{'User ID: '}{editDocUniqueId}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box className='itemOneSwitchContainer'>
                      <Box className='itemOneTagContainer'>
                        {editDocAvailabilityUid == 0 ? (<Tag color='error'>Unavailable</Tag>) : (<Tag color='success'>Available</Tag>)}
                      </Box>
                      <Box className='itemOneSwitch'>
                        <Typography variant='body2' style={{ color: 'white' }}>Is Doctor Available?</Typography>
                        {/* <Switch
                          // value="1"
                          checked={editDocAvailabilityUid == 1}
                          onChange={handleAvailabilityChange}
                          inputProps={{ 'aria-label': 'controlled' }}
                        /> */}
                        <Switch checked={editDocAvailabilityUid == 1} onChange={onAvailabilityChange} />
                      </Box>
                      <Typography variant='caption' color='error'>*This is only for a week.</Typography>
                    </Box>
                  </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* ITEM 2 */}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper elevation={10} sx={{ padding: '2%' }}>
                  <form onSubmit={handleSubmit} autoComplete="off" style={{ width: '100%' }}>
                    <Grid container columnSpacing={2} rowSpacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        {/* FIRST NAME LAST NAME CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>First Name: </Typography>
                            <TextField style={{ width: '100%', marginTop: '1%' }} value={editDocFirstName} onChange={e => setEditDocFirstName(e.target.value)} size='small' label="First Name..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Last Name: </Typography>
                            <TextField style={{ width: '100%', marginTop: '1%' }} value={editDocLastName} onChange={e => setEditDocLastName(e.target.value)} size='small' label="Last Name..." variant="outlined" />
                          </Grid>
                        </Grid>
                        {/* GENDER & PMC NUMBER container */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Gender: </Typography>
                            <FormControl>
                              <RadioGroup row value={editDocGender} onChange={e => setEditDocGender(e.target.value)}>
                                <FormControlLabel value="1" control={<Radio size="small" checked={editDocGender == '1'} />} label="Male" />
                                <FormControlLabel value="2" control={<Radio size="small" checked={editDocGender == '2'} />} label="Female" />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>PMC Number: </Typography>
                            <TextField style={{ width: '100%', marginTop: '1%' }} value={editDocPmcNumber} onChange={e => setEditDocPmcNumber(e.target.value)} size='small' label="PMC Number..." variant="outlined" />
                          </Grid>
                        </Grid>
                        {/* DEGREE & SPECIALZIATION CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Degree: </Typography>
                            <TextField style={{ width: '100%', marginTop: '1%' }} value={editDocDegree} onChange={e => setEditDocDegree(e.target.value)} size='small' label="Degree..." variant="outlined" />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Specialization: </Typography>
                            <FormControl fullWidth size='small' variant="outlined" style={{ marginTop: '1%' }}>
                              <InputLabel id="demo-simple-select-outlined-label">Select Specialization....</InputLabel>
                              <Select size='small' value={editDocSpecialization}
                                label="Specialization" onChange={handleDocSpecializationChange}>
                                {specialization.map((val) => {
                                  return (<MenuItem value={val.specialization_id}>{val.specialization_name}</MenuItem>)
                                })}
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        {/* Experience CONTAINER */}
                        <Grid container columnSpacing={1}>
                          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Experience: </Typography>
                            <TextField style={{ width: '100%', marginTop: '1%' }} value={editDocExperience} onChange={e => setEditDocExperience(e.target.value)} size='small' label="Experience..." variant="outlined" type='number' />
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

            {/* ITEM 3 */}
            <Grid container rowSpacing={1} columnSpacing={1}>
              {/* <Grid item xs={12} sm={12} md={12}  style={{ backgroundColor:'blue' ,display: 'flex', flexDirection: 'row' }}> */}
                {single_doctor_schedule.length ?
                  (
                    single_doctor_schedule.map((val) => {
                      return (
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{marginTop:'2%'}}>
                          <Card elevation={10} >
                            <CardHeader
                              titleTypographyProps={{ fontWeight: 'bold', textTransform: 'capitalize' }}
                              avatar={<Avatar aria-label="recipe" {...stringScheduleAvatar(val.hospital_name)} />}
                              title={val.hospital_name}
                              subheader={val.hospital_contact}
                            />
                            <CardContent>
                              <Box className='viewDetailsScheduleCardTag'> {/* Availability Tag div */}
                                {val.availability_status == 0 ? (<Tag color='error'>Unavailable</Tag>) : (<Tag color='success'>Available</Tag>)}
                              </Box>
                              <Box className='viewDetailsScheduleCard'> {/* Day Div */}
                                <Typography variant="subtitle2" fontWeight={'bold'}>{'Day:'}</Typography><Typography variant="subtitle2">{printDay(val.schedule_day)}({val.shift_name})</Typography>
                              </Box>
                              <Box className='viewDetailsScheduleCard'> {/* Time Slots Div */}
                                <Typography variant="subtitle2" fontWeight={'bold'}>{'Time: '}</Typography>
                                <Typography variant="subtitle2">{printTime(val.start_time, val.end_time)}</Typography>
                              </Box>
                              <Box className='viewDetailsScheduleCard'> {/* FEE Div */}
                                <Typography variant="subtitle2" fontWeight={'bold'}>{'Fee:'}</Typography><Typography variant="subtitle2">{'Rs. '}{val.fees}</Typography>
                              </Box>
                              <Box className='viewDetailsScheduleCard'> {/* Button Div */}
                                <Popconfirm placement="top" title="Are you sure to delete this task?"
                                  // onConfirm={handleSuccessClick(params.value.docId)} onCancel={handleErrorClick} 
                                  okText="Yes" cancelText="No">
                                  <Button size="small" startIcon={<DeleteIcon />} color='error'>Delete</Button>
                                </Popconfirm>
                                <div>
                                  <EditDoctorScheduleModal message={val.schedule_id} />
                                </div>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      )
                    })
                  )
                  :
                  (
                    <Card elevation={10} style={{ marginTop: '2%' }}>
                      <CardContent>
                        <Typography color='error' fontWeight='bold'>No Schedule.</Typography>
                      </CardContent>
                    </Card>
                  )}
              {/* </Grid> */}
            </Grid>

          </Box>

        </Paper>
      </Grid>
       {/* -------------------------------------------------------------------------------------------------------------- */}
       <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Doctor Details Have Been Updated Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Doctor Details Have Not Been Updated Successfully!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
    </Grid>
  )
}
