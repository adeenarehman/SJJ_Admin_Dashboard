import React, { useState, useEffect } from 'react';
import {
    Grid, DialogContent, DialogContentText, Select, TextField, MenuItem, FormControl, InputLabel, Alert, Snackbar,
    Box, Radio, RadioGroup, FormControlLabel, Button, CircularProgress, Typography, Dialog
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useDispatch, useSelector } from 'react-redux';
import * as schedulePostAction from '../../../Redux/Actions/action';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditDoctorScheduleModal(props) {

    // //SCHEDULE STATES
const [scheduleId, setScheduleId] = useState();

    const dispatch = useDispatch();
    const { post_doctor_schedule } = useSelector(state => state.post_doctor_schedule);
    const { single_schedule } = useSelector(state => state.single_schedule);
    const { loginId } = useSelector(state => state.loginId)


    useEffect(() => {
        dispatch(schedulePostAction.fetchSingleSchedule(scheduleId));
    }, [scheduleId])

    useEffect(() => {
        single_schedule.map((val) => {
            let tempObj = {
                doctorID: val.doctor_uid,
                hospitalID: val.hospital_uid,
                day: val.schedule_day,
                startTime: val.start_time,
                endTime: val.end_time,
                fees: val.fees,
                consultTime: val.consultation_time,
                shiftID: val.shift_id
            }
            setHospitalUid(tempObj.hospitalID);
            setDoctorUid(tempObj.doctorID);
            setDay(tempObj.day);
            setStartTime(tempObj.startTime);
            setEndTime(tempObj.endTime);
            setShift(tempObj.shiftID);
            setFees(tempObj.fees);
            setCounter(tempObj.consultTime)
        })
    }, [single_schedule])

    // //MENU STATES
    const [openModal, setOpenModal] = React.useState(false);
    //LOCADING STATE
    const [isLoading, setIsLoading] = useState(false);
    //Add Schedule States
    const [fees, setFees] = useState('')
    const [hospitalUid, setHospitalUid] = useState('')
    const [doctorUid, setDoctorUid] = useState('')
    const [shift, setShift] = useState('')
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [day, setDay] = useState("");
    const [counter, setCounter] = useState(5);
    const [availability, setAvailability] = useState(1)
    const [LoginUid, setLoginUid] = useState(localStorage.getItem('loginID'));
    const [publishTime, setPublishTime] = useState(Date());
    const [publishDate, setPublishDate] = useState(Date());
    // SNACKBAR STATES
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [state, setState] = React.useState({ open: false, vertical: 'top', horizontal: 'center', });
    const { vertical, horizontal, open } = state;

    // SNACKBAR SUCCESS FUNCTIONS
    const handleSuccessClick = () => { setOpenSuccess(true); };
    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') { return; }
        setState({ ...state, open: false });
        setOpenSuccess(false);
    };
    //  SNACKBAR ERROR FUNCTIONS
    const handleErrorClick = () => { setOpenError(true); };
    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') { return; }
        setState({ ...state, open: false });
        setOpenError(false);
    };

    //    
    const handleClickOpen = () => { setOpenModal(true); setScheduleId(props.message) }; {/** MODAL OPEN FUNCTION **/ }
    const handleClose = () => { setOpenModal(false); }; {/** MODAL CLOSE FUNCTION **/ }

    //  
    const incrementCounter = () => { {/** COUNTER INCREMENT FUNCTION **/ }
        {/* COUNTER INCREMENT FUNCTIONS */ }
        console.log('working')
        setCounter(counter + 5)
        console.log('counter ', counter)
    };
    const decrementCounter = () => { {/** COUNTER DECREMENT FUNCTION **/ }
        {/* COUNTER DECREMENT FUNCTIONS */ }
        console.log('working')
        setCounter(counter - 5)
        console.log('counter ', counter)
    };
 
    const handleShiftChange = (event) => { {/** SHIFT SET RADIO BUTTON FUNCTION **/ }
        setShift(event.target.value);
    };

    const handleDayChange = (event) => { {/** DAY DROPDOWN SET FUNCTION **/ }
        setDay(event.target.value)
    };

    const handleSubmit = (event) => { {/** FORM DATA SET FUNCTION **/ }
        setIsLoading(true)
        event.preventDefault();
        let userId = loginId

        dispatch(schedulePostAction.updateDoctorsSchedule(doctorUid, hospitalUid, day, startTime,
            endTime, shift, counter, availability, fees, userId, publishTime, publishDate));

        handleSuccessClick(); {/* Success SnackBar Function */ }
        setIsLoading(false)
    };

    return (
        // console.log('All data is hesre: ', startTime),
        <Grid container style={{ backgroundColor: 'none', width: '100%' }}>
            <Button size="small" startIcon={<EditIcon />} onClick={handleClickOpen} align='right'>
                Edit
            </Button>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <Dialog
                    // fullScreen={fullScreen}
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <Typography align='center' variant='h5' style={{ fontWeight: 'bold', padding: '2%' }}>
                        {"Add Doctor Schedule"}
                    </Typography>
                    <DialogContent>
                        <DialogContentText>
                            <form onSubmit={handleSubmit} autoComplete="off" style={{ width: '100%' }}>
                                <Grid container style={{ backgroundColor: 'none' }}>

                                    {/* DAYS CONTAINER */}
                                    <Grid container columnSpacing={1} style={{ marginTop: '2%' }}>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ backgroundColor: 'none' }}>
                                            <Typography variant='span' style={{ fontWeight: 'bold' }}>Day: </Typography>
                                            <FormControl fullWidth size='small' variant="outlined" style={{marginTop:'1%'}}>
                                                <InputLabel id="demo-simple-select-outlined-label">Select Day....</InputLabel>
                                                <Select
                                                
                                                    size='small'
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    label="Select Day..."
                                                    value={day}
                                                    onChange={handleDayChange}
                                                >
                                                    <MenuItem value={'0'}>Monday</MenuItem>
                                                    <MenuItem value={'1'}>Tuesday</MenuItem>
                                                    <MenuItem value={'2'}>Wednesday</MenuItem>
                                                    <MenuItem value={'3'}>Thursday</MenuItem>
                                                    <MenuItem value={'4'}>Friday</MenuItem>
                                                    <MenuItem value={'5'}>Saturday</MenuItem>
                                                    <MenuItem value={'6'}>Sunday</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    {/* TIME CONTAINER */}
                                    <Grid container columnSpacing={1} style={{ marginTop: '2%' }}>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{ backgroundColor: 'none', marginBottom: '2%' }}>
                                            <Typography variant='span' style={{ fontWeight: 'bold' }}>From: </Typography>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <TimePicker
                                                style={{marginTop:'1%'}}
                                                    label="From..."
                                                    openTo="hours"
                                                    views={['hours', 'minutes']}
                                                    inputFormat="HH:mm"
                                                    mask="__:__"
                                                    showToolbar= {true}
                                                    ampmInClock={true}
                                                    value={startTime}
                                                    onChange={(newValue) => {setStartTime(newValue);}}
                                                    renderInput={(params) => <TextField {...params} size='small' fullWidth variant='outlined' />}
                                                />
                                            </LocalizationProvider>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{ backgroundColor: 'none', marginBottom: '2%' }}>
                                            <Typography variant='span' style={{ fontWeight: 'bold' }}>To: </Typography>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <TimePicker
                                                style={{marginTop:'1%'}}
                                                    label="To...."
                                                    openTo="hours"
                                                    views={['hours', 'minutes']}
                                                    inputFormat="HH:mm"
                                                    mask="__:__"
                                                    ampmInClock={true}
                                                    value={endTime}
                                                    onChange={(newValue) => {
                                                        setEndTime(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} size='small' fullWidth variant='outlined' />}
                                                />
                                            </LocalizationProvider>
                                        </Grid>
                                    </Grid>
                                    {/* SHIFT CONTAINER */}
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <FormControl>
                                                <Typography variant='span' style={{ fontWeight: 'bold' }}>Shift: </Typography>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                    onChange={handleShiftChange}
                                                    value={shift}
                                                >
                                                    <FormControlLabel value="0" size="small" control={<Radio size="small" checked={shift == '0'} />} label="Morning" />
                                                    <FormControlLabel value="1" size="small" control={<Radio size="small" checked={shift == '1'} />} label="Afternoon" />
                                                    <FormControlLabel value="2" size="small" control={<Radio size="small" checked={shift == '2'} />} label="Evening" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    {/* FEES CONTAINER &CONSULTATION TIME */}
                                    <Grid container columnSpacing={1}>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Typography variant='span' style={{ fontWeight: 'bold' }}>Fees: </Typography>
                                            <TextField style={{ width: '100%', marginTop:'1%' }} value={fees} onChange={e => setFees(e.target.value)} size='small' id="outlined-basic" label="Enter Fees..." variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Typography variant='span' style={{ fontWeight: 'bold' }}>Consultation Time: </Typography>
                                            <Box style={{ display: 'flex', flexDirection: 'row', height: '6vh', width: '100%' }}>
                                                <Button type='reset' onClick={() => { decrementCounter() }} disabled={counter == 5 ? (true) : (false)} variant='contained' color='inherit'
                                                    style={{ width: '20%' }}>-</Button>
                                                <div style={{ width: '70%', border: '0.1vh solid lightGrey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    {counter}
                                                </div>
                                                <Button type='reset' onClick={() => { incrementCounter() }} disabled={counter == 20 ? (true) : (false)} variant='contained' color='inherit'
                                                    style={{ width: '20%' }}>+</Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%', marginBottom: '3%' }}>
                                    <Button type='submit' variant='contained'>
                                        Save
                                        {isLoading ?
                                            <CircularProgress color="inherit" size={14} style={{
                                                marginLeft: 10
                                            }} /> : null
                                        }
                                    </Button>
                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </Grid>
            {/* -------------------------------------------------------------------------------------------------------------- */}
            <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
                <Alert severity="success" variant='outlined' onClose={handleSuccessClose}>Doctor Has Been Added Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='outlined' onClose={handleErrorClose}>Doctor Has Not Been Added!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
        </Grid>
    );
};