import React from "react";
import CSS from "./TrendingCard.module.css";

const TrendingCard = ({ places }) => {
  return (
    <React.Fragment>
      {places.map((place) => (
        <div
          key={place.city}
          className={CSS["trending-contries"]}
          onClick={() => {
            alert(`City: ${place.city}, Country: ${place.country}`);
          }}
        >
          <div className={CSS["trending-img"]}>
            <img src={place.img} alt={place.img}/>
          </div>
          <div className={CSS['trending-info']}>
            <h2>{place.city}</h2>
            <h3>{place.country}</h3>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default TrendingCard;
