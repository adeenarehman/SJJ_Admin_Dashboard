import React, { useState, useEffect } from 'react'
import {
    Grid, Button, TextField, DialogActions, DialogContent, DialogContentText, useMediaQuery, FormControl, Snackbar, Alert,
    InputLabel, Select, MenuItem, FormControlLabel, RadioGroup, Radio, CircularProgress, Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import * as hospitalAction from '../../../Redux/Actions/action';
// import * as specializationAction from '../../../Redux/Actions/action';
// import * as doctorPostAction from '../../../Redux/Actions/action';

export default function AddDoctorModal() {

    //REDUX DATA GET
    // const dispatch = useDispatch();
    // const { loginId } = useSelector(state => state.loginId);
    // const { hospital } = useSelector(state => state.hospital);
    // const { specialization } = useSelector(state => state.specialization);
    // const { post_doctor } = useSelector(state => state.post_doctor);
    // const { doc_insert_id } = useSelector(state => state.doc_insert_id);

    // useEffect(() => {
    //     dispatch(hospitalAction.fetchHospitals());
    //     dispatch(specializationAction.fetchSpecializations());
    //     // dispatch(specializationAction.fetchSpecializations());
    // }, [dispatch])

    //LOCADING STATE
    const [isLoading, setIsLoading] = useState(false);
    //ADD MODAL STATES
    const [docFirstName, setDocFirstName] = useState('');
    const [docLastName, setDocLastName] = useState('');
    const [docPmcNumber, setDocPmcNumber] = useState('');
    const [docDegree, setDocDegree] = useState('');
    const [docExperience, setDocExperience] = useState('');
    const [docSpecialization, setDocSpecialization] = useState('');
    const [docHospital, setDocHospital] = useState('');
    const [docGender, setDocGender] = useState('');
    const [docImageUrl, setDocImageUrl] = useState('-');
    const [docAvailability, setDocAvailability] = useState(1);
    const [docLoginUid, setDocLoginUid] = useState(localStorage.getItem('LoginID'));
    const [docPublishTime, setDocPublishTime] = useState(Date());
    const [docPublishDate, setDocPublishDate] = useState(Date());
    // SNACKBAR STATES
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [state, setState] = React.useState({ open: false, vertical: 'top', horizontal: 'center', });
    const { vertical, horizontal, open } = state;

    // SNACKBAR FUNCTIONS
    const handleSuccessClick = () => {
        // dispatch(doctorAction.deleteSingleDoctor(uid));
        setOpenSuccess(true);
        // dispatch(doctorAction.fetchDoctors());
    };
    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({ ...state, open: false });
        setOpenSuccess(false);
    };

    const handleErrorClick = () => {
        // setTransition(() => Transition);
        setOpenError(true);
    };
    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({ ...state, open: false });
        setOpenError(false);
    };

    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleDocSpecializationChange = (event) => {
        setDocSpecialization(event.target.value)
        // console.log(userDesignation)
    };

    const handleDocHospitalChange = (event) => {
        setDocHospital(event.target.value)
        // console.log(userDesignation)
    };

    const handleSubmit = (event) => {
        // onConfirm={handleSuccessClick(params.value.docId)} onCancel={handleErrorClick}
        setIsLoading(true)
        // console.log('jbadbjad')
        event.preventDefault();
        let uniqueId = (Math.random() + 1).toString(36).substring(5);
        // let userId = loginId

        if (!docFirstName.trim()) {
            alert('Enter Doctor First Name')
        } else if (!docLastName.trim()) {
            alert('Enter Doctor Last Name')
        } else if (!docPmcNumber.trim()) {
            alert('Enter Doctor PMC Number')
        } else if (!docDegree.trim()) {
            alert('Enter Doctor Degree')
        } else if (docSpecialization == null && docSpecialization == '') {
            alert('Select Specialization')
        } else if (!docExperience.trim()) {
            alert('Enter Doctor Experience')
        } else if (docGender == null  && docGender == '') {
            alert('Select Gender')
        } else {
            // dispatch(doctorPostAction.postDoctors(docFirstName, docLastName, uniqueId, docPmcNumber, docDegree, docExperience,
            //     docSpecialization, docGender, docImageUrl, docAvailability, userId,
            //     docPublishTime, docPublishDate));
    
            handleSuccessClick(); {/* Success SnackBar Function */ }

            setDocFirstName(''); setDocLastName(''); setDocPmcNumber(''); setDocDegree(''); setDocExperience('');
            setDocSpecialization(''); setDocGender(''); setDocImageUrl(''); setDocAvailability('');
            setDocLastName('');

            setIsLoading(false)
        }
    };

    return (
        // console.log('id ye hai: ', doc_insert_id),
        <Grid container style={{ backgroundColor: 'none', width: '100%' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <Typography align='center' variant='h5' style={{ fontWeight: 'bold' }}>
                    {"Add Doctor Data"}
                </Typography>
                <form onSubmit={handleSubmit} autoComplete="off" style={{ backgroundColor: 'none' }}>
                    <DialogContent >
                        <DialogContentText style={{ backgroundColor: 'none' }}>
                            <Grid container style={{ backgroundColor: 'none' }}>
                                {/* FIRST LAST NAME CONTAINER */}
                                <Grid container columnSpacing={1} style={{ backgroundColor: 'none' }}>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>First Name: </Typography>
                                        <TextField style={{ width: '100%' }} required value={docFirstName} onChange={e => setDocFirstName(e.target.value)} size='small' id="outlined-basic" label="Enter First Name..." variant="filled" />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Last Name: </Typography>
                                        <TextField style={{ width: '100%' }} required value={docLastName} onChange={e => setDocLastName(e.target.value)} size='small' id="outlined-basic" label="Enter Last Name..." variant="filled" />
                                    </Grid>
                                </Grid>
                                {/* PMC NUMBER & DEGREE CONTAINER */}
                                <Grid container columnSpacing={1} style={{ marginTop: '2%' }}>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Doctor PMC Number: </Typography>
                                        <TextField style={{ width: '100%' }} required value={docPmcNumber} onChange={e => setDocPmcNumber(e.target.value)} size='small' id="outlined-basic" label="Enter PMC Number..." variant="filled" />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Doctor Degree: </Typography>
                                        <TextField style={{ width: '100%' }} required value={docDegree} onChange={e => setDocDegree(e.target.value)} size='small' id="outlined-basic" label="Enter Degree..." variant="filled" />
                                    </Grid>
                                </Grid>
                                {/* Specialization and Experience CONTAINER */}
                                <Grid container columnSpacing={1} style={{ marginTop: '2%' }}>
                                    {/* <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Specialization: </Typography>
                                        <FormControl fullWidth size='small' variant="filled" required>
                                            <InputLabel id="demo-simple-select-filled-label">Select Specialization....</InputLabel>
                                            <Select
                                                size='small'
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                label="Select Specialization....."
                                                value={docSpecialization}
                                                onChange={handleDocSpecializationChange}
                                            >
                                                {specialization.map((val) => {
                                                    return (
                                                        <MenuItem value={val.specialization_id} key={val.specialization_id}>{val.specialization_name}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid> */}
                                      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Specialization: </Typography>
                                        <TextField style={{ width: '100%' }} required value={docSpecialization} onChange={e => setDocSpecialization(e.target.value)} size='small' id="outlined-basic" label="Enter Specialization....." variant="filled" />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Experience: </Typography>
                                        <TextField style={{ width: '100%' }} required value={docExperience} onChange={e => setDocExperience(e.target.value)} size='small' id="outlined-basic" label="Enter Experience..." variant="filled" />
                                    </Grid>
                                </Grid>
                                {/* Hospital & Gender container */}
                                <Grid container columnSpacing={1} style={{ marginTop: '2%' }}>
                                    {/* <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Hospital: </Typography>
                                        <FormControl fullWidth size='small' variant="filled" required>
                                            <InputLabel id="demo-simple-select-filled-label">Select Hospital....</InputLabel>
                                            <Select
                                                size='small'
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={docHospital}
                                                onChange={handleDocHospitalChange}
                                                label="Select Hospital...."
                                            >
                                                {hospital.map((val) => {
                                                    return (
                                                        <MenuItem value={val.hospital_id} key={val.hospital_id}>{val.hospital_name}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid> */}

                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ backgroundColor: 'none' }}>
                                        <Typography variant='span' style={{ fontWeight: 'bold' }}>Gender: </Typography>
                                        {/* <FormControl> */}
                                        {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                                        <FormControl fullWidth size='small' variant="filled" required>
                                            <RadioGroup
                                                required
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                value={docGender}
                                                onChange={e => setDocGender(e.target.value)}
                                            >
                                                <FormControlLabel value="1" control={<Radio size="small" />} label="Male" />
                                                <FormControlLabel value="2" control={<Radio size="small" />} label="Female" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                {/* IMAGE UPLOAD CONTAINER */}
                                <Grid container style={{ marginTop: '2%' }}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ backgroundColor: 'none' }}>
                                        <input type='file' name='uploaded_image' accept=" " />
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
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Doctor Has Been Added Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Doctor Has Not Been Added!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
        </Grid>
    )
}
