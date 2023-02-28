import React from 'react'
import './BookAppointment.css'
import { Grid, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material'

export default function BookAppointment() {
    return (
        <Grid container sx={{ backgroundColor: 'blue' }}>
            <Grid item xs={12} md={12} className='bookAppGridContainer'>

                <Container className='bookAppContiner'>
                    <Grid item xs={12} sm={6} className='bookAppGridSelectContainer'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Doctor...</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Doctor..."
                            // value={age}
                            // onChange={handleChange}
                            >
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6} className='bookAppGridSelectContainer'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Hospital...</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Hospital...."
                            // value={age}
                            // onChange={handleChange}
                            >
                            </Select>
                        </FormControl>
                    </Grid>

                </Container>

            </Grid>
        </Grid>
    )
}
