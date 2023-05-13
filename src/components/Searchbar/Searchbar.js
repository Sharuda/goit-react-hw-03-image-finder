import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  Image,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    valueSearch: '',
  };

  handleSearchbarSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.valueSearch);
  };

  handleSearchbarInputChange = ({ target: { value } }) => {
    this.setState({ valueSearch: value });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSearchbarSubmit}>
          <SearchFormBtn>
            <Image href="../../search-svgrepo-com.svg" alt="search" />
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchbarInputChange}
            value={this.state.searchInputText}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
