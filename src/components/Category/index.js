import React from "react";
import { Anchor, Image } from "./style";
const DEFAULT_IMG = "https://i.imgur.com/dJa0Hpl.jpeg";

const Category = ({ cover = DEFAULT_IMG, path, emoji = "?" }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt="image" />
      {emoji}
    </Anchor>
  );
};

export default Category;
