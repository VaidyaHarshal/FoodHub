import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState(resList);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = restaurantList.filter((res) => {
            return res.info.avgRating > 4.2;
          });
          setrestaurantList(filteredList);
        }}
      >
        Filter
      </button>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
