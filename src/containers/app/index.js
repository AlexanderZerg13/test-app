import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
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
        Blabla
      </div>
    );
  }
}

export default connect()(App)
