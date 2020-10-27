import React from 'react';
import { Container, Button, TextField } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default class PasswordResetScreen extends React.Component{
    render(){
        return (
            <Container className='screen'>

                <ListAltIcon/>
                <div className='title'>Todo App</div>
                <div className='description'>Best App To Get Organized</div>

                <TextField
                    className='text-field'
                    label="Password"
                    variant="filled"
                    fullWidth={true}
                    type='password'
                />

                <TextField
                    className='text-field'
                    label="Confirm Password"
                    variant="filled"
                    fullWidth={true}
                    type='password'
                />

                <Button className='btn' variant="contained" color="primary">Reset Password</Button>
                <div className='forgot-link'>Login</div>

            </Container>
        )
    }
}