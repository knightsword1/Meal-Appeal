import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import react from "react";
import { ToastContainer, toast } from "react-toastify";

const ItemList = ({ items }) => {
  //   console.log(items);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    notify();
    // Dispatch an action
    dispatch(addItem(item));
  };

  const notify = () => toast("Item added !");

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id} // ✅ FIX: Used a valid unique key
          className="p-2 m-2 border-b-2 border-gray-200 text-left"
        >
          <div className="flex justify-between items-center">
            {" "}
            {/* ✅ Center image vertically */}
            {/* Text Content */}
            <div className="flex-1 min-h-[200px] w-[80%]">
              <div className="py-2 font-mono font-semibold">
                <span>
                  {item.card.info?.itemAttribute?.vegClassifier === "NONVEG"
                    ? "🟥 "
                    : "🟩 "}
                </span>
                <span>{item.card.info.name + " "}</span>
                <span>
                  - ₹
                  {(item.card.info?.defaultPrice || item.card.info?.price) /
                    100}
                </span>
              </div>
              <p className="text-xs text-justify px-7 my-5 h-auto">
                {item.card.info.description}
              </p>
            </div>
            {/* Image */}
            <div className="w-[20%]">
              <img
                className=" border border-slate-300 w-[156px] h-[156px] object-cover drop-shadow-xl rounded-2xl"
                src={CDN_URL + item?.card?.info?.imageId}
                alt={item.card.info.name}
              />
              <div className="relative">
                <button
                  className="absolute bottom-[-12px] inset-x-0 mx-auto w-[80px] bg-white shadow-lg px-4 py-2 rounded-lg border border-gray-200 text-green-600 font-bold hover:text-black cursor-pointer hover:scale-110"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
