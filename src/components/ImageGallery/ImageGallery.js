// import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import { getImages } from '../Services/getImages';

import { List, Button } from './ImageGallery.styled';

export function ImageGallery({ items }) {
  return (
    <>
      <ul className="ImageGallery">
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.array,
};
