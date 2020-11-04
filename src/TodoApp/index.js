import React from 'react';
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import PasswordResetScreen from './PasswordResetScreen'
import TodoListScreen from './TodoListScreen'
import NestedRouteUI from './NestedRouteUI'
import { connect } from 'react-redux'
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

    render(){
        const {token} = this.props

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
    token : state.auth.token,
    completedItems: state.todo.completedItems,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)