import React from 'react';
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import PasswordResetScreen from './PasswordResetScreen'
import TodoListScreen from './TodoListScreen'


export default class TodoApp extends React.Component{
    render(){
        return (
            <div className='todo-app'>
                {/*<HomeScreen/>*/}
                <LoginScreen/>
                {/*<RegisterScreen/>*/}
                {/*<ForgotPasswordScreen/>*/}
                {/*<PasswordResetScreen/>*/}
                {/*<TodoListScreen/>*/}
            </div>
        )
    }
}