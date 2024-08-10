import React from 'react';
import PropTypes from 'prop-types';

function ExampleCarouselImage({ imageSrc, text }) {
  return (
    <div className="carousel-image-container">
      <img
        className="d-block w-100"
        src={imageSrc} // Dynamic image URL
        alt={text}
      />
      <div className="carousel-image-overlay">
        <h3>{text}</h3>
      </div>
    </div>
  );
}

ExampleCarouselImage.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Added prop type for imageSrc
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
