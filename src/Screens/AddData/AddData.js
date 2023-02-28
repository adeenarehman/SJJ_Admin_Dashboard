import React from 'react'
import { Grid } from '@mui/material'
import AddDataTab from '../../Components/Tabs/AddDataTab/AddDataTab'

export default function AddData() {
  return (
    <Grid container style={{height:'100%'}}>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <AddDataTab/>    
            </Grid>

        </Grid>
  )
}
