import React from 'react';
import { Container, Button } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default class HomeScreen extends React.Component{
    render(){
        return (
            <Container className='screen'>

                <ListAltIcon/>
                <div className='title'>Todo App</div>
                <div className='description'>Best App To Get Organized</div>

                <Button className='btn' variant="contained" color="primary">Login</Button>
                <Button className='btn' variant="contained" color="primary">Register</Button>

                <div className='forgot-link'>Forgot Password?</div>

            </Container>
        )
    }
}