import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
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
      q: `language:javascript+created:>${moment().add(-1, 'M').format('YYYY-MM-DD')}`,
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
