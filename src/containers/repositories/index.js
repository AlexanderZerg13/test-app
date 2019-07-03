import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

class Repositories extends Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
  };

  state = {
    search : '',
  };

  handleChangeSearch = event => {
    this.setState({search: event.target.value});
  }

  renderRepository = (item, index) => {
    return (
      <div className="Item" key={index}>
        <div className="Item__row">
          <div className="Item__name">{item.name}</div>
          <div className="Item__star">{`Звезд: ${item.stargazers_count}`}</div>
        </div>
        <div className="Item__description">{item.description}</div>
      </div>
    );
  }

  render() {
    const { search } = this.state;
    const { fetching, items } = this.props;

    const preparedItems = items
      .filter(item => (item.name || "").includes(search) || (item.description || "").includes(search));

    return (
      <div className="Repositories">
        <input
          className="Repositories__Search"
          value={search}
          onChange={this.handleChangeSearch}
        />
        {fetching && (
          <div className="Repositories__Info">
            Загрузка...
          </div>
        )}
        {!fetching && (
          <div className="Repositories__List">
            {preparedItems.map(this.renderRepository)}
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({...state.repositories})
)(Repositories);
