import React, { useState, useEffect } from 'react'
import { Grid, Button, TextField, FormControl, Select, InputLabel, MenuItem, Dialog, DialogActions, Alert, Snackbar,
    useMediaQuery, DialogContent, DialogContentText, DialogTitle, CircularProgress, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
// import { useDispatch, useSelector } from 'react-redux';
// import * as panelUserPostAction from '../../../Redux/Actions/action';
// import * as hospitalAction from '../../../Redux/Actions/action';


export default function AddPanelUserModal() {
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    // // REDUX
    // const dispatch = useDispatch();
    // const { hospital } = useSelector(state => state.hospital);
    // const { post_panel_user } = useSelector(state => state.post_panel_user);
    // const { loginId } = useSelector(state => state.loginId)


    // useEffect(() => {
    //     dispatch(hospitalAction.fetchHospitals());
    // }, [dispatch])

    // //MENU STATES
    const [openModal, setOpenModal] = React.useState(false);
    //LOCADING STATES
    const [isLoading, setIsLoading] = useState(false);
    //ADD MODAL STATES
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userDesignation, setUserDesignation] = useState();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userCountry, setUserCountry] = useState('');
    const [userImageUrl, setImageUrl] = useState('kmckdsmk');
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(0);
    const [userHospital, setUserHospital] = useState();
    const [userLoginUid, setUserLoginUid] = useState(localStorage.getItem('loginID'));
    const [userPublishTime, setUserPublishTime] = useState(Date());
    const [userPublishDate, setUserPublishDate] = useState(Date());
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
    const handleClickOpen = () => {setOpenModal(true);}; {/** MODAL OPEN FUNCTION **/}
    const handleClose = () => {setOpenModal(false);}; {/** MODAL CLOSE FUNCTION **/}

    // 
    const handleDesignationChange = (event) => { {/** DESIGNATION DROPDOWN SET FUNCTION **/}
        setUserDesignation(event.target.value)
        // console.log(userDesignation)
    };

    const handleHospitalChange = (event) => { {/** HOSPITAL DROPDOWN SET FUNCTION **/}
        setUserHospital(event.target.value)
        // console.log(userDesignation)
    };

    const handleSubmit = (event) => { {/** FORM DATA SET FUNCTION **/}
        setIsLoading(true)
        event.preventDefault();
        // let userId = loginId
        let uniqueId = (Math.random() + 1).toString(36).substring(5);


        if (!userFirstName.trim()) {
            alert('Enter First Name')
        } else if (!userLastName.trim()) {
            alert('Enter Last Name')
        } else if (!userEmail.trim()) {
          alert('Enter Email')
        } else if (!userPassword.trim()) {
            alert('Enter Password')
        } else if (!userCity.trim()) {
            alert('Enter City')
        } else if (!userCountry.trim()) {
            alert('Enter Country')
        } else if (userDesignation == null && userDesignation == '') {
            alert('Select Designation')
        } else if (!userCountry.trim()) {
            alert('Select HOspital')
        }else {

        // dispatch(panelUserPostAction.postPanelUsers(userFirstName, userLastName, uniqueId, userDesignation, userEmail, userPassword,
        //     userCity, userCountry, userImageUrl, userIsLoggedIn, userHospital, userId, userPublishTime, userPublishDate));

            handleSuccessClick(); {/* Success SnackBar Function */ }

        setIsLoading(false)
        }
    };

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width:'100%' }}>
                {/*  */}
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <DialogTitle id="responsive-dialog-title">
                        <Typography align='center' variant='h5' style={{fontWeight: 'bold'}}>
                    {"Add Panel User Data"}
                </Typography>
                        </DialogTitle>
                        <DialogContent >
                            <DialogContentText>
                                <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none', height: '100%' }}>
                                    {/* NAME & CONTACT CONTAINER */}
                                    <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ backgroundColor: 'none', marginTop:'2%' }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>First Name: </Typography>
                                            <TextField required value={userFirstName} onChange={e => setUserFirstName(e.target.value)} style={{ width: '100%' }} size='small' id="outlined-basic" label="First Name..." variant="filled" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ backgroundColor: 'none', marginTop:'2%' }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Last Name: </Typography>
                                            <TextField style={{ width: '100%' }} required value={userLastName} onChange={e => setUserLastName(e.target.value)} size='small' id="outlined-basic" label="Last Name..." variant="filled" />
                                        </Grid>
                                    </Grid>
                                    {/* EMAIL & PASSWORD CONTAINER */}
                                    <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Email: </Typography>
                                            <TextField style={{ width: '100%' }} required value={userEmail} onChange={e => setUserEmail(e.target.value)} size='small' id="outlined-basic" label="Email..." variant="filled" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Password: </Typography>
                                            <TextField style={{ width: '100%' }} required value={userPassword} onChange={e => setUserPassword(e.target.value)} size='small' id="outlined-basic" label="Password..." variant="filled" />
                                        </Grid>
                                    </Grid>
                                    {/* CITY & COUNTRY CONTAINER */}
                                    <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>City: </Typography>
                                            <TextField style={{ width: '100%' }} required value={userCity} onChange={e => setUserCity(e.target.value)} size='small' id="outlined-basic" label="City..." variant="filled" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Country: </Typography>
                                            <TextField style={{ width: '100%' }} required value={userCountry} onChange={e => setUserCountry(e.target.value)} size='small' id="outlined-basic" label="Country..." variant="filled" />
                                        </Grid>
                                    </Grid>
                                    {/* USER DESIGNATION & HOSPITAL CONTAINER */}
                                    <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Designation: </Typography>
                                            <FormControl fullWidth size='small' variant="filled" required>
                                                <InputLabel id="demo-simple-select-label">Select Designation....</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    size='small'
                                                    value={userDesignation}
                                                    label="Select Designation...."
                                                    onChange={handleDesignationChange}
                                                >
                                                    <MenuItem value={2}>Sub-Admin</MenuItem>
                                                    <MenuItem value={3}>Hospital-Admin</MenuItem>
                                                    <MenuItem value={3}>Lab-Admin</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Hospital: </Typography>
                                            <TextField style={{ width: '100%' }} value={userHospital} onChange={e => setUserHospital(e.target.value)} size='small' id="outlined-basic" label="Enter Hospital..." variant="filled" />
                                        </Grid>
                                        {/* <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Hospital: </Typography>
                                            <FormControl fullWidth size='small' variant="filled" required>
                                                <InputLabel id="demo-simple-select-label">Select Hospital....</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    size='small'
                                                    value={userHospital}
                                                    label="Select Hospital...."
                                                    onChange={handleHospitalChange}
                                                >
                                                    <MenuItem value={0}>
                                                        <em>None</em>
                                                    </MenuItem>
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
                                    <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop:'2%' }}>
                                            <input type='file' multiple accept='image/*' />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button type="submit" variant='contained'>
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
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Panel User Has Been Added Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Panel User Has Not Been Added!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
        </Grid>
    )
}
