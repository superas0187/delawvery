import React from 'react'
// import {Link} from "react-router-dom"
import logo from '../dwlawveryLogo.png'
import { Container, AppBar, Typography,Grid } from '@material-ui/core'


const Navbar = () => {
    return (
        <Grid className="header" xs={12} container justifyContent="center" align="stretch">
            <Grid item xs className='list' component="ul">
                <Typography component="li" href="#">Home</Typography>
                <Typography component="li">Quiz</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography component="img" height="50" width="130" src={logo} alt='...' ></Typography>
            </Grid>
        </Grid>
            
    )
}

export default Navbar

