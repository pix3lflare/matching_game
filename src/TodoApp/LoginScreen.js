import React from 'react';
import { Container, Button, TextField } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default class LoginScreen extends React.Component{
    render(){
        return (
            <Container className='screen'>

                <ListAltIcon/>
                <div className='title'>Todo App</div>
                <div className='description'>Best App To Get Organized</div>

                <TextField
                    className='text-field'
                    label="Email"
                    variant="filled"
                    fullWidth={true}
                />

                <TextField
                    type='password'
                    className='text-field'
                    label="Password"
                    variant="filled"
                    fullWidth={true}
                />

                <Button className='btn' variant="contained" color="primary">Login</Button>
                <div className='forgot-link'>Forgot Password?</div>

            </Container>
        )
    }
}