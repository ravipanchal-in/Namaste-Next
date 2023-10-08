"use client";
import Card from "@/components/RestaurantCard";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import "@/app/globals.css";

export default function page() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [srchTxt, setSrchTxt] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/api/restaurants");
    const jsonData = await response.json();
    setAllRestaurants(jsonData);
    setFilteredRestaurants(jsonData);
  };

  const srchHandler = () => {
    const filteredData = allRestaurants.filter((item) =>
      (
        item?.data?.data?.name.toLowerCase() + item.data.data.cuisines.join(" ")
      ).includes(srchTxt.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  };

  const greetText = useAppSelector((state) => state.reducer.greetText);
  console.log("greetText", greetText);

  return (
    <div className="flex flex-col">
      {greetText}
      <div>
        <input
          value={srchTxt}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSrchTxt(e.target.value)
          }
          placeholder="search here..."
          className="border bottom-1 m-3 px-3 py-1"
        />
        <button onClick={() => srchHandler()}>Search</button>
      </div>
      <div className="resturants">
        {filteredRestaurants.map((item, index) => {
          return <Card key={index} data={item["data"]?.["data"]} />;
        })}
      </div>
    </div>
  );
}
