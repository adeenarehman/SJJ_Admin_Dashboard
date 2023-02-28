import React, { useState, useEffect } from 'react'
import {
  Grid, Paper, TextField, InputAdornment, Typography, Breadcrumbs, Avatar, Link, IconButton, Pagination,
  Alert, Snackbar, Box, Button
} from '@mui/material'
import { styled } from '@mui/material/styles';
import { Popconfirm } from 'antd';
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import {Tag} from 'antd'
import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import * as healthcardAction from '../../../Redux/Actions/action';

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
}

const healthcard = [
  {
    healthcard_id: 1,
    healthcard_user_name: 'Kiara',
    healthcard_user_contact: '--',
    healthcard_user_address: 'Defence',
    healthcard_date_of_issue: '2022-09-23T11:56:29.000Z',
    healthcard_date_of_expire: '2023-09-23T11:56:25.000Z',
    healthcard_number: '31254678643618',
    healthcard_status: 1,
    healthcard_fees: 500,
    healthcard_activity: 1
  },
  {
    healthcard_id: 2,
    healthcard_user_name: 'James',
    healthcard_user_contact: '--',
    healthcard_user_address: 'Korangi',
    healthcard_date_of_issue: '2022-01-01T11:56:25.000Z',
    healthcard_date_of_expire: '2022-06-30T11:56:25.000Z',
    healthcard_number: '345464564223',
    healthcard_status: 3,
    healthcard_fees: 500,
    healthcard_activity: 0
  },
  {
    healthcard_id: 3,
    healthcard_user_name: 'Danny',
    healthcard_user_contact: '--',
    healthcard_user_address: 'Clifton',
    healthcard_date_of_issue: '2022-12-15T11:56:25.000Z',
    healthcard_date_of_expire: '2023-11-15T11:56:25.000Z',
    healthcard_number: '214564351435486',
    healthcard_status: 2,
    healthcard_fees: 500,
    healthcard_activity: 1
  },
]

export default function HealthCardTable() {

  let navigate = useNavigate();

  // const dispatch = useDispatch();
  // const { healthcard } = useSelector(state => state.healthcard);
  // const { healthcardActivity } = useSelector(state => state.healthcardActivity);
  // const { delete_single_healthcard } = useSelector(state => state.delete_single_healthcard);

  // // const { delete_single_pharmacy } = useSelector(state => state.delete_single_pharmacy);

  // useEffect(() => {
  //   dispatch(healthcardAction.fetchHealthCards());
  // }, [dispatch])

  //SEARCH DATA STATES
  const [search, setSearch] = useState('');
  // SNACKBAR STATES
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [state, setState] = React.useState({ open: false, vertical: 'top', horizontal: 'center', });
  const { vertical, horizontal, open } = state;

  // SNACKBAR FUNCTIONS
  const handleSuccessClick = (uid) => () => {
    // dispatch(healthcardAction.deleteSingleHealthcard(uid));
    setOpenSuccess(true);
    // dispatch(healthcardAction.fetchHealthCards());
  };
  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // setState({ ...state, open: false });
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
    // setState({ ...state, open: false });
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
        <Box sx={{ mt: 1 }}>Search For Data...</Box>
      </StyledGridOverlay>
    );
  }

  function stringToColor(string) {
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

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  const printDate = (issue,expire) => {
    let issueDate = new Date(issue)
    let expiryDate = new Date(expire)

    const issued = `${issueDate.getDate()}/${issueDate.getMonth()+1}/${issueDate.getFullYear()}`;
    const expired = `${expiryDate.getDate()}/${expiryDate.getMonth()+1}/${expiryDate.getFullYear()}`;
       
    return(
            <Typography variant='body2'>{issued}{' - '}{expired}</Typography>
        );
  }

  const updateActivity = (id, activity) => {
    // dispatch(healthcardAction.updateHealthcardActivity(id, activity));
    // dispatch(healthcardAction.fetchHealthCards());
  }
  const deleteActivity = (id) => {
    // dispatch(healthcardAction.deleteSingleHealthcard(id, activity));
    // dispatch(healthcardAction.fetchHealthCards());
  }

  const rows = healthcard.filter((val) => {
    if (search == '') {
      return val
    }
    else if (val.healthcard_user_name.toLowerCase().includes(search.toLowerCase()) || val.healthcard_number.includes(search)) {
      return val
    }
    // return val
  })
    .map((val) => {
      return {
        id: val.healthcard_id,
        nameContact: { name: val.healthcard_user_name, contact: val.healthcard_user_contact },
        duration: { issue: val.healthcard_date_of_issue, expire: val.healthcard_date_of_expire },
        cardNumber: val.healthcard_number,
        address: val.healthcard_user_address,
        status: {status: val.healthcard_status},
        fee: {fee: val.healthcard_fees},
        activity: {activity: val.healthcard_activity, ID: val.healthcard_id},
        healthcardId:{healthcardID: val.healthcard_id }
      }
    })

  const columns = [
    {
      flex: 0.5, field: 'cardNumber', headerName: 'Card #', headerClassName: 'super-app-theme--header', cellClassName: 'super-app'
    },
    {
      flex: 0.5, field: 'nameContact', headerName: 'User Name', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueName = params.value.name;
        const valueContact = params.value.contact;
        return `${valueName}, ${valueContact}`;
      },
      renderCell: (params) => (
        <>
          <Avatar {...stringAvatar(params.value.name)} />
          <div>
            <Typography variant="body2" sx={{ ml: '5%' }}>{params.value.name}</Typography>
            <Typography variant="caption" color="textSecondary" sx={{ ml: '5%' }}>{params.value.contact}</Typography>
          </div>
        </>
      )
    },
    {
      flex: 0.5, field: 'address', headerName: 'Address', headerClassName: 'super-app-theme--header', cellClassName: 'super-app'
    },
    {
      flex: 0.5, field: 'duration', headerName: 'Validity', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueIssue = params.value.issue;
        const valueExpire = params.value.expire;
        return `${valueIssue}, ${valueExpire}`;
      },
      renderCell: (params) => (
        <div style={{display:'flex', flexDirection:'row'}}>
            <Typography variant="body2">{printDate(params.value.issue,params.value.expire)}</Typography>
          </div>
      )
    },
    {
      flex: 0.5, field: 'fee', headerName: 'Amount', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueFees = params.value.fee;
        return `${valueFees}`;
      },
      renderCell: (params) => (
                <div>
            <Typography variant="body2">{'Rs. '}{params.value.fee}</Typography>
          </div>
      )
    },
    {
      flex: 0.4, field: 'status', headerName: 'Status', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',   
      renderCell: (params) => (
        <>
          {params.value.status == 1 ?
          (<Tag color='blue' style={{ borderRadius: '2vh' }}>Pending</Tag>)
          : params.value.status == 2 ?
          (<Tag color='green' style={{ borderRadius: '2vh' }}>Accepted</Tag>)
          : params.value.status == 3 ?
          (<Tag color='red' style={{ borderRadius: '2vh' }}>Rejected</Tag>)
          : console.log('gotit')
          }
        </>
      )
    },
    {
      flex: 0.4, field: 'activity', headerName: 'Activity', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',   
      renderCell: (params) => (
        <>
        <Button onClick={()=>{params.value.activity == 1 ? (updateActivity(params.value.ID, 0)) : (updateActivity(params.value.ID, 1))}}>
          {params.value.activity == 1 ? ('Activate') : ('Deactivate')}
        </Button>
        </>
      )
    },
    {
      flex: 0.5, field: 'healthcardId', headerName: 'Actions', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      renderCell: (params) => (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Popconfirm placement="bottomRight" title="Are you sure to delete this task?"
            onConfirm={handleSuccessClick(params.value.healthcardID)} onCancel={handleErrorClick} okText="Yes" cancelText="No">
            <IconButton aria-label="more" id="long-button" size='small' color='error'>
              <DeleteIcon />
            </IconButton>
          </Popconfirm>

          {/* <IconButton aria-label="more" id="long-button" size='small' color='info' 
          onClick={() => { goToNextPage(params.value.healthcardID) }}
          >
            <ArrowForwardIcon />
          </IconButton> */}
        </div>
      )
    }
  ];

  const goToNextPage = (docId) => {
    console.log('id hai ye: ', docId)
    navigate( '' +docId)
  };


  return (
    <Grid container rowSpacing={1} columnSpacing={1} >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={10} style={{ padding: '1%' }}>

          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" variant='caption' color="inherit" href="http://localhost:3000/dashboard">
                Dashboard
              </Link>
              <Typography variant='caption' color="text.primary">HealthCard Registrations</Typography>
            </Breadcrumbs>
          </div>

          <Grid container rowSpacing={1} style={{ marginTop: '1%' }}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
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
                placeholder="Search By Pharmacy Name & Contact....."
                autoComplete='off'
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                size='small'
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: '95vh', marginTop: '1%' }}>
              <DataGrid
                style={{ padding: '1%' }}
                components={{ Toolbar: GridToolbar, Pagination: CustomPagination, NoRowsOverlay: CustomNoRowsOverlay, }}
                disableColumnFilter
                columns={columns}
                rows={rows}
                pagination
                pageSize={10}
                rowsPerPageOptions={[10]}
                sx={{
                  '& .super-app': {
                    textTransform: 'capitalize'
                  },
                }}
              />
            </Grid>
          </Grid>

        </Paper>
      </Grid>
      {/* -------------------------------------------------------------------------------------------------------------- */}
      <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
        <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Pharmacy Has Been Deleted Successfully!</Alert>
      </Snackbar>

      <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
        <Alert severity="error" variant='filled' onClose={handleErrorClose}>Pharmacy Has Not Been Deleted!</Alert>
      </Snackbar>
      {/* -------------------------------------------------------------------------------------------------------------- */}
    </Grid>
  )
}
