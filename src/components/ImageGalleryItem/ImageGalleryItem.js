import React, { Component } from 'react';
import { ListItem, Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <ListItem>
        <Picture onClick={this.onModal} src={webformatURL} alt="img" />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </ListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
