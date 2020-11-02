import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, TextField } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default class ForgotPasswordScreen extends React.Component {
  render() {
    return (
      <Container className="screen">
        <ListAltIcon />
        <div className="title">Todo App</div>
        <div className="description">Best App To Get Organized</div>

        <TextField
          className="text-field"
          label="Email"
          variant="filled"
          fullWidth={true}
        />
        <Link to="/password-reset">
          <Button className="btn" variant="contained" color="primary">
            Reset Password
          </Button>
        </Link>
        <Link to="/login">
          <Button className="btn" variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </Container>
    );
  }
}
