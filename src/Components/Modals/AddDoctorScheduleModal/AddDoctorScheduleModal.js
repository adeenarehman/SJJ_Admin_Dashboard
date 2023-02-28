import React, { useState, useEffect } from 'react';
import {
    Grid, DialogContent, DialogContentText, Select, TextField, MenuItem, FormControl, InputLabel, Alert, Snackbar,
    Box, Radio, RadioGroup, FormControlLabel, Button, CircularProgress, Typography
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { useDispatch, useSelector } from 'react-redux';
// import * as recentDoctorAddedAction from '../../../Redux/Actions/action';
// import * as doctorSchedulePostAction from '../../../Redux/Actions/action';

export default function AddDoctorScheduleModal() {

    // const dispatch = useDispatch();
    // const { doc_insert_id } = useSelector(state => state.doc_insert_id)
    // const { loginId } = useSelector(state => state.loginId)
    // const { recent_added_doctor } = useSelector(state => state.recent_added_doctor);
    // const { post_doctor_schedule } = useSelector(state => state.post_doctor_schedule);

    // useEffect(() => {
    //     dispatch(recentDoctorAddedAction.fetchRecentAddedDoctor(doc_insert_id));
    // }, [dispatch])

    // useEffect(() => {
    //     recent_added_doctor.map((val) => {
    //         let tempObj = {
    //             doctorID: val.doctor_id,
    //             hospitalID: val.hospital_uid,
    //         }
    //         setHospitalUid(tempObj.hospitalID);
    //         setDoctorUid(tempObj.doctorID);
    //     })
    // }, [recent_added_doctor])

    //LOCADING STATE
    const [isLoading, setIsLoading] = useState(false);
    // Counter State
    const [counter, setCounter] = useState(5);
    //Add Schedule States
    const [fees, setFees] = useState('')
    const [hospitalUid, setHospitalUid] = useState('')
    const [doctorUid, setDoctorUid] = useState('')
    const [shift, setShift] = useState('')
    const [startTime, setStartTime] = useState(new Date())
    const [endTime, setEndTime] = useState(new Date())
    const [day, setDay] = useState("");
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
     const handleSuccessClick = () => {setOpenSuccess(true);};
     const handleSuccessClose = (event, reason) => {
         if (reason === 'clickaway') {return;}
         setState({ ...state, open: false });
         setOpenSuccess(false);
     };
    //  SNACKBAR ERROR FUNCTIONS
     const handleErrorClick = () => {setOpenError(true);};
     const handleErrorClose = (event, reason) => {
         if (reason === 'clickaway') {return;}
         setState({ ...state, open: false });
         setOpenError(false);
     };
 
    //  
    const incrementCounter = () => { {/* COUNTER INCREMENT FUNCTIONS */}
        console.log('working')
        setCounter(counter + 5)
        console.log('counter ',counter)
    };
    const decrementCounter = () => { {/* COUNTER DECREMENT FUNCTIONS */}
        console.log('working')
        setCounter(counter - 5)
        console.log('counter ',counter)
    };

    // 
    const handleShiftChange = (event) => {  {/* SCHEDULE SHIFT SET DATA */}
        setShift(event.target.value);
    };

    const handleDayChange = (event) => { {/* SCHEDULE DAY Dropdown Set data */}
        setDay(event.target.value)
    };

    const handleSubmit = (event) => { {/* FORM DATA SET FUNCTION */}
        setIsLoading(true)
        event.preventDefault();
        // let userId = loginId

        if (day == null && day == '') {
            alert('select Day')
        }
        //  else if (startTime == '') {
        //     alert('Enter Start Time')
        // } else if (endTime == '' && endTime == null) {
        //     alert('Enter End Time')
        // }
        else if (shift == null && shift == '') {
            alert('Select Shift')
        } else if (!fees.trim()) {
            alert('Enter Fees')
        } else if (counter == null) {
            alert('set Counter')
        } 
        // else if (!doctorUid.trim() && !hospitalUid.trim()) {
        //     alert('You Have not Added Any New Doctor')
        // } 
        else { 
        // dispatch(doctorSchedulePostAction.postDoctorsSchedule(doctorUid, hospitalUid, day, startTime.toLocaleTimeString(), 
        // endTime.toLocaleTimeString(), shift, counter, availability, fees, userId,publishTime, publishDate));

        handleSuccessClick(); {/* Success SnackBar Function */ }
        setIsLoading(false)
        }
    };

    return (
        // console.log('All data is here: ', doc_insert_id),
        <Grid container style={{ backgroundColor: 'none', width: '100%' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <Typography align='center' variant='h5' style={{ fontWeight: 'bold' }}>
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
                                        <FormControl fullWidth size='small' variant="filled" required>
                                            <InputLabel id="demo-simple-select-filled-label">Select Day....</InputLabel>
                                            <Select
                                                size='small'
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                label="Select Specialization....."
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
                                            <TimePicker required
                                                label="Enter Start Time..."
                                                openTo="hours"
                                                views={['hours', 'minutes']}
                                                inputFormat="HH:mm"
                                                mask="__:__"
                                                ampmInClock={true}
                                                value={startTime}
                                                onChange={(newValue) => {
                                                    setStartTime(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} size='small' fullWidth variant='filled' />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{ backgroundColor: 'none', marginBottom: '2%' }}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>To: </Typography>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <TimePicker required
                                                label="Enter End Time"
                                                openTo="hours"
                                                views={['hours', 'minutes']}
                                                inputFormat="HH:mm"
                                                mask="__:__"
                                                ampmInClock={true}
                                                value={endTime}
                                                onChange={(newValue) => {
                                                    setEndTime(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} size='small' fullWidth variant='filled' />}
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
                                                required
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                onChange={handleShiftChange}
                                                value={shift}
                                            >
                                                <FormControlLabel value="morning" size="small" control={<Radio size="small" />} label="Morning" />
                                                <FormControlLabel value="afternoon" size="small" control={<Radio size="small" />} label="Afternoon" />
                                                <FormControlLabel value="evening" size="small" control={<Radio size="small" />} label="Evening" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                {/* FEES CONTAINER &CONSULTATION TIME */}
                                <Grid container columnSpacing={1}>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Fees: </Typography>
                                        <TextField style={{ width: '100%' }} required value={fees} onChange={e => setFees(e.target.value)} size='small' id="outlined-basic" label="Enter Fees..." variant="filled" />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Consultation Time: </Typography>
                                        <Box style={{display:'flex', flexDirection:'row', height:'6vh', width:'100%'}}> 
                                            <Button type='reset' onClick={()=>{decrementCounter()}} disabled={counter==5?(true):(false)} variant='contained' color='inherit'
                                            style={{width:'20%'}}>-</Button>
                                            <div style={{width:'70%', border:'0.1vh solid lightGrey', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                                {counter}
                                            </div>
                                            <Button type='reset' onClick={()=>{incrementCounter()}} disabled={counter==20?(true):(false)} variant='contained' color='inherit' 
                                            style={{width:'20%'}}>+</Button>
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

            </Grid>
            {/* -------------------------------------------------------------------------------------------------------------- */}
            <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Doctor Schedule Has Been Added Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Doctor Schedule Has Not Been Added!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
        </Grid>
    );
};