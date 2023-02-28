import React, { useState } from 'react'
import { Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert, Snackbar,
  useMediaQuery, CircularProgress, Typography} from '@mui/material'
import { createTheme, ThemeProvider, useTheme  } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import { useDispatch, useSelector } from 'react-redux';
// import * as pharmacyPostAction from '../../../Redux/Actions/action';

const theme = createTheme({
  palette: {
    secondary: {
      main: red[900]
    }
  },
});

export default function AddStoreModal() {
  
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Redux
  // const dispatch = useDispatch();
  //   const { post_pharmacy } = useSelector(state => state.post_pharmacy);
  //   const { loginId } = useSelector(state => state.loginId)



  // //MENU STATES
  const [openModal, setOpenModal] = React.useState(false);
    //LOCADING STATES
    const [isLoading, setIsLoading] = useState(false);
  //ADD MODAL STATES
  const [pharmacyName, setPharmacyName] = useState('');
  const [pharmacyContact, setPharmacyContact] = useState('');
  const [pharmacyCity, setPharmacyCity] = useState('');
  const [pharmacyCountry, setPharmacyCountry] = useState('');
  const [pharmacyArea, setPharmacyArea] = useState('');
  const [pharmacyLat, setPharmacyLat] = useState('');
  const [pharmacyLng, setPharmacyLng] = useState('');
  const [pharmacyImageUrl, setImageUrl] = useState('kmckdsmk');
  const [pharmacyLoginUid, setPharmacyLoginUid] = useState(localStorage.getItem('loginID'));
  const [pharmacyPublishTime, setPharmacyPublishTime] = useState(Date());
  const [pharmacyPublishDate, setPharmacyPublishDate] = useState(Date());
   // SNACKBAR STATES
   const [openSuccess, setOpenSuccess] = React.useState(false);
   const [openError, setOpenError] = React.useState(false);
   const [state, setState] = React.useState({ open: false, vertical: 'top', horizontal: 'center', });
   const { vertical, horizontal, open } = state;

   // SNACKBAR FUNCTIONS
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
  const handleSubmit = (event) => { {/** FORM DATA SET FUNCTION **/}
    setIsLoading(true)   
     event.preventDefault();
    //  let userId = loginId

     if (!pharmacyName.trim()) {
      alert('Enter Pharmacy Name')
  } else if (!pharmacyContact.trim()) {
      alert('Enter Pharmacy Contact')
  } else if (!pharmacyArea.trim()) {
      alert('Enter Pharmacy Area')
  } else if (!pharmacyCity.trim()) {
    alert('Enter Pharmacy City')
  } else if (!pharmacyCountry.trim()) {
      alert('Enter Pharmacy Country')
  } else if (!pharmacyLat.trim()) {
      alert('Enter Latitude')
  } else if (!pharmacyLng.trim()) {
      alert('Enter Longitude')
  } else {
      // dispatch(pharmacyPostAction.postPharmacies(pharmacyName,pharmacyContact,pharmacyArea,pharmacyCity,pharmacyCountry,
      // pharmacyLat,pharmacyLng,pharmacyImageUrl,userId,pharmacyPublishTime,pharmacyPublishDate));
  
      handleSuccessClick(); {/* Success SnackBar Function */ }
  
      setIsLoading(false)
      setPharmacyName(''); setPharmacyContact(''); setPharmacyArea(''); setPharmacyCity(''); setPharmacyCountry(''); 
      setPharmacyLat(''); setPharmacyLng(''); 
  }
  };

 
  return (
    <ThemeProvider theme={theme}>

    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button onClick={handleClickOpen} color = 'secondary' variant= 'outlined' startIcon={<AddCircleOutlineIcon />}>
          Add Pharmacy
        </Button>

        {/* ------------------------------------------------------------------------------------------------------- */}
        {/* ADD MODAL */}

        <Dialog
          // fullScreen={fullScreen}
          open={openModal}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogTitle id="responsive-dialog-title">
            <Typography align='center' variant='h5' style={{fontWeight: 'bold'}}>
                    {"Add Pharmacy Data"}
                </Typography>
            </DialogTitle>
            <DialogContent >
              <DialogContentText>
                <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none', height: '100%' }}>
                  {/* NAME & CONTACT CONTAINER */}
                  <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop: '2%' }}>
                    <Typography variant='body2' style={{ fontWeight: 'bold' }}>Name: </Typography>
                      <TextField required style={{ width: '100%' }}value={pharmacyName} onChange={e => setPharmacyName(e.target.value)} size='small' id="outlined-basic" label="Name..." variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop: '2%' }}>
                    <Typography variant='body2' style={{ fontWeight: 'bold' }}>Contact: </Typography>
                      <TextField required style={{ width: '100%' }} value={pharmacyContact} onChange={e => setPharmacyContact(e.target.value)} size='small' id="outlined-basic" label="Contact..." variant="filled" />
                    </Grid>
                  </Grid>
                  {/* AREA CONTAINER */}
                  <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop:'2%' }}>
                    <Typography variant='body2' style={{ fontWeight: 'bold' }}>Area: </Typography>
                      <TextField required style={{ width: '100%' }} value={pharmacyArea} onChange={e => setPharmacyArea(e.target.value)} size='small' id="outlined-basic" label="Area..." variant="filled" />
                    </Grid>
                  </Grid>
                  {/* CITY & COUNTRY CONTAINER */}
                  <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                    <Typography variant='body2' style={{ fontWeight: 'bold' }}>City: </Typography>
                      <TextField required style={{ width: '100%' }} value={pharmacyCity} onChange={e => setPharmacyCity(e.target.value)} size='small' id="outlined-basic" label="City..." variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                    <Typography variant='body2' style={{ fontWeight: 'bold' }}>Country: </Typography>
                      <TextField required style={{ width: '100%' }} value={pharmacyCountry} onChange={e => setPharmacyCountry(e.target.value)} size='small' id="outlined-basic" label="Country..." variant="filled" />
                    </Grid>
                  </Grid>
                  {/* LAT & LNG CONTAINER */}
                  <Grid container rowSpacing={1} columnSpacing={1} style={{ backgroundColor: 'none' }}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                    <Typography variant='body2' style={{ fontWeight: 'bold' }}>Latitude: </Typography>
                      <TextField required style={{ width: '100%' }} value={pharmacyLat} onChange={e => setPharmacyLat(e.target.value)} size='small' id="outlined-basic" label="Latitude..." variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop:'2%' }}>
                    <Typography variant='body2' style={{ fontWeight: 'bold' }}>Longitude: </Typography>
                      <TextField required style={{ width: '100%' }} value={pharmacyLng} onChange={e => setPharmacyLng(e.target.value)} size='small' id="outlined-basic" label="Longitude..." variant="filled" />
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
        </Dialog>
        {/* END ADD MODAL */}
      </Grid>
      {/* -------------------------------------------------------------------------------------------------------------- */}
      <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Pharmacy Has Been Added Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Pharmacy Has Not Been Added!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
    </Grid>
    </ThemeProvider>
  )
}
