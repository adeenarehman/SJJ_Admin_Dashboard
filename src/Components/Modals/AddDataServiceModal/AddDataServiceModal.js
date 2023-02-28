import React, { useState, useEffect } from 'react'
import {
    Grid, Button, TextField, DialogActions, DialogContent, DialogContentText, useMediaQuery, FormControl, Alert, Snackbar,
    InputLabel, Select, MenuItem, CircularProgress, Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import * as hospitalAction from '../../../Redux/Actions/action';
// import * as servicePostAction from '../../../Redux/Actions/action';

export default function AddServiceModal() {
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

        //REDUX DATA GET
        // const dispatch = useDispatch();
        // const { hospital } = useSelector(state => state.hospital);
        // const { post_service } = useSelector(state => state.post_service);
    
        // useEffect(() => {
        //     dispatch(hospitalAction.fetchHospitals());
        // }, [dispatch])

    //LOCADING STATE
    const [isLoading, setIsLoading] = useState(false);
    //ADD MODAL STATES
    const [serviceName, setServiceName] = useState('');
    const [serviceHospital, setServiceHospital] = useState();
    const [publishTime, setPublishTime] = useState(Date());
    const [publishDate, setPublishDate] = useState(Date());
     // SNACKBAR STATES
     const [openSuccess, setOpenSuccess] = React.useState(false);
     const [openError, setOpenError] = React.useState(false);
     const [state, setState] = React.useState({ open: false, vertical: 'top', horizontal: 'center', });
     const { vertical, horizontal, open } = state;
 
     const handleSuccessClick = () => {setOpenSuccess(true);}; {/** SNACKBAR SUCCESS FUNCTION **/}
     const handleSuccessClose = (event, reason) => { {/** SNACKBAR SUCCESS FUNCTION **/}
         if (reason === 'clickaway') {
             return;
         }
         setState({ ...state, open: false });
         setOpenSuccess(false);
     };
 
     const handleErrorClick = () => {setOpenError(true);}; {/** SNACKBAR ERROR FUNCTION **/}
     const handleErrorClose = (event, reason) => { {/** SNACKBAR ERROR FUNCTION **/}
         if (reason === 'clickaway') {
             return;
         }
         setState({ ...state, open: false });
         setOpenError(false);
     };

    //  
    const handleHospitalChange = (event) => { {/** HOSPITAL DROPDOWN SET FUNCTION **/}
        setServiceHospital(event.target.value)
    };

    const handleSubmit = (event) => { {/** FORM DATA SET  FUNCTION **/}
        setIsLoading(true)
        event.preventDefault();

       
        // dispatch(servicePostAction.postServices(serviceName,serviceHospital,publishTime, publishDate));

        handleSuccessClick(); {/* Success SnackBar Function */ }
        
        setIsLoading(false)
    };

    return (
        <Grid container style={{ backgroundColor: 'none', width: '100%' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <Typography align='center' variant='h5' style={{fontWeight: 'bold'}}>
                    {"Add Services"}
                </Typography>
                <form onSubmit={handleSubmit} autoComplete="off" style={{ backgroundColor: 'none' }}>
                    <DialogContent >
                        <DialogContentText style={{ backgroundColor: 'none' }}>
                            <Grid container style={{ backgroundColor: 'none' }}>
                                {/* NAME AND HOSPITAL CONTAINER */}
                                <Grid container columnSpacing={1} style={{ backgroundColor: 'none' }}>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Service Name: </Typography>
                                        <TextField style={{ width: '100%' }} 
                                            value={serviceName} 
                                            onChange={e => setServiceName(e.target.value)} 
                                            size='small' id="outlined-basic" 
                                            label="Enter Service Name..." 
                                            variant="filled" 
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Hospital: </Typography>
                                            <TextField style={{ width: '100%' }} value={serviceHospital} onChange={e => setServiceHospital(e.target.value)} size='small' id="outlined-basic" label="Enter Hospital..." variant="filled" />
                                        </Grid>
                                    {/* <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Hospital: </Typography> 
                                        <FormControl fullWidth size='small' variant="filled">
                                        <InputLabel id="demo-simple-select-filled-label">Select Hospital....</InputLabel>
                                            <Select
                                                size='small'
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={serviceHospital}
                                                onChange={handleHospitalChange}
                                                label="Select Hospital...."
                                            >
                                                {hospital.map((val) => {
                                                    return (
                                                        <MenuItem value={val.hospital_id}>{val.hospital_name}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid> */}
                                </Grid>
                                {/* IMAGE UPLOAD CONTAINER */}
                                <Grid container style={{ marginTop:'2%' }}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ backgroundColor: 'none' }}>
                                        <input type='file' multiple accept='image/*' />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'none' }}>
                        <Button type='submit' variant='contained'>
                            Save
                            {isLoading ?
                                <CircularProgress color="inherit" size={14} style={{
                                    marginLeft: 10
                                }} /> : null
                            }
                        </Button>
                    </DialogActions>
                </form>
            </Grid>
            {/* -------------------------------------------------------------------------------------------------------------- */}
            <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Service Has Been Added Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Service Has Not Been Added!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
        </Grid>
    )
}
