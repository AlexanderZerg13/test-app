import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Repositories from '../repositories';
import './style.css';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount () {
    const { dispatch } = this.props;

    dispatch(actions.repositories.getList({
      q: 'language:javascript+created:>2019-07-01',
      sort: 'stars',
    }));
  }

  render() {
    return (
      <div className="App">
        <Repositories />
      </div>
    );
  }
}

export default connect()(App)
