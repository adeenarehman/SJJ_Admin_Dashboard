import React, { useState, useEffect } from 'react'
import { Grid, Paper, TextField, InputAdornment, Typography, Breadcrumbs, Avatar, IconButton, Link, Pagination,
Snackbar, Alert, Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Tag, Popconfirm } from 'antd';
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Stepper from '../../Stepper/Stepper'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import SimpleBackdrop from '../../Backdrop/Backdrop';
import {useNavigate} from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import * as doctorAction from '../../../Redux/Actions/action';

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};

const doctor = [
  {
    doctor_id: 1,
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 1',
    specialization_name: 'Gyneacologist',
    doctor_pmc: '-',
    doctor_degree: 'Mbbs, Fcps',
    doctor_experience: '6',
    hospital_name: 'Hospital 6',
    hospital_contact: '-',
    gender_name: 'female'
  },
  {
    doctor_id: 2,
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor',
    specialization_name: 'General Surgeon',
    doctor_pmc: '-',
    doctor_degree: 'Mbbs',
    doctor_experience: '2',
    hospital_name: 'Hospital 1',
    hospital_contact: '-',
    gender_name: 'male'
  },
  {
    doctor_id: 3,
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 2',
    specialization_name: 'General Physician',
    doctor_pmc: '-',
    doctor_degree: 'Mbbs',
    doctor_experience: '10',
    hospital_name: 'Hospital 4',
    hospital_contact: '-',
    gender_name: 'female'
  },
  {
    doctor_id: 4,
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 4',
    specialization_name: 'Pediatrician',
    doctor_pmc: '-',
    doctor_degree: 'Mbbs, Fcps',
    doctor_experience: '3',
    hospital_name: 'Hospital 5',
    hospital_contact: '-',
    gender_name: 'male'
  },
  {
    doctor_id: 5,
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 3',
    specialization_name: 'Cardiologist',
    doctor_pmc: '-',
    doctor_degree: 'Mbbs, Fcps',
    doctor_experience: '15',
    hospital_name: 'Hospital 2',
    hospital_contact: '-',
    gender_name: 'male'
  },
  {
    doctor_id: 6,
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 5',
    specialization_name: 'Psychiatrist',
    doctor_pmc: '-',
    doctor_degree: 'Mbbs, Fcps',
    doctor_experience: '1',
    hospital_name: 'Hospital 5',
    hospital_contact: '-',
    gender_name: 'male'
  },
  {
    doctor_id: 6,
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 6',
    specialization_name: 'ENT Specialist',
    doctor_pmc: '-',
    doctor_degree: 'Mbbs, Fcps',
    doctor_experience: '5',
    hospital_name: 'Hospital 7',
    hospital_contact: '-',
    gender_name: 'female'
  },
  {
    doctor_id: 7,
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 7',
    specialization_name: 'Cardiologist',
    doctor_pmc: '-',
    doctor_degree: 'Mbbs, Fcps',
    doctor_experience: '4',
    hospital_name: 'Hospital 1',
    hospital_contact: '-',
    gender_name: 'female'
  },
  {
    doctor_id: 8,
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 8',
    specialization_name: 'Dermatologist',
    doctor_pmc: '-',
    doctor_degree: 'Mbbs, Fcps',
    doctor_experience: '3',
    hospital_name: 'Hospital 5',
    hospital_contact: '-',
    gender_name: 'male'
  },
]

export default function DoctorTable() {

  let navigate = useNavigate();

  // const dispatch = useDispatch();
  // const { doctor } = useSelector(state => state.doctor);
  // const { delete_single_doctor } = useSelector(state => state.delete_single_doctor);
  // const { doctor_schedule } = useSelector(state => state.doctor_schedule);

  // useEffect(() => {
  //   dispatch(doctorAction.fetchDoctors());
  //   dispatch(doctorAction.fetchDoctorsSchedule());
  // }, [dispatch])

  //SEARCH STATES
  const [search, setSearch] = useState('');
  // SNACKBAR STATES
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [state, setState] = React.useState({ open: false, vertical: 'top', horizontal: 'center',});
  const { vertical, horizontal, open } = state;

  // useEffect(() => {
  //   setTimeout(<SimpleBackdrop/>, 5000);
  // }, [])
  

  // SNACKBAR FUNCTIONS
  const handleSuccessClick = (uid) => () => {
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

  const handleErrorClick = () => () => {
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

// ROW OVERLAY FUNCTION
const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .ant-empty-img-1': {
    fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
  },
  '& .ant-empty-img-2': {
    fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
  },
  '& .ant-empty-img-3': {
    fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
  },
  '& .ant-empty-img-4': {
    fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
  },
  '& .ant-empty-img-5': {
    fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
    fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
}

  function stringToColor(string) { {/** AVATAR COLOR FUNCTIONS **/}
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name) { {/** AVATAR COLOR FUNCTIONS **/}
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }


  const rows = doctor.filter((val) => { {/* TABLE ROWS */}
    if (search == '') {
      return val
    }
    else if (val.doctor_first_name.toLowerCase().includes(search.toLowerCase()) || val.doctor_last_name.toLowerCase().includes(search.toLowerCase())) {
      return val
    }
    else if (val.doctor_pmc.includes(search)) {
      return val
    }
    // return val
  }).map((val) => {
    return {
      id: val.doctor_id,
      data: { firstName: val.doctor_first_name, lastName: val.doctor_last_name, spec: val.specialization_name },
      pmcNum: { number: val.doctor_pmc },
      degree: val.doctor_degree,
      experience: { experience: val.doctor_experience },
      hospitalData: {hospitalName: val.hospital_name, hospitalContact: val.hospital_contact},
      gender: { gender: val.gender_name },
      docid: { docId: val.doctor_id },
    }
  })

 {/* TABLE COLUMNS */}
  const columns = [ 
    {
      flex: 0.7, field: 'data', headerName: 'Name', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueFirstName = params.value.firstName;
        const valueLastName = params.value.lastName;
        const valueSpecialization = params.value.spec
        return `${valueFirstName} ${valueLastName}, ${valueSpecialization}`;
      },
      renderCell: (params) => (
        <>
          <Avatar {...stringAvatar(params.value.firstName)} />
          <div>
            <Typography variant="body2" sx={{ ml: '5%' }}>{params.value.firstName}{' '}{params.value.lastName}</Typography>
            <Typography color="textSecondary" variant="caption" sx={{ ml: '5%' }}>{params.value.spec}</Typography>
          </div>
        </>
      )
    },
    { 
      flex: 0.4, field: 'degree', headerName: 'Degree', headerClassName: 'super-app-theme--header', cellClassName: 'super-app' 
    },
    {
      flex: 0.45, field: 'experience', headerName: 'Experience', headerClassName: 'super-app-theme--header',
      valueFormatter: (params) => {
        const valueNumber = params.value.experience;
        return `${valueNumber}`;
      },
      renderCell: (params) => (
        <>
            <Typography variant="body2">{params.value.experience}{' Year(s) Of Experience'}</Typography>
        </>
      )
    },
    {
      flex: 0.7, field: 'hospitalData', headerName: 'Hospital', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueHospitalName = params.value.hospitalName;
        const valueHospitalContact = params.value.hospitalContact;
        return `${valueHospitalName}, ${valueHospitalContact}`;
      },
      renderCell: (params) => (
        <>
        <Avatar {...stringAvatar(params.value.hospitalName)} />
        <div>
          <Typography variant="body2" sx={{ ml: '5%' }}>{params.value.hospitalName}</Typography>
          <Typography color="textSecondary" variant="caption" sx={{ ml: '5%' }}>{params.value.hospitalContact}</Typography>
        </div>
      </>
      )
    },
    {
      flex: 0.2, field: 'gender', headerName: 'Gender', headerClassName: 'super-app-theme--header',
      valueFormatter: (params) => {
        const valueGender = params.value.gender;
        return `${valueGender}`;
      },
      renderCell: (params) => (
        <div>
          {params.value.gender === 'female' ?
            (<Tag color='pink' style={{ borderRadius: '2vh' }}>Female</Tag>)
            :
            (<Tag color='blue' style={{ borderRadius: '2vh' }}>Male</Tag>)
          }
        </div>
      )
    },
    {
      flex: 0.4, field: 'docid', headerName: 'Actions', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      renderCell: (params) => (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Popconfirm placement="bottomRight" title="Are you sure to delete this task?"
            onConfirm={handleSuccessClick(params.value.docId)} onCancel={handleErrorClick} okText="Yes" cancelText="No">
            <IconButton aria-label="more" id="long-button" size='small' color='error'>
              <DeleteIcon />
            </IconButton>
          </Popconfirm>

          {/* <IconButton aria-label="more" id="long-button" size='small' color='info' onClick={()=>{goToNextPage(params.value.docId)}}>
            <ArrowForwardIcon />
          </IconButton> */}
        </div>
      )
    }
  ];

  const goToNextPage = (docid) => {
    navigate(''+docid, {doctor})
  };

  return (
    // console.log('days are:', schedule),
    <Grid container rowSpacing={1} columnSpacing={1} >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={10} style={{ padding: '1%' }}>

          <div role="presentation"> {/** BreadCrumbs Div **/}
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" variant='caption' color="inherit" href="http://localhost:3000/dashboard">
                Dashboard
              </Link>
              <Typography variant='caption' color="text.primary">Doctors</Typography>
            </Breadcrumbs>
          </div>

          <Grid container rowSpacing={1} style={{ marginTop: '1%' }}> 
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} > {/** Search Input Grid **/}
              <TextField style={{ width: '100%' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search By Doctor First Name & PMC Number....."
                autoComplete='off'
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                size='small'
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
              <Stepper />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: '100vh', width:'100%', marginTop: '1%' }}>
              <DataGrid 
                xyz="fade right-100%"
                style={{ padding: '1%' }}
                getRowId={(row) => row.id}
                components={{ Toolbar: GridToolbar, Pagination: CustomPagination, NoRowsOverlay: CustomNoRowsOverlay,}}
                disableColumnFilter
                columns={columns}
                rows={rows}
                pagination
                pageSize={10}
                rowsPerPageOptions={[10]}
                sx={{
                  '& .super-app-theme--header': {
                    fontWeight: '800',
                  },
                  '& .super-app': {
                    textTransform: 'capitalize',
                  },
                }}
              />
            </Grid>
          </Grid>

        </Paper>
      </Grid>
       {/* -------------------------------------------------------------------------------------------------------------- */}
        <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
          <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Doctor Has Been Deleted Successfully!</Alert>
        </Snackbar>

        <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
          <Alert severity="error" variant='filled' onClose={handleErrorClose}>Doctor Has Not Been Deleted!</Alert>
        </Snackbar>
        {/* -------------------------------------------------------------------------------------------------------------- */}
    </Grid>
  )
}