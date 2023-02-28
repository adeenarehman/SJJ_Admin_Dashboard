import React, {useState, useEffect} from 'react'
import '../Card.css';
import {
  Grid,
  Card,
  Box,
  CardActionArea,
  CardContent,
  Typography,
  Skeleton 
} from '@mui/material'
import { purple, blue, orange, red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import DomainAddTwoToneIcon from '@mui/icons-material/DomainAddTwoTone';
import MedicalServicesTwoToneIcon from '@mui/icons-material/MedicalServicesTwoTone';
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';
import { RiHomeSmileFill } from 'react-icons/ri';
import { FaBookMedical } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import * as doctorCountAction from '../../../Redux/Actions/action';
// import * as hospitalCountAction from '../../../Redux/Actions/action';
// import * as userCountAction from '../../../Redux/Actions/action';
// import * as medicalCountAction from '../../../Redux/Actions/action';

export default function StatsCard2() {

  // const dispatch = useDispatch();
  //   const { doctorscount } = useSelector(state => state.doctorcount);
  //   const { hospitalscount } = useSelector(state => state.hospitalcount);
  //   const { userscount } = useSelector(state => state.usercount);
  //   const { medicalscount } = useSelector(state => state.medicalcount);

  //   useEffect(() => {
  //       dispatch(doctorCountAction.fetchDoctorsCount());
  //     }, [dispatch])
      
  //     // const dispatch = useDispatch();
      
  //     useEffect(() => {
  //     dispatch(hospitalCountAction.fetchHospitalsCount());
  //   }, [dispatch])
    
  //   // const dispatch = useDispatch();
    
  //   useEffect(() => {
  //     dispatch(userCountAction.fetchUsersCount());
  //   }, [dispatch])
    
  //   // const dispatch = useDispatch();
    
  //   useEffect(() => {
  //     dispatch(medicalCountAction.fetchMedicalsCount());
  //   }, [dispatch])

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[300],
      },
      secondary: {
        // This is green.A700 as hex.
        main: blue[300],
            
      },
      third: {
        main: orange[300], 
      },
      fourth: {
        main: red[300] 
      }
    },
  });

  const [totaldocData, setTotalDocData] = useState([]);
  const [totalhospData, setTotalHospData] = useState([]);
  const [totaluserData, setTotalUserData] = useState([]);
  const [totalmedData, setTotalMedData] = useState([]);

  useEffect(() => {
    getTotalDoctorData();
    getTotalHospitalData();
    getTotalUserData();
    getTotalMedicalData();
  }, [])
  

  const getTotalDoctorData = () => {
    const headers = {"Content-type": 'aaplication/x-www-form-urlencoded', "Access-Control-Allow-Origin":"*"
  , "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", "Accept": 'application/json'
  }
    fetch('http://localhost:3001/get/doctor/count')
    .then((res) => res.json())
            .then((json) => {
              setTotalDocData(json)
            })
  }

  const getTotalHospitalData = () => {
    const headers = {"Content-type": 'aaplication/x-www-form-urlencoded', "Access-Control-Allow-Origin":"*"
  , "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", "Accept": 'application/json'
  }
    fetch('http://localhost:3001/get/hospital/count')
    .then((res) => res.json())
            .then((json) => {
              setTotalHospData(json)
            })
  }

  const getTotalUserData = () => {
    const headers = {"Content-type": 'aaplication/x-www-form-urlencoded', "Access-Control-Allow-Origin":"*"
  , "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", "Accept": 'application/json'
  }
    fetch('http://localhost:3001/get/user/count')
    .then((res) => res.json())
            .then((json) => {
              setTotalUserData(json)
            })
  }

  const getTotalMedicalData = () => {
    const headers = {"Content-type": 'aaplication/x-www-form-urlencoded', "Access-Control-Allow-Origin":"*"
  , "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", "Accept": 'application/json'
  }
    fetch('http://localhost:3001/get/medical/count')
    .then((res) => res.json())
            .then((json) => {
                setTotalMedData(json)
            })
  }

  const doctors = totaldocData.map((value) => {
    return value.doc_num
  });

  const hospitals = totalhospData.map((value) => {
    return value.hosp_num
  });

  const users = totaluserData.map((value) => {
    return value.user_num
  });

  const stores = totalmedData.map((value) => {
    return value.med_num
  })

  return (
    // console.log('ye aya hosp data: ', doctors[0]),
    <ThemeProvider theme={theme}>
    <Grid container columnSpacing={1} rowSpacing={1} style={{ backgroundColor: 'none' }}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{ backgroundColor: 'none' }}>
          <Card elevation={10} sx={{ display: 'flex', borderRadius:'2vh'}}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                <CardContent>
                  {doctors ? (<Typography variant='h5' style={{color:'#ba68c8', fontWeight:'bolder'}}>{doctors}</Typography>) : (<Skeleton animation="wave" variant="text"/>)}
                  {/* {doctors ? (<CircularProgress color="primary" />) : (<Typography variant='h4'>{doctors}</Typography>)} */}
                  {/* <Typography variant='h4'>{doctors}</Typography> */}
                  <Typography >Home Services</Typography>
                </CardContent>
                {/* <CardContent> */}
                <Box className='statsCardDoctor' elevation={10} square>
                  <RiHomeSmileFill color='#ba68c8' style={{fontSize:'50'}}/>
                  </Box>
                {/* </CardContent> */}
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{ backgroundColor: 'none' }}>
          <Card elevation={10} sx={{ display: 'flex', borderRadius:'2vh' }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                <CardContent>
                  {/* <Typography variant='h4'>{hospitals}</Typography> */}
                  {hospitals ? (<Typography variant='h5' style={{color:'#68b7f6', fontWeight:'bolder'}}>{hospitals}</Typography>) : (<Skeleton animation="wave" variant="text"/>)}
                  <Typography variant='body1'>Medicine Booking</Typography>
                </CardContent>
                <Box className='statsCardHospital' elevation={10} square>
                  <FaBookMedical color='#68b7f6' style={{fontSize:'50'}}/>
                </Box>
            </CardActionArea>
          </Card>
        </Grid>
    </Grid>
    </ThemeProvider>
  )
}
