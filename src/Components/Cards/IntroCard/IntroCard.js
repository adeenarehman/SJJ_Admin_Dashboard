import React from 'react'
import '../Card.css'
import {
    Grid,
    Paper,
    Box,
    Typography,
    Avatar,
    Button
} from '@mui/material'

export default function IntroCard() {

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
          color += `00${value.toString(16)}`.slice(-2);
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

    return (
        <Grid container columnSpacing={1} rowSpacing={1} style={{ backgroundColor: 'none' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ backgroundColor: 'none' }}>
                <Paper elevation={10} className='introCardPaperContainer' style={{borderRadius:'2vh'}}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='helloCardItemContainer'>
                            {/* <Avatar sx={{ width: 50, height: 50 }}>N</Avatar> */}
                            <Avatar {...stringAvatar(localStorage.getItem("User_First_Name"))} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='helloCardItemContainer'>
                            <Typography variant='h5' primary className='introCardText'>
                                {localStorage.getItem("User_First_Name")}{' '}{localStorage.getItem("User_Last_Name")}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='helloCardItemContainer'>
                            <Typography variant='subtitle2'  className='introCardText'>
                                {localStorage.getItem("User_City")}{', '}{localStorage.getItem("User_Country")}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='helloCardItemContainer'>
                            {localStorage.getItem("User_Designation") == 1 ?
                                (
                                    <Typography variant='subtitle2' >
                                        Admin
                                    </Typography>
                                )
                                :
                                (
                                    <Typography variant='subtitle2' secondary>
                                        Sub-Admin
                                    </Typography>
                                )
                            }
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='helloCardItemContainer'>
                            <Button>Edit Profile</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}
