import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //* If no dependency array => useEffect is called on every render;
  //* If dependency array is empty=[] => useEffect is called on initial render (just once);
  //* If dependency array is [btnNameReact] => useEffect is called on every time btnNameReact is updated;

  /* useEffect(() => {
    console.log("Use Effect is called.");
  }, [btnNameReact]); */

  const { loggedInUser } = useContext(UserContext);

  // * Subscribing to the store using a Selector
  // The cartItems will get the data of its items
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between tablecloth">
      <div className="logo-container">
        <img className="w-40 p-6 rounded-full" src={LOGO_URL} />
      </div>
      <nav className=" py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 text-lg font-semibold">
          <span className="text-[#183153]">Status :</span>
          <span className="pr-2">{onlineStatus ? "✅ " : "🔴 "}</span>
        </div>
        <ul className="flex space-x-6 text-[#183153] font-semibold">
          <li className="hover:text-amber-800">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-amber-800">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-amber-800">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="relative flex items-center">
            <Link to="/cart">
              <img
                className="h-6 w-6 object-contain hover:scale-110"
                src="https://static-00.iconduck.com/assets.00/cart-icon-2008x2048-3u2x72lr.png"
              />
            </Link>
            <span className="ml-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              ({cartItems.length})
            </span>
          </li>
        </ul>
        <button
          className="bg-slate-300 text-[#183153] px-2 py-2 rounded-lg shadow-md hover:bg-blue-100 hover:text-amber-700 transition font-semibold ml-2"
          onClick={() => {
            setBtnNameReact(btnNameReact === "Login" ? "Log Out" : "Login");
          }}
        >
          {btnNameReact}
        </button>
      </nav>
    </div>
  );
};

export default Header;
