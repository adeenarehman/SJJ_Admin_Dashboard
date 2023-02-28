import React from 'react'
import {
    Grid
} from '@mui/material'
import HospitalTable from '../../Components/Tables/HospitalTable/HospitalTable'

export default function Hospitals() {
    return (
        <Grid container style={{height:'100%'}}>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <HospitalTable/>    
            </Grid>

        </Grid>
    )
}
