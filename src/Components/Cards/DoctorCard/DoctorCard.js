import React, {useState, useEffect} from 'react'
import {
    Grid,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function DoctorCard() {

    let navigate = useNavigate();

//     const [limiteddocData, setLimitedDocData] = useState([]);

//   useEffect(() => {
//     getLimitDocData();
//   }, [])
  

//   const getLimitDocData = () => {
//     const headers = {"Content-type": 'aaplication/x-www-form-urlencoded', "Access-Control-Allow-Origin":"*"
//   , "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", "Accept": 'application/json'
//   }
//     fetch('http://localhost:3001/get/limited-doctor')
//     .then((res) => res.json())
//             .then((json) => {
//                 setLimitedDocData(json)
//             })
//   }

    return (
        <Grid container rowSpacing={1} columnSpacing={1} style={{backgroundColor:'none'}}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <Paper elevation={10}  style={{paddingLeft:'1%', paddingRight:'1%', borderRadius:'1.5vh'}}>
                <Typography variant='h6' align='left' style={{fontWeight:'bolder', color:'#4f5ace', fontFamily:'Segoe UI'}}>All Doctors</Typography>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight:'bold'}}>Name</TableCell>
                                {/* <TableCell style={{fontWeight:'bold'}}>PMC-Number</TableCell> */}
                                <TableCell style={{fontWeight:'bold'}}>Degree</TableCell>
                                {/* <TableCell style={{fontWeight:'bold'}}>Specialization</TableCell> */}
                                <TableCell style={{fontWeight:'bold'}}>Experience</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                              limiteddocData.map((value, index) => {
                                  return(
                                      <TableRow key={index}>
                                          <TableCell size='small' style={{textTransform:'capitalize', fontSize:'small'}}>{value.doctor_name}</TableCell>
                                          <TableCell size='small' style={{textTransform:'capitalize', fontSize:'small'}}>{value.specialization_name}</TableCell>
                                          <TableCell size='small' style={{textTransform:'capitalize', fontSize:'small'}}>{value.doctor_experience} {'years'}</TableCell>
                                          {/* <TableCell size='small'>{value.doctor_degree}</TableCell> */}
                                      </TableRow>
                                  )
                              })  
                            }
                        </TableBody>
                        {/* <caption style={{width:'100%',display:'flex', alignSelf:'right', backgroundColor:'red'}}>A basic table example with a caption</caption> */}
                    </Table>
                    <Typography variant='subtitle2' align='right' style={{paddingRight:'1%', cursor:'pointer'}}
                    onClick={()=> {navigate('doctors')}}
                    >
                        View More
                    </Typography>
                </Paper>

            </Grid>
        </Grid>
    )
}
