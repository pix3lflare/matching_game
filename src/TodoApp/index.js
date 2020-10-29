import React from 'react';
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import PasswordResetScreen from './PasswordResetScreen'
import TodoListScreen from './TodoListScreen'

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTliYmFiM2EzODhkMmM1NGI5NWQ1MCIsImVtYWlsIjoidGVzdEBtYWlsLmNvbSIsImlhdCI6MTYwMzk4NDI0OSwiZXhwIjoxNjAzOTg3ODQ5fQ.Ce40IIGmy3vIIP2nOFO7iPOkUjwMf2BymH7NKwM6NTk
export default class TodoApp extends React.Component{
    render(){
        return (
            <div className='todo-app'>
                {/*<HomeScreen/>*/}
        {/*<LoginScreen/>*/}
                {/*<RegisterScreen/>*/}
                {/*<ForgotPasswordScreen/>*/}
                {/*<PasswordResetScreen/>*/}
        <TodoListScreen/>
            </div>
        )
    }
}