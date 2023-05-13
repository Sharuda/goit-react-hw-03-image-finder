import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button className="Button-load" onClick={onClick}>
      Load more
    </button>
  );
};
