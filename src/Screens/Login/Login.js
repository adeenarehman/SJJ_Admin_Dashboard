// // import React, {useState,useEffect} from 'react';
// // // import '../Form.css'
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import Link from '@mui/material/Link';
// // import Paper from '@mui/material/Paper';
// // import Box from '@mui/material/Box';
// // import Grid from '@mui/material/Grid';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { useNavigate } from 'react-router-dom'
// // import axios from 'axios'
// // import { Alert } from 'antd';


// // function Copyright(props) {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://saifullahjunaidjamshed.com/">
// //         SJJ Digital HealthCare
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// // const theme = createTheme();

// // export default function SignInSide() {

// //   //ADD MODAL STATES
// //   const [loginEmail, setLoginEmail] = useState('');
// //   const [loginPassword, setLoginPassword] = useState('');
// //   const [loginUserData, setLoginUserData] = useState([]);

// //   let navigate = useNavigate();

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     const data = new FormData(event.currentTarget);
// //     console.log({
// //       email: data.get('email'),
// //       password: data.get('password'),
// //     });
// //   };

// //   const Login = () => {
// //     // console.log('aya iss methid mein')
// //     axios.post('http://localhost:3001/hospital-login', {
// //       panel_user_email: loginEmail,
// //       panel_user_password: loginPassword,
// //     })
// //     .then((response) => {
// //       if (response.data.message) {
// //         console.log('response: ',response.data.message);  
// //         // AlertMessage();
// //       } else {
// //         setLoginUserData(response.data[0])
// //         localStorage.setItem("loginFirstName", response.data[0].panel_user_first_name)
// //         localStorage.setItem("loginLastName", response.data[0].panel_user_last_name)
// //         localStorage.setItem("loginDesignation", response.data[0].designation_uid)
// //         localStorage.setItem("HospitalUid", response.data[0].hospital_uid)
// //         localStorage.setItem("loginID", response.data[0].panel_user_id)
// //         // // localStorage.setItem("User_Password", response.data[0].panel_user_password)
// //         navigate('/dashboard')
// //       }
// //     })
// //   }
  
// //   return (
// //     // console.log('ye hai array mein: ', localStorage.getItem("User_Name")),
// //     <ThemeProvider theme={theme}>
// //       <Grid container component="main" sx={{ height: '100vh' }}>
// //         <CssBaseline />
// //         <Grid
// //           item
// //           xs={false}
// //           sm={4}
// //           md={7}
// //           sx={{
// //             backgroundImage: 'url(https://saifullahjunaidjamshed.com/static/media/slider-1.5705df38b5026ad08b52.jpg)',
// //             backgroundRepeat: 'no-repeat',
// //             backgroundColor: (t) =>
// //               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
// //             backgroundSize: 'contain',
// //             backgroundPosition: 'center',
// //           }}
// //         />
// //         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ display: 'flex', alignItems: 'center' }}>
// //           <Box
// //             sx={{
// //               my: 8,
// //               mx: 4,
// //               display: 'flex',
// //               flexDirection: 'column',
// //               alignItems: 'center',
// //               //   backgroundColor:'red'
// //             }}
// //           >
// //             {/* <div className='loginFormLogo' style={{backgroundColor:'red'}}></div> */}
// //             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// //               <LockOutlinedIcon />
// //             </Avatar>
// //             <Typography component="h1" variant="h5">
// //               Sign in
// //             </Typography>
// //             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
// //               <TextField
// //                 margin="normal"
// //                 size='small'
// //                 required
// //                 fullWidth
// //                 id="email"
// //                 label="Email Address"
// //                 name="email"
// //                 autoFocus
// //                 autoComplete="off"
// //                 value={loginEmail}
// //                 onChange={e => setLoginEmail(e.target.value)}
// //               />
// //               <TextField
// //                 margin="normal"
// //                 size='small'
// //                 required
// //                 fullWidth
// //                 name="password"
// //                 label="Password"
// //                 type="password"
// //                 id="password"
// //                 autoComplete="off"
// //                 value={loginPassword}
// //                 onChange={e => setLoginPassword(e.target.value)}
// //               />
// //               <Button
// //                 type="submit"
// //                 fullWidth
// //                 variant="contained"
// //                 sx={{ mt: 3, mb: 2 }}
// //                 onClick={() => {Login()}}
// //               >
// //                 Sign In
// //               </Button>
// //               <Copyright sx={{ mt: 5 }} />
// //             </Box>
// //           </Box>
// //         </Grid>
// //       </Grid>
// //     </ThemeProvider>
// //   );
// // }

// import React, {useState} from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://saifullahjunaidjamshed.com/">
//         https://saifullahjunaidjamshed.com/
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn() {

//   let navigate = useNavigate();

//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [loginUserData, setLoginUserData] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });

//     axios.post('http://localhost:3001/hospital-login', {
//       panel_user_email: loginEmail,
//       panel_user_password: loginPassword,
//     })
//     .then((response) => {
//       if (response.data.message) {
//         console.log('response: ',response.data.message);  
//         // AlertMessage();
//       } else {
//         setLoginUserData(response.data[0])
//         localStorage.setItem("loginFirstName", response.data[0].panel_user_first_name)
//         localStorage.setItem("loginLastName", response.data[0].panel_user_last_name)
//         localStorage.setItem("loginDesignation", response.data[0].designation_uid)
//         localStorage.setItem("HospitalUid", response.data[0].hospital_uid)
//         localStorage.setItem("loginID", response.data[0].panel_user_id)
//         // // localStorage.setItem("User_Password", response.data[0].panel_user_password)
//         navigate('/dashboard')
//       }
//     })
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={loginEmail}
//               onChange={e => setLoginEmail(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={loginPassword}
//               onChange={e => setLoginPassword(e.target.value)}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             {/* <Grid container justifyContent="flex-end">
//               <Grid item >
//                 <Link href="#" variant="body2" onClick={()=>{navigate('/sign-up')}}>
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid> */}
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

import React, {useState,useEffect} from 'react';
import './Login.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import * as AuthLoginAction from '../../Redux/Actions/action';
import Image from '../../Assets/LoginImage.jpg'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://saifullahjunaidjamshed.com/">
        SJJ Digital HealthCare
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {

  // const dispatch = useDispatch();
  // const { UserLogin } = useSelector(state => state.UserLogin)
  // const { loginIsLoggedIn } = useSelector(state => state.loginIsLoggedIn)

  //ADD MODAL STATES
  const [loginEmail, setLoginEmail] = useState('admin@gmail.com');
  const [loginPassword, setLoginPassword] = useState('Admin123');
  // const [loginUserData, setLoginUserData] = useState([]);

  let navigate = useNavigate();

  // SNACKBAR STATES
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [state, setState] = React.useState({ open: false, vertical: 'top', horizontal: 'center',});
  const { vertical, horizontal, open } = state;
   // SNACKBAR FUNCTIONS
   const handleSuccessClick = () => {
    console.log('aya')
    setOpenSuccess(true);
  };
  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
    setOpenSuccess(false);
  };

  const handleErrorClick = () => {
    console.log('error aya')
    setOpenError(true);
  };
  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
    setOpenError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!loginEmail.trim()){
      alert('Enter Email')
    } else if (!loginPassword.trim()){
      alert('Enter password')
    } else{
      // dispatch(AuthLoginAction.AuthLogin(loginEmail, loginPassword))
      
      // if(loginIsLoggedIn !== null && loginIsLoggedIn !== ''){
if(loginEmail == 'admin@gmail.com' && loginPassword == 'Admin123' ){
        handleSuccessClick()
localStorage.setItem('loginDesignation', 1)
localStorage.setItem('isLoggedIn', 1)
        navigate('/dashboard')
          }
          else{
            handleErrorClick()
          }
    }
    
  };

  // const Login = () => {
  //   // console.log('aya iss methid mein')
  //   axios.post('http://localhost:3001/hospital-login', {
  //     panel_user_email: loginEmail,
  //     panel_user_password: loginPassword,
  //   })
  //   .then((response) => {
  //     if (response.data.message) {
  //       console.log('response: ',response.data.message);  
  //       // AlertMessage();
  //     } else {
  //       setLoginUserData(response.data[0])
  //       localStorage.setItem("loginFirstName", response.data[0].panel_user_first_name)
  //       localStorage.setItem("loginLastName", response.data[0].panel_user_last_name)
  //       localStorage.setItem("loginDesignation", response.data[0].designation_uid)
  //       localStorage.setItem("HospitalUid", response.data[0].hospital_uid)
  //       localStorage.setItem("loginID", response.data[0].panel_user_id)
  //       // // localStorage.setItem("User_Password", response.data[0].panel_user_password)
  //       navigate('/dashboard')
  //     }
  //   })
  // }
  return (
    // console.log('ye hai array mein: ', localStorage.getItem("User_Name")),
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid className='image'
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: ,
            // backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            // backgroundSize: 'contain',
            // backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
                // backgroundColor:'red'
            }}
          >
            {/* <div className='loginFormLogo' style={{backgroundColor:'red'}}></div> */}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                size='small'
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus='admin@gmail.com'
                value='admin@gmail.com'
                onChange={e => setLoginEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                size='small'
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                autoFocus='Admin123'
                value='Admin123'
                onChange={e => setLoginPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // onClick={() => {Login()}}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* -------------------------------------------------------------------------------------------------------------- */}
      <Snackbar open={openSuccess} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleSuccessClose}>
          <Alert severity="success" variant='filled' onClose={handleSuccessClose}>Login Successfully!</Alert>
        </Snackbar>

        <Snackbar open={openError} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleErrorClose}>
          <Alert severity="error" variant='filled' onClose={handleErrorClose}>Error! Please Enter correct Email/Password combination</Alert>
        </Snackbar>
        {/* -------------------------------------------------------------------------------------------------------------- */}

    </ThemeProvider>
  );
}