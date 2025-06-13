import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";
import OrderSuccess from "./OrderSuccess";
const CartBill = ({ dishes, onRemoveItem }) => {
  const totalPrice = dishes.reduce(
    (sum, item) =>
      sum + (item.card.info?.defaultPrice || item.card.info?.price) / 100,
    0
  );

  return (
    <div className="p-4 border-t-2 mx-auto my-14 w-6/12 ">
      <h2 className="text-xl font-bold mb-4 text-amber-700">Bill Details</h2>
      {dishes.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center my-6  px-4 bg-gray-50 shadow-lg"
        >
          <div className="flex justify-between items-center">
            <img
              className="h-20 w-auto p-2 rounded-2xl"
              src={CDN_URL + item?.card?.info?.imageId}
              alt="item?.card?.info?.name"
            />
            <div>
              <span className="font-bold font-mono pr-2">
                {item.card.info.name}
              </span>
              <span className="font-semibold">
                - ₹
                {(item.card.info?.defaultPrice || item.card.info?.price) / 100}
              </span>
            </div>
          </div>

          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
            onClick={() => onRemoveItem(item.card.info.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex justify-between m-2 bg-gradient-to-b from-white to-gray-200">
        <div className="font-bold text-lg m-4 text-amber-700 ">
          Total : ₹{totalPrice}
        </div>
        <Link to="/ordersuccess">
          <button className="cursor-pointer m-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartBill;
