import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      localStorage.getItem("user") == null ?
        <Redirect to="/login"/> :
        <Redirect to="/app"/>
    );
  }
}