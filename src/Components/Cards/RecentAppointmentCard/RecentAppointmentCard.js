import React, { useEffect } from 'react';
import '../Card.css'
import { Grid, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, Skeleton, Chip } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import { Tag } from 'antd';
// import Tooltip from 'react-responsive-ui/commonjs/Tooltip'
// import PropTypes from 'prop-types'
// import 'react-time-ago/Tooltip.css'
// import { useDispatch, useSelector } from 'react-redux';
// import * as appointmentLimitedAction from '../../../Redux/Actions/action';

export default function OnlineAppointmentCard() {

    let navigate = useNavigate();

    // const dispatch = useDispatch();
    // const { appointment_limited } = useSelector(state => state.appointment_limited);

    // useEffect(() => {
    //     dispatch(appointmentLimitedAction.fetchLimitedAppointment());
    // }, [dispatch])

    const appointment_limited = [
        {
            patient_name: 'Jane Doe',
            booking_status_uid: 0,
            publish_time: '2022-03-16 14:33:46',
            status_name: 'Pending'
          },
          {
            patient_name: 'Johnny',
            booking_status_uid: 1,
            publish_time: '2022-02-26 14:33:46',
            status_name: 'Completed'
          },
          {
            patient_name: 'Sarah',
             booking_status_uid: 0,
             publish_time: '2023-01-16 14:33:46',
             status_name: 'Pending'
          },
          {
            patient_name: 'Lily',
            booking_status_uid: 3,
            publish_time: '2022-12-1 14:33:46',
            status_name: 'Cancelled'
          },
          {
            patient_name: 'Fatima',
            booking_status_uid: 2,
            publish_time: '2022-06-20 14:33:46',
            status_name: 'Missed'
          },
    ]

    const printTime = (value) => {
        var today = new Date(value);
        return(
            <ReactTimeAgo date={today} locale="en-US" timeStyle="round"/>
        );
    }

    return (
        <Grid container rowSpacing={3} columnSpacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <Paper elevation={10} className='recentAppointmentCardPaperContainer' sx={{borderRadius:'1.5vh'}}>
                    <div className='recentAppointmentCardContainerHeader'>
                    <Typography variant='subtitle2' align='left' fontWeight='bold'>Recent Appointments</Typography>
                    </div>
                    <Table aria-label="simple table">
                        <TableHead className='recentAppointmentCardTableHeader'>
                            <TableRow>
                                <TableCell size='small' style={{ color:'gray', borderTopLeftRadius:'1vh' }}>Patient</TableCell>
                                <TableCell size='small' style={{ color:'gray'}}>Status</TableCell>
                                <TableCell size='small' style={{ color:'gray',borderTopRightRadius:'1vh'}}>Last Viewed</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointment_limited.length ? 
                            (
                                appointment_limited.map((value, index) => {
                                    return(
                                        <TableRow key={index}>
                                            <TableCell size='small' style={{textTransform:'capitalize', fontSize:'small' }}>{value.patient_name}</TableCell>
                                            <TableCell size='small' style={{textTransform:'capitalize', fontSize:'small' }}>
                                                <div>
                                                    {value.booking_status_uid == 0 ?
                                                        (
                                                            // <Chip label="Pending" variant="filled" color="primary" size="small" />
                                                            <Tag color='blue' style={{borderRadius:'2vh'}}>{value.status_name}</Tag>
                                                        )
                                                        : value.booking_status_uid == 1 ?
                                                        (
                                                            // <Chip label="Completed" variant="filled" color="success" size="small" />
                                                            <Tag color='green' style={{borderRadius:'2vh'}}>{value.status_name}</Tag>
                                                        )
                                                        : value.booking_status_uid == 2 ?
                                                            (
                                                            // <Chip label="Missed" variant="filled" color="warning" size="small" />
                                                            <Tag color='orange' style={{borderRadius:'2vh'}}>{value.status_name}</Tag>
                                                            )
                                                            : value.booking_status_uid == 3 ?
                                                            (
                                                            // <Chip label="Cancelled" variant="filled" color="error" size="small" />
                                                            <Tag color='red' style={{borderRadius:'2vh'}}>{value.status_name}</Tag>
                                                            )
                                                            : console.log('null')
                                                    }
                                                    </div>
                                            </TableCell>
                                            <TableCell size='small' style={{textTransform:'capitalize', fontSize:'small', color:'grey', fontWeight:'bold'}}>{printTime(value.publish_time)}</TableCell>
                                        </TableRow>
                                        
                                    )
                                })  
                            ) 
                            : 
                            (
                                <>
                                <TableCell><Skeleton variant="text" /></TableCell><TableCell><Skeleton variant="text" /></TableCell><TableCell><Skeleton variant="text" /></TableCell>
                                </>
                            )
                            }
                            
                        </TableBody>
                    </Table>
                    <Typography variant='caption' sx={{mt:'2%'}} color='textSecondary' className='recentAppointmentCardContainerHeaderText'
                        onClick={() => { navigate('appointment-records') }}>
                        View More
                    </Typography>
                </Paper>

            </Grid>
        </Grid>
    )
}
