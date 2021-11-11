import React from 'react';
import Carousel from 'react-gallery-carousel';
import Lightbox from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './Gallery.css';

const Gallery = () => {
  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));

  return (
  
    <Carousel 
      images={images}
      className="gallery"
      style={{ height: 400, width: `100%` }}
      canAutoPlay={true}
      isAutoPlaying={true}
      autoPlayInterval={3000}
      leftIcon={<i className="fas fa-chevron-left gallery-arrows"></i>}
      rightIcon={<i className="fas fa-chevron-right gallery-arrows"></i>}
      minIcon={<div className="ver-mas">volver</div>}
      maxIcon={<div className="ver-mas">ver más</div>}
      // shouldSwipeOnMouse={true}
       />
  
  );
};

export default Gallery;