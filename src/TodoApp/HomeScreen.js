import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container className="screen">
        <ListAltIcon />
        <div className="title">Todo App</div>
        <div className="description">Best App To Get Organized</div>
        <Link to="/login">
          <Button className="btn" variant="contained" color="primary">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button className="btn" variant="contained" color="primary">
            Register
          </Button>
        </Link>
        <Link to="/forgot-password">
          <div className="forgot-link">Forgot Password?</div>
        </Link>
      </Container>
    );
  }
}
