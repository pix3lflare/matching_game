import React from 'react';
import { Container, Button, TextField } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default class RegisterScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                password: '',
            },

            errorFields: [],
        }
    }

    updateUser = (field, value) => {
        // Clear Errors for field
        const errorFields = this.state.errorFields.filter((f) => f!=field)
        const user = Object.assign({}, this.state.user, {[field]: value})
        this.setState({user, errorFields})
    }

    handleRegister = () => {
        const {firstName, lastName, phone, email, password} = this.state.user
        console.log('Register User')

        // Validate Required Fields
        let errorFields = []
        if(firstName == ''){
            errorFields.push('firstName')
        }

        if(lastName == ''){
            errorFields.push('lastName')
        }

        if(phone == ''){
            errorFields.push('phone')
        }

        if(email == ''){
            errorFields.push('email')
        }

        if(password == ''){
            errorFields.push('password')
        }

        this.setState({errorFields})

        // Register User
        if( errorFields.length == 0 ){
            console.log('No Error. Submit Form')
        }

    }

    render(){
        const {firstName, lastName, phone, email, password} = this.state.user
        const {errorFields} = this.state

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
                        value={firstName}
                        error={errorFields.indexOf('firstName') >= 0 ? true : false}
                        onChange={(e) => this.updateUser('firstName', e.target.value)}
                    />

                    <TextField
                        className='text-field'
                        label="Last Name"
                        variant="filled"
                        fullWidth={true}
                        value={lastName}
                        onChange={(e) => this.updateUser('lastName', e.target.value)}
                    />

                </div>

                <TextField
                    className='text-field'
                    label="Phone"
                    variant="filled"
                    fullWidth={true}
                    value={phone}
                    onChange={(e) => this.updateUser('phone', e.target.value)}
                />

                <TextField
                    className='text-field'
                    label="Email"
                    type='email'
                    variant="filled"
                    fullWidth={true}
                    value={email}
                    onChange={(e) => this.updateUser('email', e.target.value)}
                />

                <TextField
                    type='password'
                    className='text-field'
                    label="Password"
                    variant="filled"
                    fullWidth={true}
                    value={password}
                    onChange={(e) => this.updateUser('password', e.target.value)}
                />

                <Button
                    className='btn'
                    variant="contained"
                    color="primary"
                    onClick={this.handleRegister}
                >Register</Button>

                <div className='forgot-link'>Already have account?</div>

            </Container>
        )
    }
}