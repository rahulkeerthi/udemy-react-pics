import React from "react";
import ImageCard from './ImageCard'
import './ImageList.css';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });

  return (
    <div>
      <h4>Showing {images.length} results</h4>
      <div className="image-list">{images}</div>
    </div>
  )
};

export default ImageList;