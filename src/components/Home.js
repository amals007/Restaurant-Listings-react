import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  async function fetchData() {
    await fetch("./restaurants.json")
      .then((data) => data.json())
      .then((res) => setRestaurants(res.restaurants));
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log('My data is',restaurants);
  return (
    <div>
      {restaurants.map((item) => (
        <div>
            <h1>
                {item.name}
                
            </h1>
        </div>
      ))}
    </div>
  );
}

export default Home;
