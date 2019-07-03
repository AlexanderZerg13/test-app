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
    search: '',
    license: '',
  };

  handleChangeSearch = event => {
    this.setState({search: event.target.value});
  }

  handleChangeLicense = event => {
    this.setState({license: event.target.value});
  }

  renderRepository = (item, index) => {
    return (
      <div className="Item" key={index}>
        <div className="Item__row">
          <div className="Item__name">{item.name}</div>
          <div className="Item__star">{`Звезд: ${item.stargazers_count}`}</div>
        </div>
        <div className="Item__description">{item.description}</div>
        <div className="Item__license">{(item.license || {}).name}</div>
      </div>
    );
  }

  render() {
    const { search, license } = this.state;
    const { fetching, items } = this.props;

    const preparedItems = items
      .filter(item => (item.name || "").includes(search) || (item.description || "").includes(search))
      .filter(item => ((item.license || {}).name || "").includes(license))

    return (
      <div className="Repositories">
        <div className="Repositories__Search">
          <div className="Search__row">
            Поиск:
            <input
              className="Search__input"
              value={search}
              onChange={this.handleChangeSearch}
            />
          </div>
          <div className="Search__row">
            Лицензия:
            <input
              className="Search__input"
              value={license}
              onChange={this.handleChangeLicense}
            />
          </div>
        </div>
        {fetching && (
          <div className="Repositories__Info">
            Загрузка...
          </div>
        )}
        {!fetching && preparedItems.length === 0 && (
          <div className="Repositories__Info">
            Данных нет
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
