import React, { useEffect } from 'react'
import '../Card.css';
import { Grid, Card, Box, CardActionArea, CardContent, Typography, Skeleton } from '@mui/material'
import { purple, blue, orange, red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MedicalServicesTwoToneIcon from '@mui/icons-material/MedicalServicesTwoTone';
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { RiHomeSmileFill } from 'react-icons/ri';
import CountUp from 'react-countup';
// import { useDispatch, useSelector } from 'react-redux';
// import * as userCountAction from '../../../Redux/Actions/action';
// import * as pharmacyCountAction from '../../../Redux/Actions/action';
// import * as homeServiceCountAction from '../../../Redux/Actions/action';
// import * as medicineBookingCountAction from '../../../Redux/Actions/action';

export default function StatsCard() {

  // const dispatch = useDispatch();
  // const { user_count } = useSelector(state => state.user_count);
  // const { pharmacy_count } = useSelector(state => state.pharmacy_count);
  // const { home_service_count } = useSelector(state => state.home_service_count);
  // const { medicine_booking_count } = useSelector(state => state.medicine_booking_count);

  // useEffect(() => {
  //   dispatch(userCountAction.fetchUserCount());
  //   dispatch(pharmacyCountAction.fetchPharmacyCount());
  //   dispatch(homeServiceCountAction.fetchHomeServiceCount());
  //   dispatch(medicineBookingCountAction.fetchMedicineBookingCount());
  // }, [dispatch])

const user_count = [{total_users: 10}]
const pharmacy_count = [{total_stores: 5}]
const home_service_count = [{total_services: 6}]
const medicine_booking_count = [{total_medicines: 5}]

  const users = user_count.map((value) => {
    return value.total_users
  });

  const pharmacies = pharmacy_count.map((value) => {
    return value.total_stores
  });

  const services = home_service_count.map((value) => {
    return value.total_services
  });

  const medicines = medicine_booking_count.map((value) => {
    return value.total_medicines
  });

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


  return (
    // console.log('ye aya hosp data: ', services),
    <ThemeProvider theme={theme}>
      {/* USERS STATS */}
      <Grid container columnSpacing={3} rowSpacing={3} style={{ backgroundColor: 'none' }}>

        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ backgroundColor: 'none' }}>
          <Card elevation={10} sx={{ display: 'flex', borderRadius: '1.5vh' }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <CardContent>
                {users.length ?
                  (<Typography variant='h5' style={{ color: '#ba68c8', fontWeight: 'bolder' }}>
                    <CountUp end={users} duration={0.5} /></Typography>
                  )
                  :
                  (<Skeleton animation="wave" variant="text" />)}
                <Typography >Users</Typography>
              </CardContent>
              <Box className='statsCardUser' elevation={10} square>
                <SupervisorAccountTwoToneIcon color='primary' style={{ fontSize: '50' }} />
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        {/* HOME SERVICES STATS */}
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ backgroundColor: 'none' }}>
          <Card elevation={10} sx={{ display: 'flex', borderRadius: '1.5vh' }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <CardContent>
                {services.length ?
                  (<Typography variant='h5' style={{ color: '#6ac4de', fontWeight: 'bolder' }}>
                    <CountUp end={services} duration={0.5} /></Typography>
                  )
                  :
                  (<Skeleton animation="wave" variant="text" />)}
                <Typography >Home Services</Typography>
              </CardContent>
              {/* <CardContent> */}
              <Box className='statsCardHome' elevation={10} square>
                <RiHomeSmileFill color='#6ac4de' style={{ fontSize: '50' }} />
              </Box>
              {/* </CardContent> */}
            </CardActionArea>
          </Card>
        </Grid>

        {/* MEDICINE BOOKING STATS */}
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ backgroundColor: 'none' }}>
          <Card elevation={10} sx={{ display: 'flex', borderRadius: '1.5vh' }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <CardContent>
                {medicines.length ? (<Typography variant='h5' style={{ color: '#ffb74d', fontWeight: 'bolder' }}>
                  <CountUp end={medicines} duration={0.5} /></Typography>)
                  :
                  (<Skeleton animation="wave" variant="text" />)}
                <Typography variant='body1'>Medicine Booking</Typography>
              </CardContent>
              <Box className='statsCardMedicine' elevation={10} square>
                <ReceiptLongIcon color='third' style={{ fontSize: '50' }} />
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        {/* PHARMACY STATS */}
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ backgroundColor: 'none' }}>
          <Card elevation={10} sx={{ display: 'flex', borderRadius: '1.5vh' }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <CardContent>
                {pharmacies.length ? (<Typography variant='h5' style={{ color: '#e57373', fontWeight: 'bolder' }}>
                  <CountUp end={pharmacies} duration={0.5} /></Typography>)
                  :
                  (<Skeleton animation="wave" variant="text" />)}
                <Typography>Pharmacies</Typography>
              </CardContent>
              <Box className='statsCardStore' elevation={10} square>
                <MedicalServicesTwoToneIcon color='fourth' style={{ fontSize: '50' }} />
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </ThemeProvider>
  )
}
