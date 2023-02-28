import React, { useEffect } from 'react'
import '../Card.css';
import {
    Grid,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Skeleton
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import * as userLimitedAction from '../../../Redux/Actions/action';

const user_limited = [
    {
        user_name: 'James',
        user_city: 'Karachi',
        publish_time: '2022-03-16 14:33:46'
    },
    {
        user_name: 'Lily',
        user_city: 'Karachi',
        publish_time: '2022-02-26 14:33:46'
    },
    {
        user_name: 'Sarah',
        user_city: 'Karachi',
        publish_time: '2023-01-16 14:33:46'
    },
    {
        user_name: 'Daniel',
        user_city: 'Karachi',
        publish_time: '2022-12-1 14:33:46'
    },
    {
        user_name: 'Ali',
        user_city: 'Karachi',
        publish_time: '2022-06-20 14:33:46'
    },
]

export default function UserCard() {

    // const dispatch = useDispatch();
    // const { user_limited } = useSelector(state => state.user_limited);

    // useEffect(() => {
    //     dispatch(userLimitedAction.fetchLimitedUser());
    // }, [dispatch])

    let navigate = useNavigate();

    const printDate = (value) => {
        var today = new Date(value);
        const date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
        // console.log(date)
        return(
            // <ReactTimeAgo date={today} locale="en-US" timeStyle="round"/>
            <Typography variant='caption' fontWeight='bold' color='textSecondary'>{date}</Typography>
        );
    }

    return (
        <Grid container rowSpacing={3} columnSpacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper elevation={10} className='userCardPaperContainer' sx={{borderRadius:'1.5vh'}}>
                    <div className='userCardContainerHeader'>
                        <Typography variant='subtitle2' align='left' fontWeight='bold'>Recent Users</Typography>
                    </div>
                    <Table aria-label="simple table">
                        <TableHead className='userCardTableHeader'>
                            <TableRow>
                                <TableCell size='small' style={{ color:'gray', borderTopLeftRadius:'1vh' }}>Name</TableCell>
                                <TableCell size='small' style={{ color:'gray', borderTopRightRadius:'1vh' }}>City</TableCell>
                                <TableCell size='small' style={{ color:'gray', borderTopRightRadius:'1vh' }}>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user_limited.length ?
                                (
                                    user_limited.map((value, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell size='small' style={{ textTransform: 'capitalize', fontSize: 'small' }}>{value.user_name}</TableCell>
                                                <TableCell size='small' style={{ textTransform: 'capitalize', fontSize: 'small' }}>{value.user_city}</TableCell>
                                                <TableCell size='small' style={{ textTransform: 'capitalize', fontSize: 'small' }}>{printDate(value.publish_time)}</TableCell>
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
                    <Typography variant='caption' sx={{mt:'2%'}} color='textSecondary' className='userCardContainerHeaderText'
                        onClick={() => { navigate('user-records') }}>
                        View More
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}
