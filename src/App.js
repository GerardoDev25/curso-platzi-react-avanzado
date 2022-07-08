import React from "react";
import Logo from "./components/Logo";
import ListOfCategory from "./components/ListOfCategory";

import ListOfPhotoCard from "./container/ListOfPhotoCard";
import PhotoCardWithQuery from "./container/PhotoCardWithQuery";

import { GlobalStyle } from "./style/GlobalStyles";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategory />
          <ListOfPhotoCard categoryId={1} />
        </>
      )}
    </>
  );
};

export default App;
