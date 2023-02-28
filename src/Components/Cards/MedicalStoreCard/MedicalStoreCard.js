import React, { useEffect } from 'react'
import '../Card.css';
import {Grid, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, Skeleton} from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import * as pharmacyLimitedAction from '../../../Redux/Actions/action';


const pharmacy_limited = [
    {
        medical_store_name: 'Pharmacy',
        medical_store_contact: '--',
        medical_store_area: 'Defence',
      },
      {
        medical_store_name: 'Medicos',
        medical_store_contact: '--',
        medical_store_area: 'Landhi',
      },
      {
        medical_store_name: 'M. Mart',
        medical_store_contact: '--',
        medical_store_area: 'Clifton',
      },
      {
        medical_store_name: 'Grocery Store',
        medical_store_contact: '--',
        medical_store_area: 'North Nazimabad',
      },
      {
        medical_store_name: 'Mart',
        medical_store_contact: '--',
        medical_store_area: 'Gulshan',
      },
    ]

export default function UserCard() {

    // const dispatch = useDispatch();
    // const { pharmacy_limited } = useSelector(state => state.pharmacy_limited);

    // useEffect(() => {
    //     dispatch(pharmacyLimitedAction.fetchLimitedPharmacy());
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
                        <Typography variant='subtitle2' align='left' fontWeight='bold'>Pharmacies</Typography>
                    </div>
                    <Table aria-label="simple table">
                        <TableHead className='userCardTableHeader'>
                            <TableRow>
                                <TableCell size='small' style={{ color:'gray', borderTopLeftRadius:'1vh' }}>Name</TableCell>
                                <TableCell size='small' style={{ color:'gray', borderTopRightRadius:'1vh' }}>Contact</TableCell>
                                <TableCell size='small' style={{ color:'gray', borderTopRightRadius:'1vh' }}>Area</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pharmacy_limited.length ?
                                (
                                    pharmacy_limited.map((value, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell size='small' style={{ textTransform: 'capitalize', fontSize: 'small' }}>{value.medical_store_name}</TableCell>
                                                <TableCell size='small' style={{ textTransform: 'capitalize', fontSize: 'small' }}>{value.medical_store_contact}</TableCell>
                                                <TableCell size='small' style={{ textTransform: 'capitalize', fontSize: 'small' }}>{value.medical_store_area}</TableCell>
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
                        onClick={() => { navigate('pharmacies') }}>
                        View More
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}
