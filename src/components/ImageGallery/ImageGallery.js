import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery, onOpenModal }) => {
  return (
    <>
      <ul id="forScroll">
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onOpenModal={onOpenModal}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
