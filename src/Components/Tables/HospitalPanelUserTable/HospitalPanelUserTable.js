import React, { useState, useEffect } from 'react'
import { Grid, TextField, InputAdornment, Typography, Avatar, Badge, IconButton, Pagination, Box, Alert, Snackbar } from '@mui/material'
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { Popconfirm } from 'antd';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactCountryFlag from "react-country-flag"
import AddPanelUserModal from '../../Modals/AddPanelUserModal/AddPanelUserModal'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import * as panelUserAction from '../../../Redux/Actions/action';

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

export default function PanelUserTable() {

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const { paneluser } = useSelector(state => state.paneluser);
  const { delete_single_panel_user } = useSelector(state => state.delete_single_panel_user);

  useEffect(() => {
    dispatch(panelUserAction.fetchPanelUsers());
  }, [dispatch])

  //SEARCH DATA STATES
  const [search, setSearch] = useState('');
  // SNACKBAR STATES
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [state, setState] = React.useState({ open: false, vertical: 'top', horizontal: 'center', });
  const { vertical, horizontal, open } = state;

  // SNACKBAR FUNCTIONS
  const handleSuccessClick = (uid) => () => {
    // setTransition(() => Transition);
    dispatch(panelUserAction.deleteSinglePanelUser(uid));
    setOpenSuccess(true);
    dispatch(panelUserAction.fetchPanelUsers());
  };
  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
    setOpenSuccess(false);
  };

  const handleErrorClick = (newState) => () => {
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

  const StyledActiveBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const StyledInactiveBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#808080',
      color: '#808080',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const rows = paneluser.filter((val) => {
    if (search == '') {
      return val
    }
    else if (val.panel_user_first_name.toLowerCase().includes(search.toLowerCase()) || val.hospital_name.toLowerCase().includes(search.toLowerCase())) {
      return val
    }
    // return val
  })
    .map((val) => {
      return {
        id: val.panel_user_id,
        data: { firstname: val.panel_user_first_name, lastname: val.panel_user_last_name, designation: val.panel_name, loggedIn: val.is_logged_in },
        location: { city: val.panel_user_city, country: val.panel_user_country },
        credentials: { email: val.panel_user_email, password: val.panel_user_password },
        hospitalData: { hospitalName: val.hospital_name, hospitalContact: val.hospital_contact },
        panelUserId: { panelUserId: val.panel_user_id }
      }
    })

  const columns = [
    {
      flex: 0.7, field: 'data', headerName: 'Name', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueFirstName = params.value.firstname;
        const valueLastName = params.value.lastname;
        const valuePanel = params.value.designation;
        return `${valueFirstName} ${valueLastName}, ${valuePanel}`;
      },
      renderCell: (params) => (
        <>
          {params.value.loggedIn === 1 ?
            (<StyledActiveBadge
              color='error'
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar {...stringAvatar(params.value.firstname)} />
            </StyledActiveBadge>)
            :
            (<StyledInactiveBadge
              color='info'
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar {...stringAvatar(params.value.firstname)} />
            </StyledInactiveBadge>)
          }
          <div>
            <Typography variant="body2" sx={{ ml: '5%' }}>{params.value.firstname}{' '}{params.value.lastname}</Typography>
            <Typography color="textSecondary" variant="caption" sx={{ ml: '5%' }}>{params.value.designation}</Typography>
          </div>

        </>
      )
    },
    {
      flex: 0.5, field: 'credentials', headerName: 'Credentials', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      renderCell: (params) => (
        <div>
          <Typography variant="body2">{params.value.email}, </Typography>
          <Typography color="textSecondary" variant="caption"> {params.value.password}</Typography>
        </div>
      )
    },
    {
      flex: 0.5, field: 'hospitalData', headerName: 'Hospital', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueHospitalName = params.value.hospitalName;
        const valueHospitalContact = params.value.hospitalContact;
        return `${valueHospitalName}, ${valueHospitalContact}`;
      },
      renderCell: (params) => (
        <div>
          <Typography variant="body2">{params.value.hospitalName}</Typography>
          <Typography Typography color="textSecondary" variant="caption"> {params.value.hospitalContact}</Typography>
        </div>
      )
    },
    {
      flex: 0.5, field: 'location', headerName: 'Location', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueCity = params.value.city;
        const valueCountry = params.value.country;
        return `${valueCity}, ${valueCountry}`;
      },
      renderCell: (params) => (
        <>
          <ReactCountryFlag countryCode="PK" svg />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="body2" sx={{ ml: '5%' }}>{params.value.city}, </Typography>
            <Typography variant="body2"> {params.value.country}</Typography>
          </div>

        </>
      )
    },
    {
      flex: 0.5, field: 'panelUserId', headerName: 'Actions', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      renderCell: (params) => (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Popconfirm placement="bottomRight" title="Are you sure to delete this task?"
            onConfirm={handleSuccessClick(params.value.panelUserId)} onCancel={handleErrorClick({ vertical: 'top', horizontal: 'center' })} okText="Yes" cancelText="No">
            <IconButton aria-label="more" id="long-button" size='small' color='error'>
              <DeleteIcon />
            </IconButton>
          </Popconfirm>

          <IconButton aria-label="more" id="long-button" size='small' color='info' onClick={() => { goToNextPage(params.value.panelUserId) }}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      )
    }
  ];

  const goToNextPage = (panelUserId) => {
    // setDoctorID(hospid);
    navigate('' + panelUserId)
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={1} >

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container rowSpacing={1}>
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
              placeholder="Search By Name....."
              autoComplete='off'
              id="outlined-basic"
              label="Search..."
              variant="outlined"
              size='small'
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <AddPanelUserModal />
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
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
          <Alert severity="success" variant='filled' onClose={handleSuccessClose}>User Has Been Deleted Successfully!</Alert>
        </Snackbar>

        <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
          <Alert severity="error" variant='filled' onClose={handleErrorClose}>User Has Not Been Deleted!</Alert>
        </Snackbar>
        {/* -------------------------------------------------------------------------------------------------------------- */}
      </Grid>
    </Grid>
  )
}
