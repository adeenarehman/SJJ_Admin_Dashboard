import React, { useEffect, useState } from 'react';
import {Grid, Dialog, Button, Typography, Box, Stepper, Step, StepLabel} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddDoctorModal from '../Modals/AddDoctorModal/AddDoctorModal';
import AddDoctorScheduleModal from '../Modals/AddDoctorScheduleModal/AddDoctorScheduleModal'
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
// import * as checkingAction from '../../../Redux/Actions/action';

const steps = ['Add A Doctor', 'Add Schedule'];

const theme = createTheme({
  palette: {
    secondary: {
      main: red[900]
    }
  },
});

export default function HorizontalLinearStepper() {

  const { doc_insert_id } = useSelector(state => state.doc_insert_id)

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // //Stepper STATES
  const [open, setOpen] = React.useState(false);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    // else{
    //   // doc_insert_id !== '' ? (setActiveStep((prevActiveStep) => prevActiveStep + 1)) : (null)
    // }
    // 
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    // setActiveStep(0);
    handleClose()
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    console.log('insert id : ', doc_insert_id),
    <ThemeProvider theme={theme}>
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button 
        onClick={() => { handleClickOpen() }} 
        color = 'secondary' variant= 'outlined' startIcon={<AddCircleOutlineIcon />} >
          Add Doctor
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
          <Stepper activeStep={activeStep} style={{ padding: '2%' }}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography align='center' sx={{ mt: 2, mb: 1, mr: 6, ml: 6 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Done</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
              {activeStep == 0 ?
                (<AddDoctorModal />)
                : activeStep == 1 ?
                (<AddDoctorScheduleModal />)
                :
                (<AddDoctorScheduleModal />)
              }
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 0 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Dialog>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}