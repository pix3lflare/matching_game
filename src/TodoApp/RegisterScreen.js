import React from 'react';
import { Container, Button, TextField } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default class RegisterScreen extends React.Component{
    render(){
                return (
            <Container className='screen'>

                <ListAltIcon/>
                <div className='title'>Todo App</div>
                <div className='description'>Best App To Get Organized</div>

                <div className='input-row'>

                    <TextField
                        className='text-field'
                        label="First Name"
                        variant="filled"
                        fullWidth={true}
                    />

                    <TextField
                        className='text-field'
                        label="Last Name"
                        variant="filled"
                        fullWidth={true}
                    />

                </div>

                <TextField
                    className='text-field'
                    label="Phone"
                    variant="filled"
                    fullWidth={true}
                />

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

                <Button className='btn' variant="contained" color="primary">Register</Button>
                <div className='forgot-link'>Already have account?</div>

            </Container>
        )
    }
}