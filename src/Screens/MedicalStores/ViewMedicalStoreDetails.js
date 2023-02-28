import React, { useState, useEffect } from 'react'
// import './style.css'
import {
  Grid, Paper, Avatar, Typography, TextField, Breadcrumbs, Link, IconButton, Card, CardActionArea, CircularProgress
  , FormControlLabel, RadioGroup, Radio, FormControl, InputLabel, MenuItem, Select, CardContent, Button, Badge
} from '@mui/material'
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import * as specializationAction from '../../Redux/Actions/action';

export default function ViewMedicalStoreDetails() {

  const { id } = useParams();
  let navigate = useNavigate();

  //LOCADING STATE
  const [isLoading, setIsLoading] = useState(false);
  //UPDATE MODAL STATES
  const [doctorID, setDoctorID] = useState()
  const [editDocFirstName, setEditDocFirstName] = useState('');
  const [editDocLastName, setEditDocLastName] = useState('');
  const [docGender, setDocGender] = useState();
  //   const [editDocDegree, setEditDocDegree] = useState('');
  //   const [editDocExperience, setEditDocExperience] = useState();
  const [docDegree, setDocDegree] = useState('');
  const [docPmcNumber, setDocPmcNumber] = useState();
  const [docExperience, setDocExperience] = useState();
  const [docSpecialization, setDocSpecialization] = useState();

  //REDUX DATA GET
  const dispatch = useDispatch();
  const { specialization } = useSelector(state => state.specialization);

  useEffect(() => {
    dispatch(specializationAction.fetchSpecializations());
  }, [dispatch])

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
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  const StyledActiveBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const StyledInactiveBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#808080',
      color: '#808080',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const handleDocSpecializationChange = (event) => {
    setDocSpecialization(event.target.value)
  };

  const hospitalData = [
    { hospitalName: 'hello', hospitalContact: '54535435' },
    { hospitalName: 'bye', hospitalContact: '3543543' }
  ]

  const handleSubmit = (event) => {
    // console.log('jbadbjad')
    setIsLoading(true)
    event.preventDefault();
    // setDoctorData()
  };

  return (
    console.log('doctor details page uid: ', id),
    <Grid container rowSpacing={1} columnSpacing={1} style={{ height: '100%' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={10} style={{ padding:'1%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <div role="presentation" style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <IconButton size='small' color='inherit' onClick={() => { navigate('doctors') }}>
              <ArrowBackIcon />
            </IconButton>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" variant='caption' color="inherit" href="http://localhost:3000/dashboard">
                Dashboard
              </Link>
              <Typography variant='caption' color="text.primary">Doctors</Typography>
              <Typography variant='caption' color="text.primary">[MEdical Store Name]</Typography>
            </Breadcrumbs>
          </div>

          <Grid container style={{ width: '70%', padding: '1%' }}>
            <form onSubmit={handleSubmit} autoComplete="off" style={{ width: '100%' }}>
              {/* Avatar and some info container */}
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={{ padding: '1%', display: 'flex', justifyContent: 'center' }}>
                  <Avatar sx={{ width: 150, height: 150 }}></Avatar>
                  {/* {loggedIn == 1 ?
            (<StyledActiveBadge
              color='error'
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar {...stringAvatar(firstname)} />
            </StyledActiveBadge>)
            :
            (<StyledInactiveBadge
              color='info'
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar {...stringAvatar(params.value.firstname)} />
            </StyledInactiveBadge>)
          } */}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={9} xl={9} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                  <Typography>[Doctor First Name] [Doctor Last Name]</Typography>
                  <Typography>[Doctor Gender]</Typography>
                  <Typography>[Doctor PMC Number]</Typography>
                  <Typography>[Doctor Availability]</Typography>
                </Grid>
              </Grid>
              {/* Schedule Info */}
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: '2%' }}>
                  {/* FIRST NAME LAST NAME CONTAINER */}
                  <Grid container columnSpacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                      <Typography variant='body2' style={{ fontWeight: 'bold' }}>First Name: </Typography>
                      <TextField style={{ width: '100%' }} value={editDocFirstName} onChange={e => setEditDocFirstName(e.target.value)} size='small' label="First Name..." variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                      <Typography variant='body2' style={{ fontWeight: 'bold' }}>Last Name: </Typography>
                      <TextField style={{ width: '100%' }} value={editDocLastName} onChange={e => setEditDocLastName(e.target.value)} size='small' label="Last Name..." variant="filled" />
                    </Grid>
                  </Grid>
                  {/* GENDER & PMC NUMBER container */}
                  <Grid container columnSpacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                      <Typography variant='body2' style={{ fontWeight: 'bold' }}>Gender: </Typography>
                      <FormControl>
                        <RadioGroup row value={docGender} onChange={e => setDocGender(e.target.value)}>
                          <FormControlLabel value="1" control={<Radio size="small" />} label="Male" />
                          <FormControlLabel value="2" control={<Radio size="small" />} label="Female" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                      <Typography variant='body2' style={{ fontWeight: 'bold' }}>PMC Number: </Typography>
                      <TextField style={{ width: '100%' }} value={docPmcNumber} onChange={e => setDocPmcNumber(e.target.value)} size='small' label="PMC Number..." variant="filled" />
                    </Grid>
                  </Grid>
                  {/* DEGREE & SPECIALZIATION CONTAINER */}
                  <Grid container columnSpacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                      <Typography variant='body2' style={{ fontWeight: 'bold' }}>Degree: </Typography>
                      <TextField style={{ width: '100%' }} value={docDegree} onChange={e => setDocDegree(e.target.value)} size='small' label="Degree..." variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '2%' }}>
                      <Typography variant='body2' style={{ fontWeight: 'bold' }}>Specialization: </Typography>
                      <FormControl fullWidth size='small' variant="filled">
                        <InputLabel id="demo-simple-select-filled-label">Select Specialization....</InputLabel>
                        <Select size='small' value={docSpecialization} label="Specialization" onChange={handleDocSpecializationChange}>
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
                      <TextField style={{ width: '100%' }} value={docExperience} onChange={e => setDocExperience(e.target.value)} size='small' label="Experience..." variant="filled" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* Hospital Info */}
              <Grid container rowSpacing={1} columnSpacing={2} style={{ padding: '2%' }}>
                {hospitalData.map((val) => {
                  return (
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                      <Card elevation='5'>
                        <CardActionArea>
                          <CardContent>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                              <Avatar sx={{ width: 40, height: 40 }} />
                              <div>
                                <Typography variant="body1" sx={{ ml: '10%' }}>{val.hospitalName}</Typography>
                                <Typography color="textSecondary" variant="subtitle2" sx={{ ml: '10%' }}>{val.hospitalContact}</Typography>
                              </div>
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
                })}
              </Grid>
              {/* Button Container */}
              <Grid container style={{ padding: '2%', display: 'flex', justifyContent: 'center' }}>
                <Button type='submit' variant='contained'>
                  Update
                  {isLoading ?
                    <CircularProgress color="inherit" size={14} style={{
                      marginLeft: 10
                    }} /> : null
                  }
                </Button>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
