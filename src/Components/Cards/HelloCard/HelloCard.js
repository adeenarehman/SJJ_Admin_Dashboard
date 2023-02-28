import React from 'react'
import '../Card.css'
import {
    Grid,
    Paper,
    Typography
} from '@mui/material'
import AddPanelUserModal from '../../Modals/AddPanelUserModal/AddPanelUserModal'

export default function HelloCard() {
    return (
        <Grid container columnSpacing={1} rowSpacing={1} style={{ backgroundColor: 'none' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ backgroundColor: 'none' }}>
                {localStorage.getItem("User_Designation") == 1 ?
                    (
                        <Paper elevation={0} className='helloCardPaperContainer' style={{ backgroundColor: 'none' }}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography variant='h5' className={'helloCardName'}>Hello, {localStorage.getItem("User_First_Name")}</Typography>
                                </Grid>
                                {/* <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <AddPanelUserModal />
                                </Grid> */}
                            </Grid>
                        </Paper>
                    )
                    :
                    (
                        <Paper elevation={0} style={{ padding: '2%', backgroundColor: 'none' }}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography variant='h5' className={'helloCardName'}>Hello, {localStorage.getItem("User_First_Name")}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    )}

            </Grid>
        </Grid>
    )
}
