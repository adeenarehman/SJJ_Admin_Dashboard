import React, { useState, useEffect } from 'react'
import { Grid, TextField, InputAdornment, Typography, Avatar, Pagination, Chip, Box } from '@mui/material'
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { Tag, Badge } from 'antd';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
// import { useDispatch, useSelector } from 'react-redux';
// import * as onlineApppointmentAction from '../../../Redux/Actions/action';


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

const onlineappointment = [
  {
    appointment_id: 1,
    booking_id: '12459864',
    patient_name: 'Jane Doe',
    patient_contact: '12496624867',
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 1',
    specialization_name: 'Gynaecologist',
    hospital_name: 'Hospital 6',
    hospital_contact: '-',
    selected_day: 'Monday',
    selected_token: '9:00',
    shift_name: 'Morning',
    booking_status_uid: 0,
    status_name: 'Pending',
    payment_uid: 2,
    payment_name: 'Unpaid',
    paid_amount: '500'
  },
  {
    appointment_id: 2,
    booking_id: '12345664',
    patient_name: 'Johnny',
    patient_contact: '32156423456',
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor',
    specialization_name: 'General Surgeon',
    hospital_name: 'Hospital 1',
    hospital_contact: '-',
    selected_day: 'Wenesday',
    selected_token: '5:30',
    shift_name: 'Afternoon',
    booking_status_uid: 1,
    status_name: 'Completed',
    payment_uid: 1,
    payment_name: 'Paid',
    paid_amount: '1500'
  },
  {
    appointment_id: 3,
    booking_id: '12453454',
    patient_name: 'Sarah',
    patient_contact: '1234546867',
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 2',
    specialization_name: 'General Physician',
    hospital_name: 'hospital 4',
    hospital_contact: '-',
    selected_day: 'Saturday',
    selected_token: '6:00',
    shift_name: 'Evening',
    booking_status_uid: 0,
    status_name: 'Pending',
    payment_uid: 2,
    payment_name: 'Unpaid',
    paid_amount: '1000'
  },
  {
    appointment_id: 4,
    booking_id: '46793454',
    patient_name: 'Lily',
    patient_contact: '18674631257',
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 3',
    specialization_name: 'Cardiologist',
    hospital_name: 'hospital 2',
    hospital_contact: '-',
    selected_day: 'Sunday',
    selected_token: '9:00',
    shift_name: 'Morning',
    booking_status_uid: 3,
    status_name: 'Cancelled',
    payment_uid: 2,
    payment_name: 'Unpaid',
    paid_amount: '2000'
  },
  {
    appointment_id: 5,
    booking_id: '43456454',
    patient_name: 'Fatima',
    patient_contact: '1866434257',
    doctor_first_name: 'Testing',
    doctor_last_name: 'Doctor 8',
    specialization_name: 'Dermatologist',
    hospital_name: 'hospital 5',
    hospital_contact: '-',
    selected_day: 'Wednesday',
    selected_token: '7:00',
    shift_name: 'Evening',
    booking_status_uid: 2,
    status_name: 'Missed',
    payment_uid: 2,
    payment_name: 'Unpaid',
    paid_amount: '6000'
  },
]

export default function OnlineAppointmentTable() {

  // const dispatch = useDispatch();
  // const { onlineappointment } = useSelector(state => state.onlineappointment);

  // useEffect(() => {
  //   dispatch(onlineApppointmentAction.fetchOnlineAppointments());
  // }, [dispatch])

  //SEARCH STATES
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

  //AVATAR COLOR RELATED FUNCTION
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
  //AVATAR NAME RELATED FUNCTION
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  //APPOINTMENT STATUS BADGE FUNCTIONS
  const StyledPendingBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      // backgroundColor: '#FFC300',
      // color: '#FFC300',
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

  // const StyledCompleteBadge = styled(Badge)(({ theme }) => ({
  //   '& .MuiBadge-badge': {
  //     // backgroundColor: '#388e3c',
  //     // color: '#388e3c',
  //     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  //     '&::after': {
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%',
  //       borderRadius: '50%',
  //       animation: 'ripple 1.2s infinite ease-in-out',
  //       border: '1px solid currentColor',
  //       content: '""',
  //     },
  //   },
  //   '@keyframes ripple': {
  //     '0%': {
  //       transform: 'scale(.8)',
  //       opacity: 1,
  //     },
  //     '100%': {
  //       transform: 'scale(2.4)',
  //       opacity: 0,
  //     },
  //   },
  // }));

  // const StyledMissedBadge = styled(Badge)(({ theme }) => ({
  //   '& .MuiBadge-badge': {
  //     // backgroundColor: '#f57c00',
  //     // color: '#f57c00',
  //     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  //     '&::after': {
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%',
  //       borderRadius: '50%',
  //       animation: 'ripple 1.2s infinite ease-in-out',
  //       border: '1px solid currentColor',
  //       content: '""',
  //     },
  //   },
  //   '@keyframes ripple': {
  //     '0%': {
  //       transform: 'scale(.8)',
  //       opacity: 1,
  //     },
  //     '100%': {
  //       transform: 'scale(2.4)',
  //       opacity: 0,
  //     },
  //   },
  // }));

  // const StyledCancelBadge = styled(Badge)(({ theme }) => ({
  //   '& .MuiBadge-badge': {
  //   //   backgroundColor: '#d32f2f',
  //     // color: '#d32f2f',
  //     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  //     '&::after': {
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%',
  //       borderRadius: '50%',
  //       animation: 'ripple 1.2s infinite ease-in-out',
  //       border: '1px solid currentColor',
  //       content: '""',
  //     },
  //   },
  //   '@keyframes ripple': {
  //     '0%': {
  //       transform: 'scale(.8)',
  //       opacity: 1,
  //     },
  //     '100%': {
  //       transform: 'scale(2.4)',
  //       opacity: 0,
  //     },
  //   },
  // }));

  const rows = onlineappointment.filter((val) => {
    if (search == '') {
      return val
    }
    else if (val.patient_name.toLowerCase().includes(search.toLowerCase()) || val.patient_contact.includes(search)) {
      return val
    }
    // return val
  }).map((val) => {
    return {
      id: val.appointment_id,
      bookingID: val.booking_id,
      patientData: { patientName: val.patient_name, patientContact: val.patient_contact },
      doctorData: { doctorFirstName: val.doctor_first_name, doctorLastName: val.doctor_last_name, doctorSpecialization: val.specialization_name },
      hospitalData: { hospitalName: val.hospital_name, hospitalContact: val.hospital_contact },
      appointmentDay: { day: val.selected_day, token: val.selected_token, shift: val.shift_name },
      appointmentStatus: { appointmentStatusID: val.booking_status_uid, appointmentStatus: val.status_name },
      paymentStatus: { paymentStatusID: val.payment_uid, paymentStatusName: val.payment_name },
      paymentAmount: { paymentAmount: val.paid_amount },

    }
  })

  //APPOINTMENTS COLUMN DATA
  const columns = [
    {
      flex: 0.5, field: 'patientData', headerName: 'Patient', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valuepatientName = params.value.patientName;
        const valuepatientContact = params.value.patientContact;
        return `${valuepatientName}, ${valuepatientContact}`;
      },
      renderCell: (params) => (
        <>
          <Avatar {...stringAvatar(params.value.patientName)} />
          <div>
            <Typography variant="body2" sx={{ ml: '5%' }}>{params.value.patientName}</Typography>
            <Typography color="textSecondary" variant="caption" sx={{ ml: '5%' }}>{params.value.patientContact}</Typography>
          </div>

        </>
      )
    },
    {
      flex: 0.5, field: 'doctorData', headerName: 'Doctor', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valuedocFirstName = params.value.doctorFirstName;
        const valuedocLastName = params.value.doctorLastName;
        const valuedocSpec = params.value.doctorSpecialization;
        return `${valuedocFirstName} ${valuedocLastName}, ${valuedocSpec}`;
      },
      renderCell: (params) => (
        <>
          <Avatar {...stringAvatar(params.value.doctorFirstName)} />
          <div>
            <Typography variant="body2" sx={{ ml: '5%' }}>{params.value.doctorFirstName}{' '}{params.value.doctorLastName}</Typography>
            <Typography color="textSecondary" variant="caption" sx={{ ml: '5%' }}>{params.value.doctorSpecialization}</Typography>
          </div>

        </>
      )
    },
    {
      flex: 0.5, field: 'hospitalData', headerName: 'Hospital', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueHospitalName = params.value.hospitalName;
        const valueHospitalContact = params.value.hospitalContact;
        return `${valueHospitalName} ${valueHospitalContact}`;
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
      flex: 0.4, field: 'appointmentDay', headerName: 'Day', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueSelectedDay = params.value.day;
        const valueSelectedToken = params.value.token;
        const valueSelectedShift = params.value.shift;
        return `${valueSelectedDay}, ${'Token: '}${valueSelectedToken}, ${valueSelectedShift}`;
      },
      renderCell: (params) => (
        <div>
          <Typography variant="body2">{params.value.day}</Typography>
          <Typography color="textSecondary" variant="caption">{'Token:'} {params.value.token} ({params.value.shift})</Typography>
        </div>
      )
    },
    {
      flex: 0.3, field: 'paymentAmount', headerName: 'Amount', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueFormatted = params.value.paymentAmount;
        return `Rs. ${valueFormatted}`;
      },
      renderCell: (params) => (
        <div>
          <Typography variant="body2">{'Rs. '}{params.value.paymentAmount}</Typography>
        </div>
      )
    },
    {
      flex: 0.3, field: 'paymentStatus', headerName: 'Payment', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueFormatted = params.value.paymentStatusName;
        return `${valueFormatted}`;
      },
      renderCell: (params) => (
        <div>
          {params.value.paymentStatusID == 1 ?
            (<Tag color="green" style={{ borderRadius: '2vh' }}>{params.value.paymentStatusName}</Tag>)
            : params.value.paymentStatusID == 2 ?
            (<Tag color="red" style={{ borderRadius: '2vh' }}>{params.value.paymentStatusName}</Tag>)
            :null
          }
        </div>
      )
    },
    {
      flex: 0.4, field: 'appointmentStatus', headerName: 'Status', headerClassName: 'super-app-theme--header', cellClassName: 'super-app',
      valueFormatter: (params) => {
        const valueAppointmentStatus = params.value.appointmentStatus;
        return `${valueAppointmentStatus}`;
      },
      renderCell: (params) => (
        <div>
          {params.value.appointmentStatusID === 0 ?
            (
              <Chip label="Pending" variant="filled" color="primary" size="small" />
            )
            : params.value.appointmentStatusID === 1 ?
              (
                <Chip label="Completed" variant="filled" color="success" size="small" />
              )
              : params.value.appointmentStatusID === 2 ?
                (
                  <Chip label="Missed" variant="filled" color="warning" size="small" />
                )
                :
                (
                  <Chip label="Cancelled" variant="filled" color="error" size="small" />
                )
          }
        </div>
      )
    },
  ];

  return (
    // console.log('New Array K kam ka bad : ',onlineappointments),

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
              placeholder="Search By Patient Name & Contact....."
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
              // getRowId={(row) => Math.random()}
              components={{ Toolbar: GridToolbar, Pagination: CustomPagination, NoRowsOverlay: CustomNoRowsOverlay, }}
              disableColumnFilter
              columns={columns}
              rows={rows}
              pagination
              pageSize={10}
              rowsPerPageOptions={[10]}
              sx={{
                // borderColor:'rgb(157, 163, 166)',
                // borderRadius:'1vh',
                '& .super-app-theme--header': {
                  fontWeight: '800',
                  // color:'blue'
                  // backgroundColor: 'rgb(220,220,220)',

                },
                '& .super-app': {
                  textTransform: 'capitalize',
                  // fontWeight:'800',
                },
              }}
            />
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  )
}
