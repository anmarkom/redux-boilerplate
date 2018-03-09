import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class App extends Component {
  static propTypes = {

  };

  render () {
    return <div>Hello</div>;
  }
}

export default connect(state => state, actions)(App);
