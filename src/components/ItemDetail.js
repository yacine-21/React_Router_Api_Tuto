import React, { useState, useEffect } from "react";
import "../App.css";

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();    
  }, []);

  const [item, setItem] = useState({
      images:{},
  });

  const fetchItem = async () =>{
    const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
    const item = await fetchItem.json();
    setItem(item.data.item);
}

if(item.media){
    if(item.media[0] === undefined){
        console.log(item.media[0] = "true");
        
    } else {
        console.log(item);
    }
    return (
      <div className="container">
        <h1>{item.name}</h1>
        <h3>Type : {item.type}</h3>
        <p>Description : {item.description}</p>
        <p>Rarity : {item.rarity}</p>
        <p>Rate : {item.ratings.avgStars}/5</p>
        <img src={item.images.background} alt=""/>
        <video height="600px" width="500"control="true" autoPlay loop src={item.media[0].src}></video>
      </div>
    );
} else{
    return (
        <div>
          <h1>{item.name}</h1>
          <img src={item.images.background} alt=""/>
        </div>
      );
}

}

export default ItemDetail;
