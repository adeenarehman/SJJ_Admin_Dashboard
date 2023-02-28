import React from 'react'
import {
    Grid
} from '@mui/material'
import MedicalTable from '../../Components/Tables/MedicalTable/MedicalTable'

export default function MedicalStores() {
    return (
        <Grid container style={{height:'100%'}}>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <MedicalTable/>    
            </Grid>

        </Grid>
    )
}
