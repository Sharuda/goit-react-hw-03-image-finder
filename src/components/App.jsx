import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    // const { textSearch } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
      </>
    );
  }
}
