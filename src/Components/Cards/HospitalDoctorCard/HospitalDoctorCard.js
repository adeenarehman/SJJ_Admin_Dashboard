import React, { useEffect } from 'react'
import { Grid, Paper, Typography, Skeleton, Divider, Box } from '@mui/material'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import CountUp from 'react-countup';
// import { useDispatch, useSelector } from 'react-redux';
// import * as doctorCountAction from '../../../Redux/Actions/action';
// import * as hospitalCountAction from '../../../Redux/Actions/action';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HospitalDoctorCard() {

  // const dispatch = useDispatch();
  // const { hospital_count } = useSelector(state => state.hospital_count);
  // const { doctor_count } = useSelector(state => state.doctor_count);

  // useEffect(() => {
  //   dispatch(doctorCountAction.fetchDoctorCount());
  //   dispatch(hospitalCountAction.fetchHospitalCount());
  // }, [dispatch])

  const doctor_count = [{total_doctors: 8}];
  const hospital_count = [{total_hospitals: 9}]

  const doctors = doctor_count.map((value) => {
    return value.total_doctors
  });
  const hospitals = hospital_count.map((value) => {
    return value.total_hospitals
  });


  const options = {
    responsive: true,
    // offset:true,
    // maintainAspectRatio: false
  };

  const data = {
    labels: ['Doctors', 'Hospitals'],
    datasets: [
      {
        // label: '# of Votes',
        data: [doctors, hospitals],
        backgroundColor: [
          'rgba(0, 77, 64, 1)',
          'rgba(0, 137, 123, 1)',
        ],
        borderColor: [
          'rgba(0, 77, 64, 1)',
          'rgba(0, 137, 123, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    // console.log('online appointments: ', physical),
    <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={10} style={{ padding: '3%', borderRadius: '1vh' }}>
          <Typography variant='subtitle2' align='left' fontWeight='bold'>Doctors/Hospitals</Typography>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box sx={{ width:'80%'}}> 
                {doctors.length && hospitals.length ? (<Doughnut data={data} options={options}/>): (<Skeleton animation="pulse" variant="circular" height={220} width={220}/>)}
                </Box>
                  <Box sx={{width:'100%'}}><Divider variant="middle" sx={{my:'3%'}}/></Box>
                <Grid container>
                  <Grid item xs={6}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Doctors</Typography>
                    {doctors.length ? ( <Typography variant='caption' align='center'><CountUp end={doctors} duration={1} /></Typography>) : (<Skeleton animation="wave" variant='text' width={30} sx={{display:'flex', alignSelf:'center'}}/>)}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Hospitals</Typography>
                    {hospitals.length ? ( <Typography variant='caption' align='center'><CountUp end={hospitals} duration={1} /></Typography>) : (<Skeleton animation="wave" variant='text' width={30} sx={{display:'flex', alignSelf:'center'}}/>)}
                    </div>
                  </Grid>
                </Grid>
              </div>
          {/* {doctors.length && hospitals.length ?
            (
              <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box sx={{ width:'80%'}}> 
                  <Doughnut data={data} options={options}/>
                </Box>
                  <Box sx={{width:'100%'}}><Divider variant="middle" sx={{my:'3%'}}/></Box>
                <Grid container>
                  <Grid item xs={6}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Doctors</Typography>
                    
                    <Typography variant='caption' align='center'>{doctors}</Typography>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption' align='center' color='textSecondary'>Hospitals</Typography>
                    <Typography variant='caption' align='center'>{hospitals}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            )
            :
            (
              <div sx={{display:'flex', justifyContent: 'center', alignItems:'center', width:'100%'}}>
                <Skeleton animation="wave" variant="circular" height={100} width={100}/>
              </div>
            )
          } */}
        </Paper>
      </Grid>
    </Grid>
  )
}
