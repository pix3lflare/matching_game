import React from 'react';
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import PasswordResetScreen from './PasswordResetScreen'
import TodoListScreen from './TodoListScreen'
import NestedRouteUI from './NestedRouteUI'
import { connect } from 'react-redux'
import { increment, decrement } from '../App.js'
import { bindActionCreators } from 'redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


class PrivateRoute extends React.Component{
    render(){
        const {token, component} = this.props

         return (
             <Route render={() => token ? component: <Redirect to="/login"/> }/>
         )
    }
}


class TodoApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            token: null
        }
    }

    setAuthToken = (token) => {
        console.log('Set Auth Token: ' + token )
        this.setState({token})
    }

    render(){
        const {token} = this.state
        return (
            <div className='todo-app'>
                <div onClick={()=>this.props.increment()}>Counter: {this.props.counter}</div>
                <Router>

                    <Switch>

                        <Route exact path="/">
                            <HomeScreen/>
                        </Route>

                        <Route path="/login">
                            <LoginScreen setAuthToken={this.setAuthToken} token={token}/>
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

                        <PrivateRoute path="/todo-dashboard" component={<TodoListScreen/>} token={token}/>

                        <Route path="/nested">
                            <NestedRouteUI/>
                        </Route>

                    </Switch>

                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    counter: state.value,
    valueList: state.valueList,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    increment,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)