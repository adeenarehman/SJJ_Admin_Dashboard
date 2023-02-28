import React, {useEffect, useState} from 'react'
import { Grid, Paper, Skeleton } from '@mui/material'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, 
  Filler,Legend } from 'chart.js';
import {Line} from "react-chartjs-2";
import { useDispatch, useSelector } from 'react-redux';
import * as MonthlyDataAction from '../../../Redux/Actions/action';
import * as MonthlyHospitalAction from '../../../Redux/Actions/action';
import * as MonthlyPharmacyAction from '../../../Redux/Actions/action';
import * as MonthlyUserAction from '../../../Redux/Actions/action';
import * as MonthlyServiceAction from '../../../Redux/Actions/action';
import * as MonthlyMedicineAction from '../../../Redux/Actions/action';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Filler, Legend, Tooltip, Title);

export default function GraphCard() {

  const dispatch = useDispatch();
  // const { monthly_doctor } = useSelector(state => state.monthly_doctor);
  // const { monthly_hospital } = useSelector(state => state.monthly_hospital);
  // const { monthly_pharmacy } = useSelector(state => state.monthly_pharmacy);
  // const { monthly_user } = useSelector(state => state.monthly_user);
  // const { monthly_medicine_booking } = useSelector(state => state.monthly_medicine_booking);
  // const { monthly_home_service } = useSelector(state => state.monthly_home_service);

  useEffect(() => {
    dispatch(MonthlyDataAction.fetchMonthlyDoctorCount());
    dispatch(MonthlyDataAction.fetchMonthlyHospitalCount());
    dispatch(MonthlyDataAction.fetchMonthlyPharmacyCount());
    dispatch(MonthlyDataAction.fetchMonthlyUserCount());
    dispatch(MonthlyDataAction.fetchMonthlyHomeServiceCount());
    dispatch(MonthlyDataAction.fetchMonthlyMedicineBookingCount());
  }, [dispatch])

  const monthly_doctor = [
    {
      doctors_date: '01',
      doctors_count: 0
    },
    {
      doctors_date: '02',
      doctors_count: 1
    },
    {
      doctors_date: '03',
      doctors_count: 2
    },
    {
      doctors_date: '04',
      doctors_count: 5
    },
  ]
  const monthly_hospital = [
    {
      doctors_date: '01',
      hospitals_count: 2
    },
    {
      doctors_date: '02',
      hospitals_count: 1
    },
    {
      doctors_date: '03',
      hospitals_count: 4
    },
    {
      doctors_date: '04',
      hospitals_count: 2
    },
  ]
  const monthly_pharmacy = [
    {
      doctors_date: '01',
      pharmacy_count: 0
    },
    {
      doctors_date: '02',
      pharmacy_count: 0
    },
    {
      doctors_date: '03',
      pharmacy_count: 3
    },
    {
      doctors_date: '04',
      pharmacy_count: 2
    },
  ]
  const monthly_user = [
    {
      doctors_date: '01',
      users_count: 5
    },
    {
      doctors_date: '02',
      users_count: 2
    },
    {
      doctors_date: '03',
      users_count: 1
    },
    {
      doctors_date: '04',
      users_count: 2
    },
  ]
  const monthly_home_service = [
    {
      doctors_date: '01',
      services_count: 0
    },
    {
      doctors_date: '02',
      services_count: 0
    },
    {
      doctors_date: '03',
      services_count: 2
    },
    {
      doctors_date: '04',
      services_count: 4
    },
  ]
  const monthly_medicine_booking = [
    {
      doctors_date: '01',
      medicines_count: 0
    },
    {
      doctors_date: '02',
      medicines_count: 1
    },
    {
      doctors_date: '03',
      medicines_count: 1
    },
    {
      doctors_date: '04',
      medicines_count: 3
    },
  ]

  const doctor = monthly_doctor.map((value1) => {
    return (value1.doctors_date, value1.doctors_count)
  });
 const hospital = monthly_hospital.map((value2) => {
    return (value2.hospitals_count)
  });
  const pharmacy = monthly_pharmacy.map((value3) => {
    return (value3.pharmacy_count)
  });
  const user = monthly_user.map((value4) => {
    return ( value4.users_count )
  });
  const homeservice = monthly_home_service.map((value5) => {
    return (value5.services_count)
  });
  const medicinebooking = monthly_medicine_booking.map((value5) => {
    return (value5.medicines_count)
  });

   const options = {
    type: 'line',
    responsive: true,
    
  };

  
  const data = {
    labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Sept', 'Oct', 'Nov', 'Dec'],

    datasets: [
      {
        // fill: true,
        label: 'Doctor',
        data: doctor,
        borderColor: 'rgb(40, 116, 166)',
        backgroundColor: 'rgba(40, 116, 166, 0.5)',
      },
      {
        // fill: true,
        label: 'Hospital',
        data: hospital,
        borderColor: '#D68910',
        backgroundColor: 'rgba(214, 137, 16, 0.5)',
      },
      {
        // fill: true,
        label: 'User',
        data: user,
        borderColor: '#239B56',
        backgroundColor: 'rgba(	35, 155, 86, 0.5)',
      },
      {
        // fill: true,
        label: 'Pharmacy',
        data: pharmacy,
        borderColor: 'rgb(118,68,138)',
        backgroundColor: 'rgba(118, 68, 138, 0.5)',
      },
      {
        // fill: true,
        label: 'Home Service',
        data: homeservice,
        borderColor: '#e57373',
        backgroundColor: 'rgba(229, 115, 115, 0.5)',
      },
      {
        // fill: true,
        label: 'Medicine Booking',
        data: medicinebooking,
        borderColor: '#fac7a3',
        backgroundColor: 'rgba(	250, 199, 163, 0.5)',
      },
    ],
  };

    return (
      // console.log('ye hua print: ', doctor),
        <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper elevation={10} style={{padding:'3%', borderRadius:'1vh'}}>
                {/* <Typography variant='body1' align='left' style={{fontWeight:'bolder', color:'#4f5ace', fontFamily:'Robotto'}}>All Appointments</Typography> */}
                {/* {doctor && hospital && pharmacy && user && homeservice && medicinebooking ? 
                (<Line data={data} options={options}/>)
                : 
                (<><Skeleton variant="text" /> 
                <Skeleton variant="text"  /> 
                <Skeleton variant="text"  /></>) 
                } */}
                <Line data={data} options={options}/>
                </Paper>
            </Grid>
        </Grid>
    )
}
