import React from 'react'
import {
    Grid
} from '@mui/material'
// import UsersTab from '../../Components/Tabs/UsersTab/UsersTab'
import UsersTable from '../../Components/Tables/UserTable/UserTable'

export default function UserRecords() {
    return (
        <Grid container style={{height:'100%'}}>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <UsersTable/>    
            </Grid>

        </Grid>
    )
}
