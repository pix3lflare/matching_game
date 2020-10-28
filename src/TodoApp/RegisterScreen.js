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
            registrationComplete: false,
            registrationError: '',
        }
    }

    updateUser = (field, value) => {
        // Clear Errors for field
        const errorFields = this.state.errorFields.filter((f) => f!=field)
        const user = Object.assign({}, this.state.user, {[field]: value})
        this.setState({user, errorFields})
    }

    handleRegister = async () => {
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

        this.setState({errorFields, registrationError: ''})

        // Register User
        if( errorFields.length == 0 ){
            console.log('No Error. Submit Form')
            let registerURL = 'http://localhost:9000/api/users/register/'
            const response = await fetch(registerURL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.user)
            });

            if(response.status==200){
                console.log('Registration Successful')
                const user = {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    password: '',
                }
                this.setState({registrationComplete: true, user})
            }else{
                console.log('Server-side Validation Failed')
                let respJson = await response.json()
                console.log(respJson)
                this.setState({registrationError: respJson.message})
            }
        }
    }

    render(){
        const {firstName, lastName, phone, email, password} = this.state.user
        const {errorFields, registrationError, registrationComplete} = this.state

        return (
            <Container className='screen'>

                <ListAltIcon/>
                <div className='title'>Todo App</div>
                <div className='description'>Best App To Get Organized</div>

                {registrationError && <div className='alert-msg'>{registrationError}</div>}
                {registrationComplete && <div className='success-msg'>Registration Success</div>}

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
                        error={errorFields.indexOf('lastName') >= 0 ? true : false}
                        onChange={(e) => this.updateUser('lastName', e.target.value)}
                    />

                </div>

                <TextField
                    className='text-field'
                    label="Phone"
                    variant="filled"
                    fullWidth={true}
                    value={phone}
                    error={errorFields.indexOf('phone') >= 0 ? true : false}
                    onChange={(e) => this.updateUser('phone', e.target.value)}
                />

                <TextField
                    className='text-field'
                    label="Email"
                    type='email'
                    variant="filled"
                    fullWidth={true}
                    value={email}
                    error={errorFields.indexOf('email') >= 0 ? true : false}
                    onChange={(e) => this.updateUser('email', e.target.value)}
                />

                <TextField
                    type='password'
                    className='text-field'
                    label="Password"
                    variant="filled"
                    fullWidth={true}
                    value={password}
                    error={errorFields.indexOf('password') >= 0 ? true : false}
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