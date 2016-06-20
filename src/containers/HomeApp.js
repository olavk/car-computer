import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CounterApp extends Component {
  render() {
    return (
      <div>
        <div>You're home!</div>
        <Link to="/counter">counter</Link>
      </div>
    );
  }
}
