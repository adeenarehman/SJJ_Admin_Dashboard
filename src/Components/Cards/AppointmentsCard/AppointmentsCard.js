import React, { useEffect } from 'react'
import { Grid, Paper, Typography, Skeleton, Box, Divider } from '@mui/material'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import CountUp from 'react-countup';
// import { useDispatch, useSelector } from 'react-redux';
// import * as appointmentCountAction from '../../../Redux/Actions/action';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AppointmentsCard() {

  // const dispatch = useDispatch();
  // const { online_appointment_count } = useSelector(state => state.online_appointment_count);
  // const { physical_appointment_count } = useSelector(state => state.physical_appointment_count);
  // const { missed_count } = useSelector(state => state.missed_count);
  // const { completed_count } = useSelector(state => state.completed_count);
  // const { cancelled_count } = useSelector(state => state.cancelled_count);  
  // const { pending_count } = useSelector(state => state.pending_count);

  // useEffect(() => {
  //   dispatch(appointmentCountAction.fetchOnlineAppointmentCount());
  //   dispatch(appointmentCountAction.fetchPhysicalAppointmentCount());
  //   dispatch(appointmentCountAction.fetchMissedAppointmentCount());
  //   dispatch(appointmentCountAction.fetchCompletedAppointmentCount());
  //   dispatch(appointmentCountAction.fetchCancelledAppointmentCount());
  //   dispatch(appointmentCountAction.fetchPendingAppointmentCount());
  // }, [dispatch])

  const online_appointment_count = [{total_online_appointments: 5}];
  const physical_appointment_count = [{total_physical_appointments: 4}];
  const missed_count = [{total_missed: 1}];
  const completed_count = [{total_completed: 2}];
  const cancelled_count = [{total_cancelled: 2}];
  const pending_count = [{total_pending: 4}];

  const onlineAppointments = online_appointment_count.map((value) => {
    return value.total_online_appointments
  });
  const physicalAppointments = physical_appointment_count.map((value) => {
    return value.total_physical_appointments
  });
    const missed = missed_count.map((value) => {
    return value.total_missed
  });
  const completed = completed_count.map((value) => {
    return value.total_completed
  });
  const cancelled = cancelled_count.map((value) => {
    return value.total_cancelled
  });
    const pending = pending_count.map((value) => {
    return value.total_pending
  });

  const options = {
    responsive: true,
  };

  const data = {
    labels: ['Online', 'Physical'],
    datasets: [
      {
        // label: '# of Votes',
        data: [onlineAppointments, physicalAppointments],
        backgroundColor: [
          'rgba(0,113,197,1)',
          'rgba(13, 71, 161,1)',
        ],
        borderColor: [
          'rgba(0,113,197,1)',
          'rgba(13, 71, 161, 1)'
        ],
        borderWidth: 1.5,
      },
    ],
  };
  return (
    // console.log('online appointments: ', physical),
    <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={10} style={{ padding: '3%', borderRadius: '1vh' }}>
          <Typography variant='subtitle2' align='left' fontWeight='bold'>All Appointments</Typography>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box sx={{ width:'80%'}}> 
                {onlineAppointments.length && physicalAppointments ? (<Pie data={data} options={options}/>) : (<Skeleton animation="pulse" variant="circular" height={220} width={220}/>)}
                </Box>
                  <Box sx={{width:'100%'}}><Divider variant="middle" sx={{my:'3%'}}/></Box>
                <Grid container>
                  <Grid item xs={3}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Missed</Typography>
                    {/* <Typography variant='caption' align='center'>{missed}</Typography> */}
                    {missed.length ? ( <Typography variant='caption' align='center'><CountUp end={missed} duration={1} /></Typography>) : (<Skeleton animation="wave" variant='text' width={30} sx={{display:'flex', alignSelf:'center'}}/>)}

                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Completed</Typography>
                    {/* <Typography variant='caption' align='center'>{completed}</Typography> */}
                    {completed.length ? ( <Typography variant='caption' align='center'><CountUp end={completed} duration={1} /></Typography>) : (<Skeleton animation="wave" variant='text' width={30} sx={{display:'flex', alignSelf:'center'}}/>)}
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Pending</Typography>
                    {cancelled.length ? ( <Typography variant='caption' align='center'><CountUp end={cancelled} duration={1} /></Typography>) : (<Skeleton animation="wave" variant='text' width={30} sx={{display:'flex', alignSelf:'center'}}/>)}
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Cancelled</Typography>
                    {pending.length ? ( <Typography variant='caption' align='center'><CountUp end={pending} duration={1} /></Typography>) : (<Skeleton animation="wave" variant='text' width={30} sx={{display:'flex', alignSelf:'center'}}/>)}
                    </div>
                  </Grid>
                </Grid>
            </div>
          {/* {onlineAppointments && physicalAppointments ?
            (
              <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box sx={{ width:'80%'}}> 
                  <Pie data={data} options={options}/>
                </Box>
                  <Box sx={{width:'100%'}}><Divider variant="middle" sx={{my:'3%'}}/></Box>
                <Grid container>
                  <Grid item xs={3}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Missed</Typography>
                    <Typography variant='caption' align='center'>{missed}</Typography>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Completed</Typography>
                    <Typography variant='caption' align='center'>{completed}</Typography>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Pending</Typography>
                    <Typography variant='caption' align='center'>{cancelled}</Typography>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Cancelled</Typography>
                    <Typography variant='caption' align='center'>{pending}</Typography>
                    </div>
                  </Grid>
                </Grid>
            </div>
            )
            :
            (<><Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" /></>)
          } */}
        </Paper>
      </Grid>
    </Grid>
  )
}
