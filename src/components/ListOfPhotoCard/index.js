import React from "react";
import PhotoCard from "../PhotoCard";

const ListOfPhotoCard = () => {
  return (
    <ul style={{ paddingLeft: 0 }}>
      {[1, 2, 3].map((id) => (
        <PhotoCard key={id} />
      ))}
    </ul>
  );
};

export default ListOfPhotoCard;
