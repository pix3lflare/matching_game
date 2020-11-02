import React from 'react';
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import PasswordResetScreen from './PasswordResetScreen'
import TodoListScreen from './TodoListScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class TodoApp extends React.Component{
    render(){
        return (
            <div className='todo-app'>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen/>
                        </Route>

                        <Route path="/login">
                            <LoginScreen/>
                        </Route>

                        <Route path="/register">
                            <RegisterScreen/>
                        </Route>

                        <Route path="/forgot-password">
                            <ForgotPasswordScreen/>
                        </Route>

                        <Route path="/password-reset">
                            <PasswordResetScreen/>
                        </Route>

                        <Route path="/todo-dashboard">
                            <TodoListScreen/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}