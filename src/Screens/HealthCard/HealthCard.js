import React from 'react'
import {
    Grid
} from '@mui/material'
import HealthCardTable from '../../Components/Tables/HealthCardTable/HealthCardTable'

export default function HealthCard() {
    return (
        <Grid container>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <HealthCardTable/>    
            </Grid>

        </Grid>
    )
}
