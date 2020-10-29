import React from 'react';
import { Container, Button, TextField } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';



export default class LoginScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            errorFields: [],
            loginError: '',
        }
    }

    updateUser = (field, value) => {
        // Clear Errors for field
        const errorFields = this.state.errorFields.filter((f) => f!=field)
        const updatedState = Object.assign({}, this.state, {[field]: value, errorFields})
        this.setState(updatedState)
    }

    handleLogin = async () => {
        console.log('Handle Login')
        const {email, password} = this.state

        // Validate Required Fields
        let errorFields = []

        if(email == ''){
            errorFields.push('email')
        }

        if(password == ''){
            errorFields.push('password')
        }

        this.setState({errorFields, loginError: ''})

        // Login User
        if( errorFields.length == 0 ){
            console.log('No Error. Submit Form')
            let loginURL = 'http://localhost:9000/api/users/login/'
            const response = await fetch(loginURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password})
            });

            let respJson = await response.json()
            if(response.status==200){
                const {token} = respJson
                console.log('Login Successful')
                console.log('Token: ', token)
            }else{
                console.log('Server-side Validation Failed')
                console.log(respJson)
                this.setState({loginError: respJson.message})
            }
        }

    }

    render(){
        const {email, password, errorFields, loginError} = this.state
        return (
            <Container className='screen'>

                <ListAltIcon/>
                <div className='title'>Todo App</div>
                <div className='description'>Best App To Get Organized</div>
                {loginError && <div className='alert-msg'>{loginError}</div>}

                <TextField
                    className='text-field'
                    label="Email"
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
                    onClick={this.handleLogin}
                >Login</Button>
                <div className='forgot-link'>Forgot Password?</div>

            </Container>
        )
    }
}