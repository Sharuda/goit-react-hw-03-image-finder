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
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
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
            onChange={this.handleChange}
            value={value}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
