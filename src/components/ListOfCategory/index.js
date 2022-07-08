import React, { useEffect, useState } from "react";
import Category from "../Category";
import { Item, List } from "./style";

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window
      .fetch("https://petgram-server-gerardo-miranda.vercel.app/categories")
      .then((resp) => resp.json())
      .then((result) => {
        setCategories(result);
        setLoading(false);
      });
  }, [setCategories]);

  return { categories, loading };
};

const ListOfCategory = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newSwohFixed = window.scrollY > 200;
      showFixed !== newSwohFixed && setShowFixed(newSwohFixed);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {loading ? (
          <Item key={"loading"}>
            <Category />
          </Item>
        ) : (
          categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))
        )}
      </List>
    );
  };

  return (
    <>
      {renderList()} {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategory;
