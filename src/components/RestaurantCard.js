import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl transition-all">
      <div className="m-1 p-1 w-[250px] h-[420px] rounded-lg bg-gray-50 hover:bg-slate-100 hover:cursor-pointer hover:scale-98 ">
        <img
          className="rounded-lg w-full  h-[60%] justify-center"
          alt="naan-paneer"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold font-serif">{name}</h3>
        <h4 className="font-Gilroy font-medium flex justify-normal">
          <div className="flex items-center justify-center w-4 h-4 bg-green-500 rounded-full mt-1 mr-1">
            <span className="text-white text-s">★</span>
          </div>
          {avgRating} &#183;
          <h4 className="font-bold pl-2">
            {resData.info.sla.deliveryTime} mins
          </h4>
        </h4>
        <h4 className=" font-serif font-medium flex flex-wrap">
          {cuisines.join(", ")}
        </h4>

        <h4 className="font-medium">{costForTwo}</h4>
      </div>
    </div>
  );
};

//* Higher Order Component
// input = RestaurantCard and output = RestaurantCardOffer

export const withOfferLabel = (RestaurantCard) => {
  // returns a component
  return (props) => {
    const { resData } = props;
    const header = resData?.info?.aggregatedDiscountInfoV3?.header;
    const subHeader = resData?.info?.aggregatedDiscountInfoV3?.subHeader;

    return (
      <div className="relative">
        <label className="absolute font-bold bg-gray-800 text-white top-4 left-8 rounded-xl p-1">
          {header + " " + (subHeader == undefined ? " " : subHeader)}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
