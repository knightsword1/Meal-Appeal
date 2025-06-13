import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  // Building a custom hook = useRestaurantMenu (created in utils folder);
  // Idea is to use the custom hook to get resInfo using resId;
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.cards[2]?.card?.card?.info.sla || {};

  const getItemCards = (resInfo) => {
    return (
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards ||
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
        ?.card?.itemCards ||
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards ||
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
        ?.card?.itemCards ||
      []
    );
  };

  // const itemCards = getItemCards(resInfo);

  // console.log(itemCards);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>

      <div className="bg-gradient-to-b from-white to-gray-200 w-6/12 h-40 mx-auto rounded-2xl flex items-center justify-center">
        <div className="bg-white rounded-2xl w-[95%] h-[80%]">
          <div className="my-auto">
            <div className="font-semibold text-left flex m-2">
              <div className="flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mt-1 mr-1">
                <span className="text-white text-s ">★</span>
              </div>
              {avgRating} &#183; {costForTwoMessage}
            </div>
            <div className="text-left mx-5 text-amber-600 font-medium">
              {cuisines?.join(", ")}
              <div className="text-black my-1 font-semibold">
                Time : {minDeliveryTime}-{maxDeliveryTime} mins
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="font-serif font-semibold text-amber-800 m-6"> Menu </p>

      {/* Categories Accordions */}

      {categories?.map((category, index) => (
        //* Controlled Component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            showIndex === index ? setShowIndex(null) : setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
