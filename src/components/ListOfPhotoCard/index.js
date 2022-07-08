import React from "react";
import PhotoCard from "../PhotoCard";


const ListOfPhotoCardComponent = ({ data: { photos = [] } }) => {
  return (
    <ul style={{ paddingLeft: 0 }}>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} data={photo} />
      ))}
    </ul>
  );
};

export default ListOfPhotoCardComponent