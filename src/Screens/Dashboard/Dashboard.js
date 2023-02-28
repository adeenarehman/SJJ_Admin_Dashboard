import React from 'react'
import {
  Grid
} from '@mui/material'
import StatsCard from '../../Components/Cards/StatsCard/StatsCard';
import AppointmentsCard from '../../Components/Cards/AppointmentsCard/AppointmentsCard';
import MedicalStoreCard from '../../Components/Cards/MedicalStoreCard/MedicalStoreCard';
import GraphCard from '../../Components/Cards/GraphCard/GraphCard';
import UserCard from '../../Components/Cards/UserCard/UserCard';
import HospitalDoctorCard from '../../Components/Cards/HospitalDoctorCard/HospitalDoctorCard';
import RecentAppointmentCard from '../../Components/Cards/RecentAppointmentCard/RecentAppointmentCard';
// import PhysicalAppointmentCard from '../../Components/Cards/PhysicalAppointmentCard/PhysicalAppointmentCard';
// import IntroCard from '../../Components/Cards/IntroCard/IntroCard';
// import HelloCard from '../../Components/Cards/HelloCard/HelloCard';
// import StatsCard2 from '../../Components/Cards/StatsCard/StatsCard2';

export default function Dashboard() {
  return (
    <Grid container rowSpacing={1} style={{ backgroundColor: 'none', height: '100%' }}>
      <Grid container direction={'row'} style={{ backgroundColor: 'none'}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <StatsCard />
          </Grid>
      </Grid>

      <Grid container rowSpacing={3} columnSpacing={3} direction={'row'}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <GraphCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={{ backgroundColor: 'none' }}>
          <HospitalDoctorCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={{ backgroundColor: 'none' }}>
          <AppointmentsCard />
        </Grid>
      </Grid>

      <Grid container rowSpacing={3} columnSpacing={3} direction={'row'}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4} style={{ backgroundColor: 'none' }}>
          <RecentAppointmentCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4} style={{ backgroundColor: 'none' }}>
          <MedicalStoreCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4} style={{ backgroundColor: 'none' }}>
          <UserCard />
        </Grid>
      </Grid>

    </Grid>
  )
}
