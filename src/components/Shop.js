import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    setItems(items.data);
  };


  return (
    <div className="container">
      <h1 className="title">Click on the items</h1>
      <div className="list-items">
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
    </div>
  );
}

export default Shop;
