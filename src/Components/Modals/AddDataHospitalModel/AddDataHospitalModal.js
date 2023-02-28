import React, { useState } from 'react'
import { Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert, 
  useMediaQuery, Select, FormControl, InputLabel, MenuItem, CircularProgress, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import * as hospitalPostAction from '../../../Redux/Actions/action';


export default function AddHospitalModal() {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  // Redux
  const dispatch = useDispatch();
  const { post_hospital } = useSelector(state => state.post_hospital);
  const { loginId } = useSelector(state => state.loginId)

  // //MENU STATES
  const [openModal, setOpenModal] = React.useState(false);
  //LOCADING STATES
  const [isLoading, setIsLoading] = useState(false);
  //MODAL STATES
  const [hospName, setHospName] = useState('');
  const [hospAddress, setHospAddress] = useState('');
  const [hospContact, setHospContact] = useState('');
  const [hospCity, setHospCity] = useState('');
  const [hospCountry, setHospCountry] = useState('');
  const [hospLat, setHospLat] = useState('');
  const [hospLng, setHospLng] = useState('');
  const [hospHomeService, setHospHomeService] = useState('');
  const [hospImageUrl, setImageUrl] = useState('kmckdsmk');
  const [hospLoginUid, setHospLoginUid] = useState(localStorage.getItem('loginID'));
  const [hospPublishTime, setHospPublishTime] = useState(Date());
  const [hospPublishDate, setHospPublishDate] = useState(Date());
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

   const handleErrorClick = () => {setOpenError(true);}; {/** SNACKBAR ERROT FUNCTION **/}
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
  const handleHospHomeServiceChange = (event) => { {/** HOME SERVICE DROPDOWN FUNCTION **/}
    setHospHomeService(event.target.value)
};

  const handleSubmit = (event) => { {/** FORM DATA SET FUNCTION **/}
    setIsLoading(true)
    event.preventDefault();
    let userId = loginId

    if (!hospName.trim()) {
      alert('Enter Hospital Name')
  } else if (!hospContact.trim()) {
      alert('Enter Hospital Contact')
  } else if (!hospAddress.trim()) {
      alert('Enter Hospital Address')
  } else if (hospHomeService == null && hospHomeService == '') {
    alert('Select Home Service')
  } else if (!hospCity.trim()) {
      alert('Enter Hospital City')
  } else if (!hospCountry.trim()) {
      alert('Enter Hospital Country')
  } else if (!hospLat.trim()) {
      alert('Enter Latitude')
  } else if (!hospLng.trim()) {
      alert('Enter Longitude')
  } else {
    dispatch(hospitalPostAction.postHospitals(hospName,hospContact,hospAddress,hospCity,hospCountry,hospLat,hospLng,hospHomeService,
      hospImageUrl,userId,hospPublishTime,hospPublishDate));
  
      handleSuccessClick(); {/* Success SnackBar Function */ } 
  
          setIsLoading(false)
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width:'100%' }}>
        {/* <Button onClick={handleClickOpen} variant='contained' color='inherit' startIcon={<AddIcon />}>
          Add Hospital
        </Button> */}

        {/* ------------------------------------------------------------------------------------------------------- */}
        {/* ADD MODAL */}

        {/* <Dialog
          // fullScreen={fullScreen}
          open={openModal}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        > */}
              <form onSubmit={handleSubmit} autoComplete="off">
          <DialogTitle id="responsive-dialog-title">
            <Typography align='center' variant='h5' style={{fontWeight: 'bold'}}>
                    {"Add Hospital Data"}
                </Typography>
          </DialogTitle>
          <DialogContent >
            <DialogContentText>
            <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                {/* NAME & CONTACT CONTAINER */}
                <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>Name: </Typography>
                    <TextField style={{ width: '100%' }} required value={hospName} onChange={e => setHospName(e.target.value)} size='small' id="outlined-basic" label="Name..." variant="filled" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>Contact: </Typography>
                    <TextField style={{ width: '100%' }} required value={hospContact} onChange={e => setHospContact(e.target.value)} size='small' id="outlined-basic" label="Contact..." variant="filled" />
                  </Grid>
                </Grid>
                {/* ADDRESS CONTAINER */}
                <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>Address: </Typography>
                    <TextField style={{ width: '100%' }} required value={hospAddress} onChange={e => setHospAddress(e.target.value)} size='small' id="outlined-basic" label="Address..." variant="filled" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>Home Service: </Typography>                                       
                   <FormControl fullWidth size='small' variant="filled" required>
                                            <InputLabel id="demo-simple-select-filled-label">Provide Home Services....</InputLabel>
                                            <Select
                                                size='small'
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                // size='small'
                                                value={hospHomeService}
                                                label="Provide Home Services..."
                                            onChange={handleHospHomeServiceChange}
                                            >
                                                {/* {specializations.map((val) => {
                                                    return ( */}
                                                        <MenuItem value={1}>{'Yes'}</MenuItem>
                                                        <MenuItem value={0}>{'No'}</MenuItem>
                                                    {/* )
                                                })} */}
                                            </Select>
                                        </FormControl>
                  </Grid>
                </Grid>
                {/* CITY & COUNTRY CONTAINER */}
                <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>City: </Typography>
                    <TextField style={{ width: '100%' }} required value={hospCity} onChange={e => setHospCity(e.target.value)} size='small' id="outlined-basic" label="City..." variant="filled" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>Country: </Typography>
                    <TextField style={{ width: '100%' }} required value={hospCountry} onChange={e => setHospCountry(e.target.value)} size='small' id="outlined-basic" label="Country..." variant="filled" />
                  </Grid>
                </Grid>
                {/* LAT & LNG CONTAINER */}
                <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>Latitude: </Typography>
                    <TextField style={{ width: '100%' }} required value={hospLat} onChange={e => setHospLat(e.target.value)} size='small' id="outlined-basic" label="Latitude..." variant="filled" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                  <Typography variant='body2' style={{ fontWeight: 'bold' }}>Longitude: </Typography>
                    <TextField style={{ width: '100%' }} required value={hospLng} onChange={e => setHospLng(e.target.value)} size='small' id="outlined-basic" label="Longitude..." variant="filled" />
                  </Grid>
                </Grid>
                {/* IMAGE UPLOAD CONTAINER */}
                <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop:'2%' }}>
                    <input type='file' multiple accept='image/*' />
                  </Grid>
                </Grid>
            </Grid>
            </DialogContentText>
          <DialogActions style={{display:'flex', justifyContent:'center'}}>
            <Button type="submit" variant='contained'>
              Save
              {isLoading ?
                          <CircularProgress color="inherit" size={14} style={{
                            marginLeft: 10
                          }} /> : null
                        }
            </Button>
          </DialogActions>
          </DialogContent>
        </form>
        {/* </Dialog> */}
        {/* END ADD MODAL */}
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
