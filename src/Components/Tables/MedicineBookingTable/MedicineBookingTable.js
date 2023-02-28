import React, { useState, useEffect } from 'react'
import { Grid, Paper, TextField, InputAdornment, Typography, Breadcrumbs, Avatar, Link, Box, Pagination } from '@mui/material'
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
// import { useDispatch, useSelector } from 'react-redux';
// import * as medicineBookingAction from '../../../Redux/Actions/action';


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

const medicinebooking = [
  {
    medicine_booking_id: 1,
    medicine_booking_user_name: 'James',
    medicine_booking_user_contact: '45312653125',
    medical_store_name: '7-eleven',
    medical_store_contact: '--'
  },
  {
    medicine_booking_id: 2,
    medicine_booking_user_name: 'Farah',
    medicine_booking_user_contact: '56423156453',
    medical_store_name: 'Medicos',
    medical_store_contact: '--'
  },
  {
    medicine_booking_id: 3,
    medicine_booking_user_name: 'Laila',
    medicine_booking_user_contact: '57864531253',
    medical_store_name: 'M. Mart',
    medical_store_contact: '--'
  },
  {
    medicine_booking_id: 4,
    medicine_booking_user_name: 'Shawn',
    medicine_booking_user_contact: '23154867853',
    medical_store_name: 'Grocery Store',
    medical_store_contact: '--'
  },
  {
    medicine_booking_id: 5,
    medicine_booking_user_name: 'Ali',
    medicine_booking_user_contact: '321567864572',
    medical_store_name: 'Pharmacy',
    medical_store_contact: '--'
  },
]

export default function MedicineBookingTable() {

  // const dispatch = useDispatch();
  // const { medicinebooking } = useSelector(state => state.medicinebooking);

  // useEffect(() => {
  //   dispatch(medicineBookingAction.fetchMedicineBookings());
  // }, [dispatch])

  //SEARCH DATA STATES
  const [search, setSearch] = useState('');

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

  const columns = [
    {
      flex: 0.5, field: 'userData', headerName: 'UserName', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      renderCell: (params) => (
        <>
          <Avatar {...stringAvatar(params.value.userName)} />
          <div>
            <Typography variant="body2" sx={{ ml: '5%' }}>{params.value.userName}</Typography>
            <Typography variant="caption" color="textSecondary" sx={{ ml: '5%' }}>{params.value.userContact}</Typography>
          </div>
        </>
      ),
      valueFormatter: (params) => {
        const valueUserName = params.value.userName;
        const valueUserContact = params.value.userContact;
        return `${valueUserName}, ${valueUserContact}`;
      },
    },
    {
      flex: 0.5, field: 'storeData', headerName: 'Store Name', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueStoreName = params.value.storeName;
        const valueStoreContact = params.value.storeContact;
        return `${valueStoreName}, ${valueStoreContact}`;
      },
      renderCell: (params) => (
        <>
            <Avatar {...stringAvatar(params.value.storeName)} />
          <div>
            <Typography variant="body2" sx={{ ml: '5%' }}>{params.value.storeName}</Typography>
            <Typography variant="caption" color="textSecondary" sx={{ ml: '5%' }}>{params.value.storeContact}</Typography>
          </div>
        </>
      )
    },
  ];

  const rows = medicinebooking.filter((val) => {
    if (search == '') {
      return val
    }
    else if (val.medicine_booking_user_name.toLowerCase().includes(search.toLowerCase()) || val.medicine_booking_user_contact.includes(search)) {
      return val
    }
  })
    .map((val) => {
      return {
        id: val.medicine_booking_id,
        userData: { userName: val.medicine_booking_user_name, userContact: val.medicine_booking_user_contact },
        storeData: { storeName: val.medical_store_name, storeContact: val.medical_store_contact },
      }
    })

  return (
    // console.log('medicine bookings: ',medicinebooking),
    <Grid container rowSpacing={1} columnSpacing={1} >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={10} style={{ padding: '1%' }}>

          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" variant='caption' color="inherit" href="http://localhost:3000/dashboard">
                Dashboard
              </Link>
              <Typography variant='caption' color="text.primary">Medicine Bookings</Typography>
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
                placeholder="Search By User Name & Contact....."
                autoComplete='off'
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                size='small'
              />
            </Grid>

            {/* <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
              <AddStoreModal />
            </Grid> */}
          </Grid>

          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: '95vh', marginTop: '1%' }}>
              <DataGrid
                style={{ padding: '1%' }}
                getRowId={(row) => row.id}
                components={{ Toolbar: GridToolbar, Pagination: CustomPagination }}
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
    </Grid>
  )
}
