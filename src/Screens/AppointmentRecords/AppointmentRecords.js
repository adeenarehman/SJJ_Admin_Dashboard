import React from 'react'
import {
    Grid
} from '@mui/material'
import AppointmentTab from '../../Components/Tabs/AppointmentTab/AppointmentTab'

export default function AppointmentRecords() {
    return (
        <Grid container>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <AppointmentTab/>    
            </Grid>

        </Grid>
    )
}
