import React from 'react'
import {
    Grid
} from '@mui/material'
import DoctorTable from '../../Components/Tables/DoctorTable/DoctorTable'

export default function Doctors() {
    return (
        <Grid container style={{height:'100%'}}>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <DoctorTable/>    
            </Grid>

        </Grid>
    )
}
