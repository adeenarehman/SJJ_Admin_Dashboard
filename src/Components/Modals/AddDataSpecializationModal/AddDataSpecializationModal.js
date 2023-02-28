import React, { useState, useEffect } from 'react'
import { Grid, Button, TextField, DialogActions, DialogContent, DialogContentText, useMediaQuery, CircularProgress, Alert, Snackbar,
    Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import * as specializationPostAction from '../../../Redux/Actions/action';

export default function AddSpecializationModal() {

    // //REDUX DATA GET
    // const dispatch = useDispatch();
    // const { post_service } = useSelector(state => state.post_service);

    //LOCADING STATE
    const [isLoading, setIsLoading] = useState(false);
    //ADD MODAL STATES
    const [specName, setSpecName] = useState('');
    const [specMeaning, setSpecMeaning] = useState('');
    const [specDescription, setSpecDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('fdsfd');
    const [publishTime, setPublishTime] = useState(Date());
    const [publishDate, setPublishDate] = useState(Date());
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
    const handleSubmit = (event) => { {/** FORM DATA SET FUNCTION **/}
        console.log('specDescription: ',imageUrl )
        setIsLoading(true)
        event.preventDefault();

        if (!specName.trim()) {
            alert('Enter Spec Name')
        } else if (!specMeaning.trim()) {
            alert('EnterSpec Meannig in urdu')
        } else if (!specDescription.trim()) {
            alert('enter Spec Description')
        } else {
        // dispatch(specializationPostAction.postSpecializations(specName.toLowerCase(), specMeaning, specDescription, imageUrl,
        //     publishTime, publishDate));

            handleSuccessClick(); {/* Success SnackBar Function */ }

        setIsLoading(false)
        }
    };


    return (
        <Grid container style={{ backgroundColor: 'none', width: '100%' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <Typography align='center' variant='h5' style={{fontWeight: 'bold'}}>
                    {"Add Specialization"}
                </Typography>
                <form onSubmit={handleSubmit} autoComplete="off" style={{ backgroundColor: 'none' }}>
                    <DialogContent >
                        <DialogContentText style={{ backgroundColor: 'none' }}>
                            <Grid container style={{ backgroundColor: 'none' }}>
                                {/* NAME & MEANING CONTAINER */}
                                <Grid container columnSpacing={1} style={{ backgroundColor: 'none' }}>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Name: </Typography>
                                        <TextField style={{ width: '100%' }} 
                                            value={specName} 
                                            onChange={e => setSpecName(e.target.value)} 
                                            size='small' id="outlined-basic" 
                                            label="Enter Specialization Name..." 
                                            variant="filled" 
                                            autoComplete="off"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Meaning: </Typography>                                        
                                        <TextField style={{ width: '100%' }} 
                                            value={specMeaning} 
                                            onChange={e => setSpecMeaning(e.target.value)} 
                                            size='small' id="outlined-basic" 
                                            label="Enter Specialization Meaning (In Urdu)..." 
                                            variant="filled" 
                                            autoComplete="off"
                                        />
                                    </Grid>
                                </Grid>
                                {/* DESCRIPTION CONTAINER */}
                                <Grid container columnSpacing={1} style={{ marginTop:'2%' }}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Description: </Typography>
                                        <TextField style={{ width: '100%' }} 
                                            value={specDescription} 
                                            onChange={e => setSpecDescription(e.target.value)} 
                                            size='small' id="outlined-basic" 
                                            label="Enter Specialization Description (In Urdu)..." 
                                            variant="filled" 
                                            autoComplete="off"
                                        />
                                    </Grid>
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
                <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Specialization Has Been Added Successfully!</Alert>
            </Snackbar>

            <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert severity="error" variant='filled' onClose={handleErrorClose}>Specialization Has Not Been Added!</Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------------------------------------------- */}
        </Grid>
    )
}
