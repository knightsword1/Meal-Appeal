import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // ------------------------------------------------------------
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardOffer = withOfferLabel(RestaurantCard);

  // * Whenever state variables update, react triggers a reconciliation cycle (re-renders the component).

  // console.log("Body Rendered", listOfRestaurants);
  // Similar to below code
  // const arr = useState(resList);

  // const [listOfRestaurants, setListOfRestaurant] = arr;

  // OR

  // const listOfRestaurants = arr[0];
  // const listOfRestaurants = arr[1];
  // ----------------------------------------------------------------

  // let listOfRestaurants = resList;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/swiggy");

    const json = await data.json();
    // console.log(json);

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  // Conditional Rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-around">
        <div className="search m-4 p-4 justify-center items-center">
          <input
            type="text"
            className="search-box border border-solid border-black m-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="cursor-pointer text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              // Filter the restaurant cards and update the UI.
              //searchText

              const filteredRestaurant = listOfRestaurants.filter((res) => {
                // console.log(res);
                // console.log(res.info.name);
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex justify-center items-center">
          <button
            className="cursor-pointer text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            onClick={() => {
              // Filter Logic for restaurants rated above 4
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );

              setFilteredRestaurant(filteredList);

              // console.log(listOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className=" ml-[calc(7%+52px)] mr-[calc(7%+52px)] flex flex-wrap gap-x-6 gap-y-5 justify-evenly">
        {/* Restaurant Cards */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* add the current offer if present as aggregatedDiscountInfoV3 */}
            {restaurant.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardOffer resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
