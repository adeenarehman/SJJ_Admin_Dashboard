import React from 'react'
import {
    Grid
} from '@mui/material'
import MedicineBookingTable from '../../Components/Tables/MedicineBookingTable/MedicineBookingTable'

export default function MedicineBookingRecords() {
  return (
    <Grid container style={{height:'100%'}}>

    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MedicineBookingTable/>    
    </Grid>

</Grid>
  )
}
